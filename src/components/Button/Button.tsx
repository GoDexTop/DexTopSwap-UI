import clsx from "clsx";
import { cloneElement, ElementType, isValidElement } from "react";
import EXTERNAL_LINK_PROPS from "utils/externalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps } from "./types";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton
      $isLoading={isLoading}
      className={clsx(className, {
        "dextop-button--loading": isLoading,
        "dextop-button--disabled": isDisabled && !isLoading,
      })}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            // @ts-ignore
            mr: "0.5rem",
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            // @ts-ignore
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

export default Button;
