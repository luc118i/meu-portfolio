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
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f0f0f0;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
