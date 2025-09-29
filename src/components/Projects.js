import "../css/Projects.css";

// ICONS
import { BsBoxArrowUpRight } from "react-icons/bs";

function Projects() {
    const projects = [
        {
            title: "Calculator", 
            desc: "An online calculator that uses basic mathematical operations.", 
            tags: ["ReactJS", "HTML", "CSS"], 
            difficulty: "Med", 
            link: "https://aax-calculator.netlify.app/"
        },
        {
            title: "RPS", 
            desc: "A simple rps game with random module.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-rps-game.netlify.app/"
        },
        {
            title: "Task App", 
            desc: "A to-do list with basic creation and deletion.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-rps-game.netlify.app/"
        },
        {
            title: "Employee Authentication App", 
            desc: "An employee login app with basic authentication capabilities.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-employe-auth-form.netlify.app/"
        },
        {
            title: "BMI Calculator", 
            desc: "An app that calculates body mass index.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-bmi-calculator-app.netlify.app/"
        },
        {
            title: "Joke Generator", 
            desc: "A joke application that generates hardcoded jokes.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-joke-app.netlify.app/"
        },
        {
            title: "Domain Name Generator", 
            desc: "An application that generates domain names with copy/paste functionality.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Med",
            link: "https://aax-domain-name-generator.netlify.app/"
        },
        {
            title: "Quiz Application", 
            desc: "A quiz application with various categories and color-coded answer choices.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Hard",
            link: "https://aax-quiz-app.netlify.app/"
        },
        {
            title: "Password Validator", 
            desc: "A simple password validator app.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-password-validator.netlify.app/"
        },
        {
            title: "Book Catalog App", 
            desc: "A basic book cataloging system.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Easy",
            link: "https://aax-book-catalog-app.netlify.app/"
        },
        {
            title: "Memory Game", 
            desc: "A timed card-flipping game that tests the user's memory.",
            tags: ["ReactJS", "HTML", "CSS"],
            difficulty: "Hard",
            link: "https://aax-memory-game.netlify.app/"
        }
    ]

    return (
        <div className="projects-container">
            <header className="header__hero__projects">
                <h1 className="title-header">
                    Featured <span className="green-text">Projects</span>
                </h1>
                <p className="desc-header">
                   Here are some of my recent projects that 
                   showcase my skills and passion for development.
                </p>
            </header>
            <section className="projects-section">
                <div className="projects">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <a href={project.link} className="project-btn" target="_blank" rel="noreferrer"><BsBoxArrowUpRight /></a>
                            <h1 className="project-title">{project.title}</h1>
                            <p className="project-desc">{project.desc}</p>
                            <ul className="project-tags">
                                {project.tags.map((tag) => (
                                    <li key={tag} className="tag">{tag}</li>
                                ))}
                            </ul>
                            <p className="project-difficulty"  data-level={(project.difficulty)}>{project.difficulty}</p>
                        </div>
                    ))}
                </div>
            </section>
    </div>
    )
}
export default Projects