import { lazy } from "react";

export const studyPages = {
  "react-basics" : lazy(() => import("./react-basic")),
  "typescript" : lazy(() => import("./TypeScript"))
} as const;