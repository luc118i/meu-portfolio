import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const fetchWithAuth = async (url: string) => {
  return await fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Accept-Charset": "UTF-8",
    },
  });
};

// Função para obter as linguagens do repositório do GitHub
export const getRepoLanguages = async (link_git: string): Promise<string[]> => {
  if (!link_git) {
    console.error("Erro: link_git está indefinido ou nulo.");
    return [];
  }
  try {
    const match = link_git.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return [];
    const owner = match[1];
    const repo = match[2];
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/languages`;
    const response = await fetchWithAuth(apiUrl);
    if (!response.ok) throw new Error("Erro ao buscar linguagens");
    const languages = await response.json();
    return Object.keys(languages);
  } catch (error) {
    console.error("Erro ao buscar linguagens do repositório:", error);
    return [];
  }
};

// Função para obter a data do primeiro commit usando paginação
export const getFirstCommitDate = async (link_git: string) => {
  if (!link_git) {
    console.error("Erro: link_git está indefinido ou nulo.");
    return null;
  }
  try {
    const match = link_git.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return null;
    const owner = match[1];
    const repo = match[2];
    // Requisição inicial para obter o header "Link"
    const initialUrl = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;
    const initialResponse = await fetchWithAuth(initialUrl);
    if (!initialResponse.ok) throw new Error("Erro ao buscar commits");
    const linkHeader = initialResponse.headers.get("Link");
    let firstCommitUrl = initialUrl;
    if (linkHeader) {
      // Extrai a URL da última página (contendo o commit mais antigo)
      const regex = /<([^>]+)>;\s*rel="last"/;
      const matchLink = linkHeader.match(regex);
      if (matchLink && matchLink[1]) {
        firstCommitUrl = matchLink[1];
      }
    }
    const commitsResponse = await fetchWithAuth(firstCommitUrl);
    if (!commitsResponse.ok) throw new Error("Erro ao buscar primeiro commit");
    const commits = await commitsResponse.json();
    if (!Array.isArray(commits) || commits.length === 0) return null;
    // Como per_page=1, pega o commit da posição 0
    return commits[0].commit.author.date;
  } catch (error) {
    console.error("Erro ao buscar primeiro commit:", error);
    return null;
  }
};

// Função para obter a data do último commit
export const getLastCommitDate = async (link_git: string) => {
  if (!link_git) {
    console.error("Erro: link_git está indefinido ou nulo.");
    return null;
  }
  try {
    const match = link_git.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) {
      console.error("Erro: URL do repositório inválida.", link_git);
      return null;
    }
    const owner = match[1];
    const repo = match[2];
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`;
    const response = await fetchWithAuth(apiUrl);
    if (!response.ok) throw new Error("Erro ao buscar último commit");
    const commits = await response.json();
    if (!Array.isArray(commits) || commits.length === 0) {
      console.error("Erro: Nenhum commit encontrado para", link_git);
      return null;
    }
    return commits[0].commit.author.date;
  } catch (error) {
    console.error("Erro ao buscar último commit:", error);
    return null;
  }
};

// Função para atualizar os dados do projeto no Supabase
export const updateProjectData = async (
  projectId: number,
  firstCommitDate: string | null,
  lastCommitDate: string | null,
  languages: string[] | null,
  fullDescription: string
) => {
  const { error } = await supabase
    .from("meus-projetos")
    .update({
      first_commit_date: firstCommitDate
        ? new Date(firstCommitDate).toISOString()
        : null,
      last_commit_date: lastCommitDate
        ? new Date(lastCommitDate).toISOString()
        : null,
      languages,
      full_description: fullDescription,
    })
    .eq("id", projectId);

  if (error) {
    console.error("Erro ao atualizar dados do projeto:", error);
  }
};

// Função para buscar os projetos, atualizar os dados do GitHub e retornar os registros atualizados
export const fetchProjects = async () => {
  // Busca inicial dos projetos
  const { data: projects, error } = await supabase
    .from("meus-projetos")
    .select("*");

  if (error) {
    console.error("Erro ao buscar projetos:", error);
    return [];
  }

  // Para cada projeto, busca os dados do GitHub e atualiza no Supabase
  for (const project of projects) {
    if (project.link_git) {
      const firstCommitDate = await getFirstCommitDate(project.link_git);
      const lastCommitDate = await getLastCommitDate(project.link_git);
      const languages = await getRepoLanguages(project.link_git);
      const readme = await getRepoReadme(project.link_git);

      await updateProjectData(
        project.id,
        firstCommitDate,
        lastCommitDate,
        languages,
        readme
      );
    }
  }

  // Reconsulta os projetos atualizados
  const { data: updatedProjects, error: updateError } = await supabase
    .from("meus-projetos")
    .select("*");
  if (updateError) {
    console.error("Erro ao buscar projetos atualizados:", updateError);
    return projects;
  }
  return updatedProjects;
};

// Buscar o conteúdo do README.md do repositório
export const getRepoReadme = async (link_git: string): Promise<string> => {
  if (!link_git) {
    console.error("Erro: link_git está indefinido ou nulo.");
    return "";
  }
  try {
    const match = link_git.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) return "";
    const owner = match[1];
    const repo = match[2];
    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;
    const response = await fetchWithAuth(apiUrl);
    if (!response.ok) throw new Error("Erro ao buscar README");
    const data = await response.json();
    if (data.content && data.encoding === "base64") {
      const decodedContent = atob(data.content);
      const utf8Content = decodeURIComponent(escape(decodedContent));
      return utf8Content;
    }

    return "";
  } catch (error) {
    console.error("Erro ao buscar README do repositório:", error);
    return "";
  }
};
