import Nav from "../../Navigate/Nav"
import Project from "./Project"
import { projects } from "../../data/projects"
import "../../styles.css"
import "./Portfolio.css"

function Portfolio() {
    return (
        <div className="page">
            <Nav />
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        previewImage={project.previewImage}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        startDate={project.startDate}
                        endDate={project.endDate}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio