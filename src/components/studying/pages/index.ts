import { lazy } from "react";

export const studyPages = {
  "npm-introduction" : lazy(() => import("./npm-introduction")),
} as const;