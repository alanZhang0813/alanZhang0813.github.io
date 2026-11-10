import { File } from "./File";

export interface Folder {
  name: string;
  children: (File | Folder)[];
  type: "folder";
}
