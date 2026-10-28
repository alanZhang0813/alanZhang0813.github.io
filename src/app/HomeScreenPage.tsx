import { Folder, FolderProps } from "../components/Folder";
import { colors } from "../../constants/colors";

const folders: FolderProps[] = [
  {
    name: "My Folder",
    files: [{ name: "My Resume", type: "pdf" }],
  },
];

export default function HomeScreenPage() {
  return (
    <main style={{ padding: "20px" }} color={colors.homeScreenColor}>
      <h1>Welcome to Alan Zhang's Website!</h1>
      {folders.map((folder) => (
        <Folder key={folder.name} {...folder} />
      ))}
    </main>
  );
}
