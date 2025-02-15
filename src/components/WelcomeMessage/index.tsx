import React from "react";
import { Title } from "./styles";

interface WelcomeMessageProps {
  themeMode: "light" | "dark";
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ themeMode }) => {
  return (
    <Title themeMode={themeMode}>
      Olá, seja bem-vindo(a) ao portfólio do Lucas!
    </Title>
  );
};

export default WelcomeMessage;
