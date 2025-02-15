import React from "react";
import { HeaderContainer, Nav, LinkItem } from "./styles";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <LinkItem
          href="https://www.linkedin.com/in/lucas-da-silva-27956619b/"
          target="_blank"
        >
          <FaLinkedin />
          <span className="link-text">LinkedIn</span>
        </LinkItem>
        <LinkItem href="https://github.com/luc118i" target="_blank">
          <FaGithub />
          <span className="link-text">GitHub</span>
        </LinkItem>
        <LinkItem href="mailto:luccasinaacio@gmail.com">
          <FaEnvelope />
          <span className="link-text">E-mail</span>
        </LinkItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
