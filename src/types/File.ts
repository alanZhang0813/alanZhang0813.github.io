import type { ReactNode } from "react";

export interface File {
  name: string;
  type: string;
  view?: ReactNode;
}
