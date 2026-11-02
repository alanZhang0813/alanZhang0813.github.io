import type { File } from "../../types/File";
import { FileTile } from "../FileTile";

const file: File = { name: "UKG", type: "document" };

export const UKG: File = { ...file, view: <FileTile {...file} /> };
