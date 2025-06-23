import { z } from 'zod';
import path from 'path';
import { ContentParser } from './md-parser';

const BaseProjectSchema = z.object({
  title: z.string(),
  author: z.string(),
  image: z.string().optional(),
  group: z.enum(['normal', 'featured']),
  tag: z.array(z.string()),
  links: z.string().optional().nullable(),
  github: z.string().optional(),
  body: z.string(),
  id: z.string()
});

// Create type for the base schema
type BaseProject = z.infer<typeof BaseProjectSchema>;

// Create interface for the final project with content and description
export interface Project extends BaseProject {
  description: string;
  content: string;
}


/**
 * Processes a project's content to extract description and Main content.
 * 
 * This function separates the excerpt (description) from the Main content
 * by looking for special HTML comment markers. It creates a clean project
 * object with properly separated metadata and content sections.
 * 
 * @param project - The base project data from the markdown file
 * @returns A processed project object with separated description and content
 */
const processProjectContent = (project: BaseProject): Project => {
  const body = project.body || '';
  let description = '';
  let content = body;

  const excerptRegex = /<!-- excerpt start -->([\s\S]*?)<!-- excerpt end -->/;
  const excerptMatch = excerptRegex.exec(body);

  if (excerptMatch) {
    description = excerptMatch[1].trim();
    // Just remove the excerpt block and use everything else as content
    content = body.split('<!-- excerpt end -->')[1].trim();
  }

  return {
    ...project,
    description,
    content,
  };
};

/**
 * Fetches and processes all project data from markdown files.
 * 
 * @returns Promise resolving to an array of fully processed Project objects
 */
export const getProjects = async (): Promise<Project[]> => {
  const parser = new ContentParser(
    BaseProjectSchema,
    path.join(process.cwd(), 'content/projects')
  );

  const baseProjects = await parser.parse();
  return baseProjects.map(processProjectContent);
};

/**
 * Groups projects by their designated category (featured or normal).
 * 
 * @returns Object containing arrays of featured and normal projects
 */
export const getProjectsByGroup = async () => {
  const projects = await getProjects();

  const featured = projects.filter(project => project.group === 'featured');
  const normal = projects.filter(project => project.group === 'normal');

  return { featured, normal };
};

/**
 * Retrieves a specific project by its unique identifier.
 * 
 * @param id - The unique identifier of the project to find
 * @returns Promise resolving to the found Project or null if not found
 */
export const getProjectById = async (id: string): Promise<Project | null> => {
  const projects = await getProjects();
  return projects.find(project => project.id === id) || null;
};