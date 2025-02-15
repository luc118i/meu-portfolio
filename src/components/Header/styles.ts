import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background: #121212;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px; // Diminui o espaçamento entre os ícones
`;

export const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 24px;

  .link-text {
    display: inline;
  }

  &:hover {
    color: #1db954;
  }

  // Media Query para telas pequenas
  @media (max-width: 768px) {
    font-size: 30px;
    gap: 8px;

    .link-text {
      display: none;
    }
  }
`;
