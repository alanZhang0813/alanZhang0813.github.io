"use client";

import React from "react";

export default function File() {
  const handleClick = () => {
    alert("Box clicked!");
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      style={{ width: "200px", height: "200px" }}
    >
      File name
      {/* <FileIcon /> */}
      {/* add where the title is slightly below the icon */}
    </div>
  );
}
