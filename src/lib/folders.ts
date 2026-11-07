import type { Folder } from "../types/Folder";
import { WorkExperienceFolder } from "../data/folders/WorkExperienceFolder";
import { HobbiesFolder } from "../data/folders/HobbiesFolder";
import { EducationFolder } from "../data/folders/EducationFolder";
import { ProjectsFolder } from "../data/folders/ProjectsFolder";

export const folders: Folder[] = [
  WorkExperienceFolder,
  HobbiesFolder,
  EducationFolder,
  ProjectsFolder,
];

export const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const folderHref = (folder: Folder) => `/${slugify(folder.name)}`;

export const fileHref = (folder: Folder, fileName: string) =>
  `${folderHref(folder)}/${slugify(fileName)}`;

export const findFolder = (slug: string) =>
  folders.find((f) => slugify(f.name) === slug);

export const findFile = (folder: Folder, slug: string) =>
  folder.files.find((f) => slugify(f.name) === slug);
