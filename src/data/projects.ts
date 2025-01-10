export interface Project {
    previewImage: string;
    title: string;
    description: string;
    technologies: Array<string>;
    startDate: string;
    endDate: string;
    link: string;
}

export const projects: Project[] = [
    {
        previewImage: "husksheets-image",
        title: "Husksheets",
        description: "Google Sheets recreation",
        technologies: ["T3 Stack", "TypeScript", "NodeJS", "Prisma", "PlanetScale"],
        startDate: "6/2024",
        endDate: "7/2024",
        link: "https://github.com/IAmBdan/computer-serve-code"
    },
    {
        previewImage: "under-the-weather-image",
        title: "Under the Weather",
        description: "Disease data visualization full-stack project",
        technologies: ["TypeScript", "Python", "MySQL"],
        startDate: "2/2024",
        endDate: "2/2024",
        link: "https://github.com/alanZhang0813/under-the-weather"
    },
];