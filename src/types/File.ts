export type File = TextFile | LinkFile | ImageFile | PDFFile;

export interface TextFile {
  name: string;
  type: "text";
  body: string;
}

export interface LinkFile {
  name: string;
  type: "link";
  url: string;
}

export interface ImageFile {
  name: string;
  type: "image";
  url: string;
}

export interface PDFFile {
  name: string;
  type: "pdf";
  url: string;
}
