import styled from "styled-components";

export const Title = styled.h1<{ themeMode: "light" | "dark" }>`
  position: absolute;
  top: 5rem;
  left: 56%;
  transform: translateX(-50%);
  z-index: 999;

  color: ${(props) => (props.themeMode === "dark" ? "#FFFFFF" : "#333333")};
  font-size: 2rem;
  font-weight: bold;

  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => (props.themeMode === "dark" ? "#CCCCCC" : "#111111")};
  }
`;
