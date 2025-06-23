import { z } from 'zod';
import matter from 'gray-matter';
import path from 'path';
import { promises as fs } from 'fs';

/**
 * Generic content parser for markdown files with frontmatter.
 * 
 * This class reads and parses markdown files from a specified directory,
 * extracts frontmatter metadata using gray-matter, and validates the data
 * against a provided Zod schema to ensure type safety.
 * 
 * @template T - The expected type of the parsed content
 */
export class ContentParser<T> {
  private readonly schema: z.ZodType<T>;
  private readonly contentDir: string;

  constructor(
    schema: z.ZodType<T>,
    contentDir: string,
  ) {
    this.schema = schema;
    this.contentDir = contentDir;
  }

  /**
   * Parses all markdown files in the specified directory
   * 
   * @returns Array of parsed and validated content objects
   */
  async parse(): Promise<T[]> {
    const files = await fs.readdir(this.contentDir);
    const mdFiles = files.filter(file => file.endsWith('.md'));

    const contents = await Promise.all(
      mdFiles.map(async (filename) => {
        const filePath = path.join(this.contentDir, filename);
        const content = await fs.readFile(filePath, 'utf8');
        const { data, content: body } = matter(content);

        try {
          return this.schema.parse({
            ...data,
            id: filename.replace('.md', ''),
            body,
          });
        } catch (error) {
          console.error(`Error validating content in ${filename}:`, error);
          throw error;
        }
      })
    );

    return contents;
  }
}
