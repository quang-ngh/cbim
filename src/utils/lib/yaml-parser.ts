import { z } from 'zod';
import YAML from 'yaml';
import path from 'path';
import { promises as fs } from 'fs';
import { Paper, YearGroup } from '@/types/research/research-types';


/**
 * Generic YAML content parser class with schema validation.
 * 
 * This class handles parsing YAML files with Zod schema validation to ensure
 * type safety and data integrity. It's used for various data sources in the application.
 * 
 * @template T - The expected type of the parsed data
 */
export class YamlContentParser<T> {
  private readonly schema: z.ZodType<T>;
  private readonly filePath: string;

  constructor(schema: z.ZodType<T>, filePath: string) {
    this.schema = schema;
    this.filePath = filePath;
  }

  /**
   * Parses the YAML file and validates its contents against the schema
   * 
   * @returns The parsed and validated data
   * @throws Error if the file cannot be read or the data fails validation
   */
  async parse(): Promise<T> {
    const content = await fs.readFile(this.filePath, 'utf8');
    const data = YAML.parse(content);

    try {
      return this.schema.parse(data);
    } catch (error) {
      console.error(`Error validating content in ${this.filePath}:`, error);
      throw error;
    }
  }
}

let researchCache: YearGroup[] | null = null;

export const getYamlResearchPapers = async (): Promise<Paper[]> => {
  const PaperSchema = z.object({
    title: z.string(),
    authors: z.array(z.string()),
    date: z.string(),
    id: z.string(),
    link: z.string().url(),
    tags: z.array(z.string()).optional(),
    image: z.string().url().nullable().optional(),
    publisher: z.string().optional(),
  });

  // Parser now expects an array of papers.
  const parser = new YamlContentParser<Paper[]>(
    z.array(PaperSchema),
    path.join(process.cwd(), '_data', 'citations.yaml')
  );

  return parser.parse();
};

export const getYamlResearchPapersGroupedByYear = async (): Promise<YearGroup[]> => {
  if (researchCache) {
    return researchCache;
  }
  const papers = await getYamlResearchPapers();

  // Group papers by year extracted from the `date` field.
  // Adjust the date parsing if your date format is different.
  const groups = papers.reduce((acc: Record<number, Paper[]>, paper) => {
    const year = new Date(paper.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(paper);
    return acc;
  }, {});

  // Convert the grouped object into the YearGroup interface.
  researchCache = Object.entries(groups).map(([year, papers]) => ({
    year: parseInt(year, 10),
    papers,
  }));

  return researchCache;
};
