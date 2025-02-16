import { useEffect, useState, useCallback } from "react";
import { fetchProjects } from "../../api/supabaseApi";
import {
  CloseButton,
  Container,
  FullscreenImage,
  FullscreenOverlay,
  LoadingContainer,
  LoadingText,
  ProjectCard,
  ProjectsContainer,
  ReadMoreButton,
  SectionTitle,
  StyledHr,
} from "./styles";
import { Project } from "../../types/types";
import languageIcons from "../../services/languageIcons";
import { DotLoader } from "react-spinners";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import remarkGfm from "remark-gfm";
import "github-markdown-css";
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleReadMore = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId], // Alterna entre expandir e esconder
    }));
  };

  const openImage = (image_url?: string) => {
    if (image_url) {
      setSelectedImage(image_url);
    }
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const calculateTimeDifference = useCallback((date?: string) => {
    if (!date) return "Data indisponível";

    const targetDate = new Date(date);
    if (isNaN(targetDate.getTime())) return "Data inválida";

    const now = new Date();
    const diffInMilliseconds = now.getTime() - targetDate.getTime();

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) return `${years} ano(s) atrás`;
    if (months > 0) return `${months} mês(es) atrás`;
    if (days > 0) return `${days} dia(s) atrás`;
    if (hours > 0) return `${hours} hora(s) atrás`;
    if (minutes > 0) return `${minutes} minuto(s) atrás`;

    return "Agora mesmo";
  }, []);

  useEffect(() => {
    async function getProjects() {
      try {
        const data = await fetchProjects();
        if (data && Array.isArray(data)) {
          setProjects(data);
        } else {
          setError("Erro ao buscar projetos: resposta inválida");
        }
      } catch (err) {
        console.error("Erro ao carregar projetos:", err);
        setError("Erro ao carregar projetos");
      } finally {
        setLoading(false);
      }
    }
    getProjects();
  }, []);

  if (loading) {
    return (
      <section>
        <SectionTitle>Meus Projetos</SectionTitle>
        <LoadingContainer>
          <DotLoader color="#123abc" loading={loading} size={50} />
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <SectionTitle>Meus Projetos</SectionTitle>
        <ProjectsContainer>
          <p>{error}</p>
        </ProjectsContainer>
      </section>
    );
  }

  return (
    <Container>
      <SectionTitle>Meus Projetos</SectionTitle>
      <ProjectsContainer>
        {projects.map((project) => {
          const isExpanded = expandedProjects[project.id] || false;

          return (
            <ProjectCard key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              {isExpanded && (
                <div className="markdown-body descriptionMore">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                  >
                    {project.full_description || ""}
                  </ReactMarkdown>
                </div>
              )}

              <ReadMoreButton onClick={() => handleToggleReadMore(project.id)}>
                {isExpanded ? (
                  <>
                    <FiChevronUp />
                    Ler menos
                  </>
                ) : (
                  <>
                    <FiChevronDown />
                    Ler mais
                  </>
                )}
              </ReadMoreButton>

              {project.image_url && (
                <img
                  src={project.image_url}
                  alt={project.name}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (project.image_url) openImage(project.image_url);
                  }}
                />
              )}

              <div className="project-dates">
                <span>
                  Criado em:{" "}
                  {project.first_commit_date
                    ? new Date(project.first_commit_date).toLocaleDateString(
                        "pt-BR",
                        {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        }
                      )
                    : "Data indisponível"}
                </span>
                <span>
                  Atualizado há:{" "}
                  {calculateTimeDifference(project.last_commit_date)}
                </span>
              </div>

              {/* Exibir Linguagens */}
              {project.languages && project.languages.length > 0 ? (
                <div className="project-languages">
                  <strong>Linguagens:</strong>
                  {project.languages.map((lang: string, index: number) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        marginRight: "8px",
                      }}
                    >
                      {languageIcons[lang] && (
                        <img
                          src={languageIcons[lang]}
                          alt={lang}
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "4px",
                          }}
                        />
                      )}
                      {lang}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="project-languages">
                  Linguagens: Indisponível
                </div>
              )}

              {project.technologies ? (
                <div className="project-technologies">
                  <strong>Tecnologias:</strong>
                  {project.technologies
                    .split(",")
                    .map((tech: string, index: number, array: string[]) => (
                      <span key={index} style={{ marginRight: "1px" }}>
                        {tech.trim()}
                        {index < array.length - 1 ? ", " : ""}
                      </span>
                    ))}
                </div>
              ) : (
                <div className="project-technologies">
                  Tecnologias: Indisponível
                </div>
              )}

              <a
                href={project.link_git}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Repositório no GitHub
              </a>
              <StyledHr />
            </ProjectCard>
          );
        })}
      </ProjectsContainer>
      {selectedImage && (
        <FullscreenOverlay onClick={closeImage}>
          <CloseButton onClick={closeImage}>&times;</CloseButton>
          <FullscreenImage src={selectedImage} alt="Imagem em tela cheia" />
        </FullscreenOverlay>
      )}
    </Container>
  );
};

export default ProjectsSection;
