export interface Project {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  created_at: string;
  updated_at: string;
  link_git: string;
  first_commit_date?: string;
  last_commit_date?: string;
  languages: string[];
  technologies: string | null;
  full_description?: string;
}

export type ImageFile = File;
