import Link from "next/link";
import type { File } from "../types/File";
import { Folder } from "../types/Folder";
import { icons } from "../lib/icons";
import styles from "./FileTile.module.css";

type FileTileProps = Pick<File | Folder, "name" | "type"> & { href: string };

export const FileTile = ({ name, type, href }: FileTileProps) => (
  <Link
    className={styles.tile}
    href={href}
    style={{
      width: "150px",
      height: "100px",
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
    <span className={styles.preview}>{name}</span>
  </Link>
);
