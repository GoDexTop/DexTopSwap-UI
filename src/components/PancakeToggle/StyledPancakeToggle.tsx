import styled from "styled-components";
import { scales, dextopToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    dextopSize: "14px", // The size of a dextop (the handle)
    travelDistance: "14px", // How far dextops should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    dextopThickness: "1px", // Bottom shadow of a dextop
    dextopTwoOffset: "0px", // dextops don't look good when they are concentric
    dextopThreeOffset: "-3px", // so dextop 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Width and
    butterHeight: "5px", // Height of a butter block on top of dextops
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    dextopSize: "24px",
    travelDistance: "24px",
    toggleHeight: "32px",
    toggleWidth: "56px",
    dextopThickness: "1.5px",
    dextopTwoOffset: "-1px",
    dextopThreeOffset: "-6px",
    butterTop: "5px",
    butterLeft: "13px",
    butterWidth: "10px",
    butterHeight: "8px",
    butterThickness: "0.75px",
    butterRadius: "3px",
    butterSmearOneTop: "15px",
    butterSmearOneLeft: "3.75px",
    butterSmearTwoTop: "16px",
    butterSmearTwoRight: "3.75px",
  },
  lg: {
    dextopSize: "31px",
    travelDistance: "31px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    dextopThickness: "2px",
    dextopTwoOffset: "-3px",
    dextopThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: dextopToggleProps) => {
    return scaleKeyValues[scale][property];
  };

export const dextopStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .dextops {
    position: absolute;
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .dextop {
    background: #e27c31;
    border-radius: 50%;
    width: ${getScale("dextopSize")};
    height: ${getScale("dextopSize")};
    position: absolute;
    transition: 0.4s ease;
    top: 2px;
    left: 4px;
    box-shadow: 0 ${getScale("dextopThickness")} 0 ${getScale("dextopThickness")} #fbbe7c;
  }

  .dextop:nth-child(1) {
    background: ${({ theme }) => theme.dextopToggle.handleBackground};
    box-shadow: 0 ${getScale("dextopThickness")} 0 ${getScale("dextopThickness")}
      ${({ theme }) => theme.dextopToggle.handleShadow};
  }

  .dextop:nth-child(2) {
    left: 0;
    top: ${getScale("dextopTwoOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .dextop:nth-child(3) {
    top: ${getScale("dextopThreeOffset")};
    transform: scale(0);
    transition: 0.2s ease 0.2s;
  }

  .dextop:nth-child(3):before,
  .dextop:nth-child(3):after {
    content: "";
    position: absolute;
    background: #ef8927;
    border-radius: 20px;
    width: 50%;
    height: 20%;
  }

  .dextop:nth-child(3):before {
    top: ${getScale("butterSmearOneTop")};
    left: ${getScale("butterSmearOneLeft")};
  }

  .dextop:nth-child(3):after {
    top: ${getScale("butterSmearTwoTop")};
    right: ${getScale("butterSmearTwoRight")};
  }

  .butter {
    width: ${getScale("butterWidth")};
    height: ${getScale("butterHeight")};
    background: #fbdb60;
    top: ${getScale("butterTop")};
    left: ${getScale("butterLeft")};
    position: absolute;
    border-radius: ${getScale("butterRadius")};
    box-shadow: 0 ${getScale("butterThickness")} 0 ${getScale("butterThickness")} #d67823;
    transform: scale(0);
    transition: 0.2s ease;
  }
`;

export const dextopInput = styled.input<InputProps>`
  height: 40px;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 40px;

  &:focus + label {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:checked + label .dextops {
    transform: translateX(${getScale("travelDistance")});
  }

  &:checked + label .dextop:nth-child(1) {
    background: #e27c31;
    box-shadow: 0 ${getScale("dextopThickness")} 0 ${getScale("dextopThickness")} #fbbe7c;
    transition-delay: 0.2s;
  }

  &:checked + label .dextop:nth-child(2) {
    transform: scale(1);
    transition-delay: 0.2s;
  }

  &:checked + label .dextop:nth-child(3) {
    transform: scale(1);
    transition-delay: 0.4s;
  }

  &:checked + label .butter {
    transform: scale(1);
    transition-delay: 0.6s;
  }
`;

export const dextopLabel = styled.label<dextopToggleProps>`
  width: ${getScale("toggleWidth")};
  height: ${getScale("toggleHeight")};
  background: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  display: inline-block;
  border-radius: 50px;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: 20% center;
  cursor: pointer;
`;
