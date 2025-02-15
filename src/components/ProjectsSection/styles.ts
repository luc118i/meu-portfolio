import { styled } from "styled-components";

// Container para a seção de projetos
export const ProjectsContainer = styled.div`
  background-color: rgb(69, 69, 69);
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

// Título da seção de projetos
export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  text-align: center;
  color: #ffffff;
`;

// Card individual de cada projeto
export const ProjectCard = styled.div`
  background: rgb(69, 69, 69);
  padding: 20px;
  width: 100%;
  max-width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column; /* Mudando para coluna para organizar melhor os itens */
  position: relative;

  gap: 20px;

  img {
    width: 250px;
    height: 180px;
    border-radius: 8px;
    object-fit: cover;
    align-self: flex-start; /* Garantindo que a imagem fique à esquerda */
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1;
  }

  h3 {
    font-size: 1.5rem;
    color: rgb(224, 207, 207);
    margin-bottom: 10px; /* Aumentando a margem inferior para dar mais espaço */
  }

  .description {
    font-size: 1rem;
    color: #666;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;

    &.expanded {
      -webkit-line-clamp: unset;
    }
  }

  .project-dates {
    font-size: 0.8rem;
    color: #777;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    align-self: flex-start; /* Ajustando para alinhar à esquerda */
    margin-top: 20px;
    cursor: pointer;
  }

  .footer {
    margin-top: auto; /* Garantindo que o rodapé fique no final */
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    img {
      width: 100%;
      height: 200px;
      order: 0;
    }

    .project-dates {
      font-size: 0.8rem;
      margin-top: 15px;
    }

    a {
      position: static;
      margin-top: 15px;
    }
  }
`;

export const ProjectLanguages = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .language {
    display: flex;
    align-items: center;
    gap: 5px;
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 10px;
  }

  img {
    width: 18px;
    height: 18px;
  }
`;

export const StyledHr = styled.hr`
  border: none;
  height: 3px;
  background: linear-gradient(to right, rgb(188, 188, 188), rgb(84, 84, 84));
  width: 100%;
  margin: 30px auto;
  border-radius: 2px;
  opacity: 0.8;
`;

export const LoadingContainer = styled(ProjectsContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  text-align: center;
`;

export const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: #555;
`;

export const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FullscreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  z-index: 10000;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    color: red;
    transform: scale(1.2);
  }
`;

export const ReadMoreButton = styled.button`
  background: transparent; /* Fundo transparente para discreção */
  color: ${({ theme }) =>
    theme?.colors?.primary || "#123abc"}; /* Cor primária para o texto */
  border: 1px solid ${({ theme }) => theme?.colors?.primary || "#123abc"}; /* Borda sutil */
  padding: 4px 8px;
  border-radius: 3px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: all 0.2s ease;
  font-size: 0.8rem;
  margin-top: 8px;
  max-width: 7%;

  &:hover {
    background: ${({ theme }) =>
      theme?.colors?.primary ||
      "#123abc"}; /* Fundo colorido ao passar o mouse */
    color: white; /* Texto branco ao passar o mouse */
    border-color: transparent; /* Remove a borda ao passar o mouse */
  }

  &:active {
    transform: scale(0.98); /* Efeito de clique sutil */
  }
`;
