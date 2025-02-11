import { InputHTMLAttributes } from "react";

export type dextopToggleTheme = {
  handleBackground: string;
  handleShadow: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
  LG: "lg",
} as const;

export type Scales = (typeof scales)[keyof typeof scales];

export interface dextopToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
}

export interface HandleProps {
  scale: Scales;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  dextopSize: "dextopSize",
  travelDistance: "travelDistance",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
  dextopThickness: "dextopThickness",
  dextopTwoOffset: "dextopTwoOffset",
  dextopThreeOffset: "dextopThreeOffset",
  butterTop: "butterTop",
  butterLeft: "butterLeft",
  butterWidth: "butterWidth",
  butterHeight: "butterHeight",
  butterThickness: "butterThickness",
  butterRadius: "butterRadius",
  butterSmearOneTop: "butterSmearOneTop",
  butterSmearOneLeft: "butterSmearOneLeft",
  butterSmearTwoTop: "butterSmearTwoTop",
  butterSmearTwoRight: "butterSmearTwoRight",
} as const;

export type ScaleKeys = (typeof scaleKeys)[keyof typeof scaleKeys];
