import Link from "next/link";
import type { File } from "../types/File";
import { Folder } from "../types/Folder";
import { icons } from "../lib/icons";

type FileTileProps = Pick<File | Folder, "name" | "type"> & { href: string };

export const FileTile = ({ name, type, href }: FileTileProps) => (
  <Link
    href={href}
    style={{
      width: "150px",
      height: "100px",
      display: "flex",
      outline: "1px solid black",
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
