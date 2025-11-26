import { useEffect, useState } from 'react';
import './App.css';

import Hero from './components/hero/Hero.jsx';
import About from './components/about/About.jsx';
import Projects from './components/projects/Projects.jsx';
import Skills from './components/skills/Skills.jsx';
import Contact from './components/contact/Contact.jsx';
import ClickSpark from './components/clickspark/ClickSpark.jsx';


const resolveInitialTheme = () => {
    if (typeof window === 'undefined') {
        return 'dark';
    }

    const stored = window.localStorage.getItem('theme-preference');
    if (stored === 'light' || stored === 'dark') {
        return stored;
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
    return prefersDark ? 'dark' : 'light';
};

function App() {
    const [theme, setTheme] = useState(resolveInitialTheme);


    useEffect(() => {
        document.documentElement.classList.add('has-js');

        return () => {
            document.documentElement.classList.remove('has-js');
        };
    }, []);

    return (
        <div className="app-shell">
            <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >
            <div className="app-background" aria-hidden="true" />
                <Hero/>

            <main className="page-content">
                <About />
                <Skills />
                <Projects theme={theme} />
                <Contact />
            </main>
            </ClickSpark>
        </div>
    );
}

export default App;
