import styled from "styled-components";

export const PresentationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  position: relative;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #ffff;
  margin-bottom: 3rem;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const TextBlock = styled.div<{ position: "left" | "center" | "right" }>`
  width: 30%;
  text-align: ${({ position }) =>
    position === "center" ? "center" : position === "right" ? "right" : "left"};
  cursor: pointer;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  p {
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    transition: color 0.3s ease;
  }

  &:hover {
    h3 {
      color: #888;
    }

    p {
      color: #777;
    }
  }
  &:focus-within {
    h3 {
      color: #888;
    }

    p {
      color: #777;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const StyledHr = styled.hr`
  border: none;
  height: 3px;
  width: 100%;
  margin: 30px auto;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
`;
