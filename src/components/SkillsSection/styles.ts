import styled from "styled-components";

export const SkillsContainer = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

export const CategoryContainer = styled.div`
  margin-bottom: 2rem;
`;

export const CategoryTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  margin: 10px;
`;

export const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  border-radius: 5%;
  background: transparent;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
