import "./About.css";

const highlights = [
    {
        title: 'Approach',
        description: 'Experiment boldly, refine carefully. I rapidly prototype concepts, test their real-world value, and evolve them into elegant, scalable solutions that balance creativity with reliability.'
    },
    {
        title: 'Focus areas',
        description: 'Secure cloud applications, user-friendly interfaces, and the intersection of applied AI in developing robust web applications — where technology amplifies human capability.'
    },
    {
        title: 'Currently learning',
        description: 'Exploring different information security techniques, strengthening my backend architecture skills, and mastering software design and construction principles to build efficient maintainable projects.'
    }
];

const About = () => (
    <section id="about" className="section about-section">
        <div className="section-inner" data-animate="fade">
            <div className="section-header">
                <span className="section-eyebrow">About</span>
                <h2 className="section-title">Grounded in curiosity, driven by craft.</h2>
                <p className="section-description">
                    I am a junior software engineer at KFUPM with a passion for building purposeful digital experiences.
                    My work spans security-focused platforms, robust web applications, and carefully designed software following SOLID principles for maximum maintainability and performance.
                </p>
            </div>

            <div className="about-grid">
                {highlights.map((item, index) => (
                    <article
                        key={item.title}
                        className="about-card surface-card"
                        data-animate="fade-up"
                        style={{ '--reveal-index': index }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default About;