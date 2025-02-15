import React, { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  onClick: () => void;
  themeMode: "light" | "dark";
  isScrolled: boolean;
  children: ReactNode;
}

const ToggleButton: React.FC<ButtonProps> = ({
  onClick,
  themeMode,
  isScrolled,
  children,
}) => {
  return (
    <ButtonStyled
      themeMode={themeMode}
      isScrolled={isScrolled}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default ToggleButton;
