import { Folder } from "../types/Folder";
import { colors } from "../../constants/colors";
import { WorkExperienceFolder } from "../components/folders/WorkExperienceFolder";
import { HobbiesFolder } from "../components/folders/HobbiesFolder";
import { EducationFolder } from "../components/folders/EducationFolder";
import { ProjectsFolder } from "../components/folders/ProjectsFolder";

const folders: Folder[] = [
  WorkExperienceFolder,
  HobbiesFolder,
  EducationFolder,
  ProjectsFolder,
];

export default function HomeScreenPage() {
  return (
    <main style={{ padding: "20px" }} color={colors.homeScreenColor}>
      <h1>Welcome to Alan Zhang's Website!</h1>
      {folders.map((folder) => (
        <div key={folder.name}>
          <h2>{folder.name}</h2>
          <ul>
            {folder.files.map((file) => (
              <li key={file.name}>
                {file.view ?? `${file.name} - ${file.type}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
}
