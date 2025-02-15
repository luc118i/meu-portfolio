import styled, { css } from "styled-components";
import { lightTheme, darkTheme, Theme, ThemeMode } from "./types";

// Tipando o estilo das formas com themeMode e className
const shapeStyles = css<{ themeMode: "light" | "dark"; className: string }>`
  background-color: ${(props) =>
    props.themeMode === "dark"
      ? darkTheme[props.className as keyof Theme]
      : lightTheme[props.className as keyof Theme]};
  transition: background-color 0.5s ease;
`;

export const BackgroundContainer = styled.div<{ $themeMode: ThemeMode }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.$themeMode === "dark" ? "#333333" : "#FFFFFF"};
  transition: background-color 0.5s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

export const Shape1 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  top: 10%;
  left: 15%;
  width: 200px;
  height: 100px;
  border-radius: 15px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 150px;
    height: 80px;
    top: 5%;
    left: 10%;
  }
`;

export const Shape2 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  top: 40%;
  left: 50%;
  width: 250px;
  height: 150px;
  border-radius: 10px;
  z-index: 2;

  @media (max-width: 768px) {
    width: 200px;
    height: 120px;
    top: 35%;
    left: 40%;
  }
`;

export const Shape3 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  top: 60%;
  left: 30%;
  width: 180px;
  height: 120px;
  border-radius: 20px;
  z-index: 3;

  @media (max-width: 768px) {
    width: 150px;
    height: 100px;
    top: 55%;
    left: 25%;
  }
`;

export const Shape4 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  top: 20%;
  right: 20%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  z-index: 4;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    top: 15%;
    right: 15%;
  }
`;

export const Shape5 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  bottom: 10%;
  left: 5%;
  width: 220px;
  height: 220px;
  border-radius: 30px;
  z-index: 5;

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
    bottom: 5%;
    left: 10%;
  }
`;

export const Shape6 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  top: 25%;
  right: 10%;
  width: 180px;
  height: 180px;
  border-radius: 30%;
  z-index: 6;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: 20%;
    right: auto; /* Remove o valor de 'right' */
    left: 5%; /* Posiciona o shape mais à esquerda */
  }
`;

export const Shape7 = styled.div<{
  themeMode: "light" | "dark";
  className: string;
}>`
  ${shapeStyles};
  position: absolute;
  bottom: 20%;
  right: 25%;
  width: 250px;
  height: 100px;
  border-radius: 10px;
  z-index: 7;

  @media (max-width: 768px) {
    width: 200px;
    height: 80px;
    bottom: 15%;
    right: 20%;
  }
`;
