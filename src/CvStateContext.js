import { createContext } from "react";

export const DEFAULT_CV_STATE = "editing";

export const CvStateContext = createContext(DEFAULT_CV_STATE);
