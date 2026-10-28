"use client";

export interface FileProps {
  name: string;
  type: string;
}

export const File = ({ name, type }: FileProps) => {
  const handleClick = () => {
    alert("Box clicked!");
  };

  return (
    <div
      onClick={handleClick}
      tabIndex={0}
      style={{ width: "200px", height: "200px" }}
    >
      {name}
      {type && <span>{type}</span>}
      {/* <FileIcon /> */}
      {/* add where the title is slightly below the icon */}
    </div>
  );
};
