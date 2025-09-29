import "../css/Hero.css";

import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero-container">
            <header className="header__hero">
                <h1 className="title-header">
                    Hello, I'm <span className="green-text">AaXanah</span>
                </h1>
                <h3 className="subtitle-header">
                    Full-Stack Software Engineer
                </h3>
                <p className="desc-header">
                    I craft digital experiences with modern technologies. Passionate about 
                    building scalable applications and 
                    solving complex problems through clean, efficient code.
                </p>
            </header>
            <div className="nav-btns-container">
                <Link to="/projects" className="projects-btn">View My Works</Link>
            </div>
        </div>
    )
}
export default Hero