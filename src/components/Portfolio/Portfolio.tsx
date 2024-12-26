import Nav from "../../Navigate/Nav"
import Project from "./Project"
import { ProjectProps } from "./Project"
import "../../styles.css"
import "./Portfolio.css"

function Portfolio() {
    const projects: ProjectProps[] = [
        {
            previewImage: "husksheets-image",
            title: "Husksheets",
            description: "Google Sheets recreation",
            technologies: ["T3 Stack", "TypeScript", "NodeJS", "Prisma", "PlanetScale"],
            startDate: "6/2024",
            endDate: "7/2024",
            link: "url"
        },
        {
            previewImage: "under-the-weather-image",
            title: "Under the Weather",
            description: "Disease data visualization full-stack project",
            technologies: ["TypeScript", "Python", "MySQL"],
            startDate: "6/2024",
            endDate: "7/2024",
            link: "url"
        }
    ]

    return (
        <div className="page">
            <Nav />
            <table className="portfolio-table">
                <tbody>
                    <tr>
                        {projects.map((project, index) => (
                            <td key={index}>
                                <Project {...project} />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Portfolio