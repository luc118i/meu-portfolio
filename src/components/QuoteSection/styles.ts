import styled from "styled-components";

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(231, 217, 217, 0.81);
  padding: 40px;

  width: 100%;
  max-width: 100%;

  box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
`;

export const QuoteText = styled.blockquote`
  font-size: 2rem;
  font-family: "Merriweather", serif;
  font-style: italic;
  color: #333;
  line-height: 1.8;
  text-align: center;
  margin: 0;
  padding: 0;
  position: relative;
  margin-bottom: 20px;
  max-width: 85%;

  &::before {
    content: "❝";
    font-size: 4rem;
    color: #6a4e23;
    position: absolute;
    top: -50px;
    left: -50px;
  }

  &::after {
    content: "❞";
    font-size: 4rem;
    color: #6a4e23;
    position: absolute;
    bottom: -50px;
    right: -50px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const AuthorPhoto = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;

export const AuthorName = styled.p`
  font-size: 1.3rem;
  color: #555;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  font-family: "Courier New", Courier, monospace;
  letter-spacing: 1px;
`;
