"use client";

import React from "react";
import { colors } from "../constants/colors";
import File from "./File";

export default function Folder() {
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
      Folder name
      {/* <FolderIcon /> */}
      {/* add where the title is slightly below the icon */}
    </div>
  );
}
