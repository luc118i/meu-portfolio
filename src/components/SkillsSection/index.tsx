import {
  SkillsContainer,
  CategoryContainer,
  CategoryTitle,
  SkillsList,
  SkillItem,
} from "./styles";

// Importação dos ícones
import {
  SiTypescript,
  SiJavascript,
  SiSharp, // Representa C#
  SiDotnet,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiVite,
} from "react-icons/si";

import { DiReact, DiPython, DiNodejsSmall, DiGit } from "react-icons/di";
import { FiServer, FiDatabase } from "react-icons/fi";

// Estrutura de categorias com os respectivos skills e ícones
const skillsCategories = [
  {
    category: "Linguagens e Frameworks",
    skills: [
      { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" /> },
      { name: "C#", icon: <SiSharp size={40} color="#239120" /> },
      { name: ".NET", icon: <SiDotnet size={40} color="#512BD4" /> },
      { name: "React", icon: <DiReact size={40} color="#61DAFB" /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} color="#000000" /> },
      { name: "Python", icon: <DiPython size={40} color="#3776AB" /> },
      { name: "Node.js", icon: <DiNodejsSmall size={40} color="#68A063" /> },
    ],
  },
  {
    category: "Estilização",
    skills: [
      {
        name: "Styled Components",
        icon: <SiStyledcomponents size={40} color="#DB7093" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={40} color="#38B2AC" />,
      },
    ],
  },

  {
    category: "Banco de Dados & ORMs",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
      { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
      {
        name: "SQL Server",
        // Fallback textual para SQL Server
        icon: (
          <span
            style={{ fontWeight: "bold", fontSize: "0.9rem", color: "#CC2927" }}
          >
            MSSQL
          </span>
        ),
      },
      {
        name: "Entity Framework",
        // Fallback textual para Entity Framework
        icon: (
          <span
            style={{ fontWeight: "bold", fontSize: "0.9rem", color: "#512BD4" }}
          >
            EF
          </span>
        ),
      },
    ],
  },
  {
    category: "Outras Ferramentas",
    skills: [
      { name: "Git", icon: <DiGit size={40} color="#F05032" /> },
      { name: "APIs/REST", icon: <FiServer size={40} color="#4A90E2" /> },
      { name: "SQL", icon: <FiDatabase size={40} color="#006F94" /> },
      { name: "Vite", icon: <SiVite size={40} color="#646CFF" /> },
    ],
  },
];

function SkillsSection() {
  return (
    <SkillsContainer>
      <h2>Minhas Skills</h2>
      {skillsCategories.map((category, idx) => (
        <CategoryContainer key={idx}>
          <CategoryTitle>{category.category}</CategoryTitle>
          <SkillsList>
            {category.skills.map((skill, index) => (
              <SkillItem key={index} title={skill.name}>
                {skill.icon}
              </SkillItem>
            ))}
          </SkillsList>
        </CategoryContainer>
      ))}
    </SkillsContainer>
  );
}

export default SkillsSection;
