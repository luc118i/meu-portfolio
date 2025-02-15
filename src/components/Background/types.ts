// Definindo o tipo para os temas
import { ReactNode } from "react";

export interface BackgroundProps {
  children: ReactNode;
}
export interface Theme {
  background: string;
  text: string;
  shape1: string;
  shape2: string;
  shape3: string;
  shape4: string;
  shape5: string;
  shape6: string;
  shape7: string;
}

// Tipos para o tema claro e escuro
export const lightTheme: Theme = {
  background: "#f5f5f5",
  text: "#333333",
  shape1: "rgba(255, 111, 97, 0.8)",
  shape2: "rgba(88, 166, 255, 0.7)",
  shape3: "rgba(255, 205, 97, 0.6)",
  shape4: "rgba(97, 255, 184, 0.8)",
  shape5: "rgba(255, 147, 255, 0.7)",
  shape6: "rgba(255, 221, 97, 0.75)",
  shape7: "rgba(77, 144, 255, 0.6)",
};

export const darkTheme: Theme = {
  background: "#1a1a1a",
  text: "#FFFFFF",
  shape1: "rgba(153, 55, 48, 0.8)",
  shape2: "rgba(44, 83, 153, 0.7)",
  shape3: "rgba(153, 122, 48, 0.6)",
  shape4: "rgba(48, 153, 110, 0.8)",
  shape5: "rgba(153, 77, 153, 0.7)",
  shape6: "rgba(153, 133, 48, 0.75)",
  shape7: "rgba(38, 72, 153, 0.6)",
};

export type ThemeMode = "light" | "dark";
