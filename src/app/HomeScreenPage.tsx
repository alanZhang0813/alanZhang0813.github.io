import File from "../../components/File";
import Folder from "../../components/Folder";
import { colors } from "../../constants/colors";

export default function HomeScreenPage() {
  return (
    <main style={{ padding: "20px" }} color={colors.homeScreenColor}>
      <h1>Welcome to Alan Zhang's Website!</h1>
      <File />
      <Folder />
    </main>
  );
}
