import type { File } from "../../types/File";
import { FileTile } from "../FileTile";

const file: File = { name: "Saint-Gobain", type: "document" };

export const SaintGobain: File = { ...file, view: <FileTile {...file} /> };
