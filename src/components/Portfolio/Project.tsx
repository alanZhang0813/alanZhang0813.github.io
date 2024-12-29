import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Portfolio.css";

export type ProjectProps = {
    previewImage: string;
    title: string;
    description: string;
    technologies: Array<string>;
    startDate: string;
    endDate: string;
    link: string;
};

const Project = ({
    previewImage,
    title,
    description,
    technologies,
    startDate,
    endDate,
    link,
}: ProjectProps) => {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    return (
        <div className="project-card">
            <div className="project-header" onClick={toggleActive}>
                <h2>{title}</h2>
                <button>{active ? <FaMinus /> : <FaPlus />}</button>
            </div>

            {active && (
                <div className={`project-body ${active ? "active" : ""}`}>
                    <img src={previewImage} alt={`${title} project preview`} />
                    <p>{description}</p>
                    <p className="technologies">
                        Technologies: {technologies.join(", ")}
                    </p>
                    <p>
                        Duration: {startDate} - {endDate}
                    </p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        Link to GitHub Repository
                    </a>
                </div>
            )}

        </div>
    );
};

export default Project;
