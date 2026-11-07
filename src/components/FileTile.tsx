import Link from "next/link";
import type { File } from "../types/File";

type FileTileProps = Pick<File, "name" | "type"> & { href: string };

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
    <span>{name}</span>
    <span>{type}</span>
  </Link>
);
