import Link from "next/link";
import { colors } from "../../constants/colors";
import { FileTile } from "../components/FileTile";
import { folders, folderHref, fileHref } from "../lib/folders";

export default function HomeScreenPage() {
  return (
    <main style={{ padding: "20px", backgroundColor: colors.homeScreenColor }}>
      <h1>Welcome to Alan Zhang's Website!</h1>
      {folders.map((folder) => (
        <section key={folder.name}>
          <h2>
            <Link href={folderHref(folder)}>{folder.name}</Link>
          </h2>
          {/* <div style={{ display: "flex", flexWrap: "wrap" }}>
            {folder.children.map((file) => (
              <FileTile
                key={file.name}
                name={file.name}
                href={fileHref(folder, file.name)}
                type={file.type}
              />
            ))}
          </div> */}
        </section>
      ))}
    </main>
  );
}
