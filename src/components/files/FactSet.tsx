import type { File } from "../../types/File";
import { FileTile } from "../FileTile";

const file: File = { name: "FactSet", type: "document" };

export const FactSet: File = { ...file, view: <FileTile {...file} /> };
