import type { Folder } from "../../types/Folder";
import { Chess } from "../files/Chess";
import { Movies } from "../files/Movies";

export const HobbiesFolder: Folder = {
  name: "Hobbies",
  children: [Chess, Movies],
  type: "folder",
};
