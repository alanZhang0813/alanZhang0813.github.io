import Link from "next/link";
import type { File } from "../types/File";
import { Folder } from "../types/Folder";

type FileTileProps = Pick<File | Folder, "name" | "type"> & { href: string };

const icons: Record<File["type"] | "folder", string> = {
  folder: "📁",
  text: "📄",
  link: "🔗",
  image: "🖼️",
  pdf: "📕",
};

export const FileTile = ({ name, type, href }: FileTileProps) => (
  <Link
    href={href}
    style={{
      width: "200px",
      height: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "inherit",
      textDecoration: "none",
    }}
  >
    <span style={{ fontSize: "64px" }}>{icons[type] ?? "📄"}</span>
    <span>{name}</span>
  </Link>
);
