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
    folder.children.map((file) => ({
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
      {(() => {
        switch (file.type) {
          case "text":
            return <p>{file.body}</p>;
          case "link":
            return <p>{file.url}</p>;
          case "image":
            return <img src={file.url} alt={file.name} />;
          case "pdf":
            return (
              <>
                <iframe
                  title={file.name}
                  src={file.url}
                  width="100%"
                  height="600px"
                />
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  Open PDF in new tab
                </a>
                <a href={file.url} download>
                  Download PDF
                </a>
              </>
            );
          case "folder":
            return notFound();
        }
      })()}
    </main>
  );
}
