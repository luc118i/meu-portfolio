import React, { useState, useEffect } from "react";
import {
  BackgroundContainer,
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
} from "./styles";
import { ThemeMode } from "./types";
import ToggleButton from "../Button/Button";
import WelcomeMessage from "../WelcomeMessage";

const Background: React.FC = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleTheme = () => {
    setThemeMode((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BackgroundContainer $themeMode={themeMode}>
      <WelcomeMessage themeMode={themeMode} />

      <Shape1 themeMode={themeMode} className="shape1" />
      <Shape2 themeMode={themeMode} className="shape2" />
      <Shape3 themeMode={themeMode} className="shape3" />
      <Shape4 themeMode={themeMode} className="shape4" />
      <Shape5 themeMode={themeMode} className="shape5" />
      <Shape6 themeMode={themeMode} className="shape6" />
      <Shape7 themeMode={themeMode} className="shape7" />

      {!isScrolled && (
        <ToggleButton
          themeMode={themeMode}
          isScrolled={isScrolled}
          onClick={toggleTheme}
        >
          Alterar o tema
        </ToggleButton>
      )}
    </BackgroundContainer>
  );
};

export default Background;
