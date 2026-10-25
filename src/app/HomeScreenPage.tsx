import File from "../../components/File";
import Folder from "../../components/Folder";
import { colors } from "../../constants/colors";

export default function HomeScreenPage() {
  return (
    <main style={{ padding: "20px" }} color={colors.homeScreenColor}>
      <h1>Welcome to your Dashboard</h1>
      <p>This page is built with Next.js and TypeScript.</p>
      <File />
      <Folder />
    </main>
  );
}
