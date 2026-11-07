import type { Folder } from "../../types/Folder";
import { UKG } from "../files/UKG";
import { FactSet } from "../files/FactSet";
import { SaintGobain } from "../files/SaintGobain";

export const WorkExperienceFolder: Folder = {
  name: "Work Experience",
  files: [UKG, FactSet, SaintGobain],
};
