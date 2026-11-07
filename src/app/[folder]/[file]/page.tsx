import Link from "next/link";
import { notFound } from "next/navigation";
import {
  folders,
  slugify,
  findFolder,
  findFile,
  folderHref,
} from "../../../lib/folders";

export const dynamicParams = false;

export function generateStaticParams() {
  return folders.flatMap((folder) =>
    folder.files.map((file) => ({
      folder: slugify(folder.name),
      file: slugify(file.name),
    })),
  );
}

export default async function FilePage({
  params,
}: {
  params: Promise<{ folder: string; file: string }>;
}) {
  const { folder: folderSlug, file: fileSlug } = await params;
  const folder = findFolder(folderSlug);
  const file = folder && findFile(folder, fileSlug);
  if (!folder || !file) notFound();

  return (
    <main style={{ padding: "20px" }}>
      <Link href={folderHref(folder)}>← {folder.name}</Link>
      <h1>{file.name}</h1>
      <p>{file.type}</p>
    </main>
  );
}
