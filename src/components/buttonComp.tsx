import type React from "react";

export interface buttonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled? : boolean;
  children: React.ReactNode;
  onclick?: () => void;
}


const ButtonComp = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  children,
  onclick,
}: buttonProps) => {
  return (
    <>
      <button
        className={`btn btn-${variant} btn-${size}`}
        onClick={onclick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonComp;
