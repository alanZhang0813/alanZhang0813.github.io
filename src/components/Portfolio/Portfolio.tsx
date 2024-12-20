import Nav from "../../Navigate/Nav"
import Project from "./Project"
import "../../styles.css"

function Portfolio() {
    const projects = [
        Project (
            "husksheets-image",
            "Husksheets",
            "Google Sheets recreation",
            ["T3 Stack", "TypeScript", "NodeJS", "Prisma", "PlanetScale"],
            "6/2024",
            "7/2024",
            "url"
        ),
        Project (
            "under-the-weather-image",
            "Under the Weather",
            "Disease data visualization full-stack project",
            ["TypeScript", "Python", "MySQL"],
            "6/2024",
            "7/2024",
            "url"
        )
    ]

    return (
        <div className="page">
            <Nav/>
            <table>
                <tbody>
                    <tr>
                        {/* {projects.map(project)} */}
                        <td>
                            {/* <Project/> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Portfolio