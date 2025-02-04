// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon25Icon(props: Icon25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      preserveAspectRatio={"none"}
      viewBox={"0 0 1600 3500"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"var(--token-njV1csG1kB8s)"} d={"M0 0h1600v3500H0z"}></path>

      <g fillOpacity={".2"}>
        <path
          d={"M1600 3500h-200L1600 0zm1900 0L1600 600v2900z"}
          fill={"var(--token-qVkE6NIWzrdF)"}
        ></path>

        <g fill={"var(--token-GFX8yHdC_hN_)"}>
          <path d={"M0 0h200L0 3500z"}></path>

          <path d={"M3500 0L0 200V0z"}></path>
        </g>
      </g>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */
