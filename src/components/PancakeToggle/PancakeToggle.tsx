import React from "react";
import { dextopStack, dextopInput, dextopLabel } from "./StyleddextopToggle";
import { dextopToggleProps, scales } from "./types";

const dextopToggle: React.FC<React.PropsWithChildren<dextopToggleProps>> = ({
  checked,
  scale = scales.LG,
  ...props
}) => (
  <dextopStack scale={scale}>
    <dextopInput id={props.id || "dextop-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <dextopLabel scale={scale} checked={checked} htmlFor={props.id || "dextop-toggle"}>
      <div className="dextops">
        <div className="dextop" />
        <div className="dextop" />
        <div className="dextop" />
        <div className="butter" />
      </div>
    </dextopLabel>
  </dextopStack>
);

export default dextopToggle;
