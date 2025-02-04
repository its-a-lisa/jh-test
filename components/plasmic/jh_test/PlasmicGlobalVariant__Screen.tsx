// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type ScreenValue = "medium" | "large" | "small" | "extraSmall";
export const ScreenContext = React.createContext<ScreenValue[] | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export const useScreenVariants = createUseScreenVariants(true, {
  medium: "(min-width:0px) and (max-width:767px)",
  large: "(max-width:1024px)",
  small: "(max-width:544px)",
  extraSmall: "(max-width:375px)",
});

export default ScreenContext;
/* prettier-ignore-end */
