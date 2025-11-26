import React from "react";
import pythonLogo from "../../assets/python.png";
import javaLogo from "../../assets/java.png";
import sqlLogo from "../../assets/sql.png";
import htmlLogo from "../../assets/html.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";
import "./Skills.css"

const skills = [
    {
        icon: pythonLogo,
        name: "Python",
        description: "APIs, automation, and data tooling crafted with clarity and tests."
    },
    {
        icon: javaLogo,
        name: "Java",
        description: "Object-oriented design and backend services with Spring foundations."
    },
    {
        icon: sqlLogo,
        name: "SQL",
        description: 'Efficient queries, modelling, and reporting for analytics-ready datasets.'
    },
    {
        icon: htmlLogo,
        name: 'HTML',
        description: 'Accessible semantic markup that keeps interfaces intuitive for everyone.'
    },
    {
        icon: cssLogo,
        name: 'CSS',
        description: 'Responsive layouts, fluid motion, and refined visual languages.'
    },
    {
        icon: jsLogo,
        name: 'JavaScript',
        description: 'Interactive front-end experiences with a focus on performance and DX.'
    }
];

const Skills = () => (
    <section id="skills" className="section skills-section">
        <div className="section-inner" data-animate="fade">


        <div className="section-header">
                <span className="section-eyebrow">Skills</span>
                <h2 className="section-title">Tools that turn ideas into polished products.</h2>
                <p className="section-description">
                    From back-end architecture to a polished front-end, I combine analytical thinking with design sensitivity to
                    deliver dependable, beautiful software.
                </p>
            </div>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <article
                        key={skill.name}
                        className="skill-card surface-card"
                        data-animate="fade-up"
                        style={{ '--reveal-index': index }}
                    >
                        <span className="skill-icon">
                            <img src={skill.icon} alt={`${skill.name} logo`} />
                        </span>
                        <div className="skill-copy">
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);
export default Skills;
