import * as React from "react";
import classNames from "classnames";
import "./button.scss";

interface ButtonProps {
  id: string;
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  additionalStyle?: string;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    id,
    children,
    onClick,
    disabled = false,
    additionalStyle = ""
  } = props;

  const handleClick = () => {
    if (disabled) return;
    onClick();
  };

  const className = classNames(
    "button",
    {
      "button-disabled": disabled
    },
    `${additionalStyle}`
  );

  return (
    <>
      <div id={id} onClick={handleClick} className={className}>
        {children}
      </div>
    </>
  );
};

export default Button;
