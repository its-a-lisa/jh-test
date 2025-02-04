// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FaMediumSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FaMediumSvgIcon(props: FaMediumSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 640 512"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M180.5 74.3C80.8 74.3 0 155.6 0 256s80.8 181.7 180.5 181.7S361 356.4 361 256 280.2 74.3 180.5 74.3zm288.3 10.6c-49.8 0-90.2 76.6-90.2 171.1s40.4 171.1 90.3 171.1 90.3-76.6 90.3-171.1h-.2c0-94.5-40.4-171.1-90.2-171.1zm139.5 17.8c-17.5 0-31.7 68.6-31.7 153.3s14.2 153.3 31.7 153.3S640 340.6 640 256c0-84.6-14.2-153.3-31.7-153.3z"
        }
      ></path>
    </svg>
  );
}

export default FaMediumSvgIcon;
/* prettier-ignore-end */
