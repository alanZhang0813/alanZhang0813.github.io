"use client";

import type { File } from "../types/File";

export const FileTile = ({ name, type }: File) => {
  const handleClick = () => {
    alert(`${name} clicked!`);
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      style={{
        width: "200px",
        height: "200px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* <FileIcon /> */}
      <span>{name}</span>
      <span>{type}</span>
    </div>
  );
};
