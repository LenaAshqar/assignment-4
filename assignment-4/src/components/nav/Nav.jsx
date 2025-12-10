import {FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX} from "react-icons/fi";
import {useEffect, useId, useMemo, useRef, useState} from "react";

const NAV_ITEMS = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
];

function Nav({theme, setTheme}){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navMenuId = useId();
    const navRef = useRef(null);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.theme = theme;
        if (document.body) {
            document.body.dataset.theme = theme;
        }
        window.localStorage.setItem('theme-preference', theme);
    }, [theme]);

    useEffect(() => {
        const handleResize = () => {if (window.innerWidth >= 960) {setIsNavOpen(false);}};

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);}, []);

    useEffect(() => {
        const handleKeyDown = event => {if (event.key === 'Escape') {setIsNavOpen(false);}
        };
        return () => window.removeEventListener('keydown', handleKeyDown);}, []);

    useEffect(() => {if (!isNavOpen) {return undefined;}

        const handleClick = event => {
            if (!navRef.current || navRef.current.contains(event.target)) {return;}
            setIsNavOpen(false);};

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [isNavOpen]);

    useEffect(() => {
        if (!document.body) {return undefined;}
        document.body.classList.toggle('nav-open', isNavOpen);
        document.body.classList.remove('nav-open');
    }, [isNavOpen]);

    const ThemeIcon = useMemo(() => (theme === 'dark' ? FiSun : FiMoon), [theme]);
    const MenuIcon = isNavOpen ? FiX : FiMenu;

    const handleThemeToggle = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleNavToggle = () => {
        setIsNavOpen(previous => !previous);
    };

    const handleNavLinkClick = () => {
        setIsNavOpen(false);
    };

    return (
        <nav className="site-nav">
        <a href="#home" className="brand" aria-label="Home">
            LA
        </a>

        <button
            type="button"
            className="nav-toggle"
            onClick={handleNavToggle}
            aria-expanded={isNavOpen}
            aria-controls={navMenuId}
        >
            <span className="visually-hidden">{isNavOpen ? 'Close navigation' : 'Open navigation'}</span>
            <MenuIcon aria-hidden="true"/>
        </button>

        <div id={navMenuId} className={`nav-menu ${isNavOpen ? 'is-open' : ''}`}>
            <div className="nav-links" role="list">
                {NAV_ITEMS.map(item => (
                    <a key={item.label} href={item.href} role="listitem" onClick={handleNavLinkClick}>
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="nav-actions">
                <button
                    type="button"
                    className="theme-toggle"
                    onClick={handleThemeToggle}
                    aria-label={`Activate ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    <ThemeIcon aria-hidden="true"/>
                </button>

                <a className="nav-cta" href="#contact" onClick={handleNavLinkClick}>
                    Let&apos;s talk
                </a>
            </div>
        </div>
    </nav>
    )
}

export default Nav;