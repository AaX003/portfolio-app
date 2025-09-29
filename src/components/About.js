import "../css/About.css";
import { FaCode, FaBrain  } from "react-icons/fa6";

function About() {
  return (
    <div className="about-container">
      <header className="header__hero">
        <h1 className="title-header">
          About <span className="green-text">Me</span>
        </h1>
        <p className="desc-header">
          I'm a passionate software engineer with a love for 
          creating innovative solutions and building products 
          that make a difference.
        </p>
      </header>

      <section className="about-stats">
        <ul className="stats">
          <li className="value-stat">
            <span className="value-svg">
                <FaCode />
            </span>
            <span className="title">~20+</span>{" "}<br />
            <span className="text">Projects completed</span>
          </li>
          <li className="value-stat">
            <span className="value-svg">
                <FaBrain />
            </span>
            <span className="title">2+</span>{" "}<br />
            <span className="text">Years of Experience</span>
          </li>
          <li className="text-stat">
            <span className="title">Innovation</span>{" "}<br />
            <span className="text">
              Constantly learning and adopting new technologies to solve complex problems.
            </span>
          </li>
          <li className="text-stat">
            <span className="title">Accessibility</span>{" "}<br />
            <span className="text">
              Creating scalable and enjoyable applications everyone can enjoy.
            </span>
          </li>
          <li className="text-stat">
            <span className="title">Enjoyability</span>{" "}<br />
            <span className="text">
              The journey of being a developer and bringing ideas to life makes 
              the experience worth it.
            </span>
          </li>
           <li className="text-stat">
            <span className="title">Commitment</span>{" "}<br />
            <span className="text">
              Dedicating long hours in developing projects to ensure the highest quality.
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default About;
