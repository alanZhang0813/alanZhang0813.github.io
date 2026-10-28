"use client";

import React from "react";
import { colors } from "../../constants/colors";
import { File, FileProps } from "./File";

export interface FolderProps {
  name: string;
  files: FileProps[];
}

export const Folder = ({ name, files }: FolderProps) => {
  const handleClick = () => {
    alert("Box clicked!");
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: colors.folderColor,
        color: colors.folderTextColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {name}
      {/* <FolderIcon /> */}
      {/* add where the title is slightly below the icon */}
      {/* TODO: only show files when the folder is open */}
      {files.map((file) => (
        <File key={file.name} {...file} />
      ))}
    </div>
  );
};
