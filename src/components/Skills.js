import { useState, useEffect } from 'react';
import "../css/Skills.css";


function Skills() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setProgress((prevProgress) => {
        const newProgress = prevProgress + 1; 
        if (newProgress >= 100) {
            clearInterval(interval);
            return 100;
        }
        return newProgress;
        });
    }, 100); 

    return () => clearInterval(interval); 
    }, [progress]);

   return (
    <div className="skills-container">
      <header className="header__hero__skills">
        <h1 className="title-header">
          What I Can <span className="green-text">Do</span>
        </h1>
        <p className="desc-header">
          A comprehensive overview of my technical skills 
          and proficiency levels across different technologies and tools.
          My skills are still being heavily defined in these areas.
        </p>
      </header>

      <section className="skills-section">
        <main className="skills-categories">
          <h1 className="skills-title">Frontend</h1>
          <h3 className="low-opacity-text">HTML & CSS</h3>
          <progress value={Math.min(progress, 88)} max={100}>
            <small className="progress-percent">{progress.min}</small>
          </progress>

          <h3 className="low-opacity-text">JavaScript</h3>
          <progress value={Math.min(progress, 75)} max={100} />

          <h3 className="low-opacity-text">React</h3>
          <progress value={Math.min(progress, 80)} max={100} />

          <h3 className="low-opacity-text">Python</h3>
          <progress value={Math.min(progress, 55)} max={100} />
        </main>
      </section>

      <section className="skills-section">
        <main className="skills-categories">
          <h1 className="skills-title">Backend</h1>
          <h3 className="low-opacity-text">MongoDB</h3>
          <progress value={Math.min(progress, 58)} max={100} />
         
          <h3 className="low-opacity-text">Node.js</h3>
          <progress value={Math.min(progress, 45)} max={100} />

          <h3 className="low-opacity-text">Express.js</h3>
          <progress value={Math.min(progress, 40)} max={100} />

          <h3 className="low-opacity-text">SQL</h3>
          <progress value={Math.min(progress, 80)} max={100} />

          <h3 className="low-opacity-text">PHP</h3>
          <progress value={Math.min(progress, 25)} max={100} />

          <h3 className="low-opacity-text">MySQL</h3>
          <progress value={Math.min(progress, 50)} max={100} />
        </main>
      </section>

      <section className="skills-section">
        <main className="skills-categories">
          <h1 className="skills-title">Cloud</h1>
          <h3 className="low-opacity-text">Netlify</h3>
          <progress value={Math.min(progress, 100)} max={100} />

          <h3 className="low-opacity-text">Vercel</h3>
          <progress value={Math.min(progress, 75)} max={100} />

          <h3 className="low-opacity-text">AWS</h3>
          <progress value={Math.min(progress, 40)} max={100} />

          <h3 className="low-opacity-text">Github Pages</h3>
          <progress value={Math.min(progress, 40)} max={100} />
        </main>
      </section>

        <section className="skills-section">
        <main className="skills-categories">
          <h1 className="skills-title">Other Frameworks</h1>
          <h3 className="low-opacity-text">Blender</h3>
          <progress value={Math.min(progress, 30)} max={100} />

          <h3 className="low-opacity-text">Git</h3>
          <progress value={Math.min(progress, 55)} max={100} />

          <h3 className="low-opacity-text">Figma</h3>
          <progress value={Math.min(progress, 90)} max={100} />
        </main>
      </section>
    </div>
  );
}
export default Skills;