import { lazy } from "react";

export const studyPages = {
  "pageNo1" : lazy(() => import("./pageNo1")),
} as const;