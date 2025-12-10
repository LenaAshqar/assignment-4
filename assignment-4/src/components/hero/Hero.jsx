import {FiArrowUpRight} from "react-icons/fi";
import { FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import {useEffect, useState} from "react";

import Nav from "../nav/Nav.jsx";
import LetterGlitch from "../letterglitch/LetterGlitch.jsx";

const SOCIAL_LINKS = [
    { label: 'Email', href: 'mailto:leena.alashqar2@gmail.com', Icon: FiMail },
    { label: 'GitHub', href: 'https://github.com/LenaAshqar/', Icon: FiGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leena-al-ashqar-507750264/', Icon: FiLinkedin }
];

const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
        return 'Good morning';
    }

    if (hour < 17) {
        return 'Good afternoon';
    }

    return 'Good evening';
};

function Hero({theme, setTheme}) {
    const [greeting, setGreeting] = useState(getGreeting);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setGreeting(getGreeting());
        }, 60_000);

        return () => window.clearInterval(interval);
    }, []);

    return(
        <header className="hero" id="home">
            <Nav theme={theme} setTheme={setTheme}/>

            <div className="hero-grid">
                <div className="hero-copy">
                    <span className="eyebrow">Junior software engineering student</span>

                    <h1>
                        <span className="hero-greeting">{greeting}, I&apos;m Leena Al Ashqar.</span>
                        <span className="hero-headline">
                                    Building human-centred experiences that balance delightful UI with resilient engineering.
                                </span>
                    </h1>

                    <p className="hero-description">
                        Interested in traversing the diverse domains in which software can be applied and exploring the
                        world of quantum computing.
                    </p>

                    <div className="hero-actions">
                        <a className="primary-link" href="#projects">
                            View projects
                            <FiArrowUpRight aria-hidden="true"/>
                        </a>

                        <div className="social-links" role="list">
                            {SOCIAL_LINKS.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                                    aria-label={link.label}
                                    role="listitem"
                                >
                                    <link.Icon aria-hidden="true"/>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="letter-glitch-card">
                    <LetterGlitch className="letter-glitch"/>
                </div>
            </div>
        </header>
    )
}

export default Hero;