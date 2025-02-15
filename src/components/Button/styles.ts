// src/components/Button/Button.styles.ts
import styled from "styled-components";

export const ButtonStyled = styled.button<{
  themeMode: "light" | "dark";
  isScrolled: boolean;
}>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: ${(props) => (props.isScrolled ? "15px 30px" : "10px 20px")};
  background: transparent;
  border: 2px solid
    ${(props) => (props.themeMode === "dark" ? "#FFFFFF" : "#333333")};
  color: ${(props) => (props.themeMode === "dark" ? "#FFFFFF" : "#333333")};
  font-size: ${(props) => (props.isScrolled ? "18px" : "16px")};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 9999;

  &:hover {
    background-color: ${(props) =>
      props.themeMode === "dark" ? "#444444" : "#CCCCCC"};
    border-color: ${(props) =>
      props.themeMode === "dark" ? "#FFFFFF" : "#333333"};
    color: ${(props) => (props.themeMode === "dark" ? "#333333" : "#FFFFFF")};
  }

  @media (max-width: 768px) {
    padding: ${(props) => (props.isScrolled ? "12px 24px" : "8px 16px")};
    font-size: ${(props) => (props.isScrolled ? "16px" : "14px")};
  }
`;
