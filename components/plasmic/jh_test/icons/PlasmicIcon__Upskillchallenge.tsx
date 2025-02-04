// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UpskillchallengeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UpskillchallengeIcon(props: UpskillchallengeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 421 421"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"#288B7C"}
        d={
          "M348.911 163.435c6.372-.45 9.558 6.534 5.46 11.124-10.198 11.423-23.397 23.797-34.37 34.57-9.75 9.576-11.104 17.58-23.459 4.737a298.083 298.083 0 00-6.667-6.752c-2.377-2.393-6.794-5.84-7.075-9.332-.4-4.948 5.691-8.961 9.994-6.232 3.095 1.963 10.576 10.2 13.345 13.076 9.84-8.903 20.303-20.786 29.982-30.344 3.178-3.139 8.27-9.94 12.79-10.847z"
        }
      ></path>

      <path
        fill={"#00CDFA"}
        d={
          "M342.904 205.991c7.217.331 12.829.433 18.605 5.45 9.545 8.287 11.044 24.341 2.484 33.904-9.468 10.577-22.33 7.97-35.072 7.958l-243.695.01c-4.462.003-9.06.232-13.497-.227-25.896-2.678-26.975-41.648-1.879-46.602 5.264-1.04 12.933-.5 18.498-.498l164.547.008c5.79.016 11.591.162 17.38-.003 3.2 3.582 6.614 6.952 9.81 10.531-29.906-.002-59.844.302-89.745 0-.673 7.968.131 18.234 0 26.508l140.199.009c5.497 0 11.365.432 16.81-.21 15.144-1.784 14.806-22.279 2.569-25.945-2.856-.856-13.857-.361-17.493-.362 2.975-3.75 7.075-7.134 10.48-10.53z"
        }
      ></path>

      <path
        fill={"#793FD1"}
        d={
          "M190.34 243.03l-103.73-.001c-6.724.014-14.604 1.38-19.949-3.722-7.334-7.003-4.17-20.76 6.373-22.438 4.288-.683 9.002-.351 13.34-.352l103.966.005c-.673 7.968.131 18.234 0 26.508z"
        }
      ></path>
    </svg>
  );
}

export default UpskillchallengeIcon;
/* prettier-ignore-end */
