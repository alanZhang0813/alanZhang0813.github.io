import Link from "next/link";
import { notFound } from "next/navigation";
import { FileTile } from "../../components/FileTile";
import { folders, slugify, findFolder, fileHref } from "../../lib/folders";

export const dynamicParams = false;

export function generateStaticParams() {
  return folders.map((f) => ({ folder: slugify(f.name) }));
}

export default async function FolderPage({
  params,
}: {
  params: Promise<{ folder: string }>;
}) {
  const { folder: slug } = await params;
  const folder = findFolder(slug);
  if (!folder) notFound();

  return (
    <main style={{ padding: "20px" }}>
      <Link href="/">← Home</Link>
      <h1>{folder.name}</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {folder.children.map((file) => (
          <FileTile
            key={file.name}
            name={file.name}
            type={file.type}
            href={fileHref(folder, file.name)}
          />
        ))}
      </div>
    </main>
  );
}
