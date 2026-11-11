import { FileTile } from "../components/FileTile";
import { folders, folderHref } from "../lib/folders";
import { Resume } from "../data/files/Resume";

export default function HomeScreenPage() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Welcome to Alan Zhang's Website!</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {folders.map((folder) => (
          <FileTile
            key={folder.name}
            name={folder.name}
            href={folderHref(folder)}
            type={folder.type}
          />
        ))}
        <FileTile
          key={Resume.name}
          name={Resume.name}
          href={Resume.url}
          type={Resume.type}
        />
      </div>
    </main>
  );
}
