import { z } from 'zod';
import path from "path";
import { ContentParser } from "./md-parser";

const MemberSchema = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string().optional(),
  role: z.enum(['pi', 'undergrad', 'alumni']),
  affiliation: z.string().optional().nullable(),
  links: z.record(z.string()).optional(),
  aliases: z.array(z.string()).optional(),
  body: z.string().optional(),
});

/**
 * Fetches and parses team member data from markdown files.
 * 
 * This function reads team member information from markdown files in the content directory,
 * validates it against a schema, and returns a collection of team member objects.
 * 
 * @returns Promise resolving to an array of validated TeamMember objects
 */
export const getTeamMembers = async () => {
  const parser = new ContentParser(
    MemberSchema,
    path.join(process.cwd(), 'content/team')
  );

  return parser.parse();
};

/**
 * Organizes team members by their role categories.
 * 
 * This function fetches all team members and then separates them into
 * principal investigators, regular team members, and alumni based on their roles.
 * 
 * @returns Promise resolving to an object with categorized team members
 */
export const getTeamMembersByRole = async () => {
  const members = await getTeamMembers();

  const pi = members.filter(member => member.role === 'pi');
  const teamMembers = members.filter(member => member.role === 'undergrad');
  const alumni = members.filter(member => member.role === 'alumni');

  return { pi, teamMembers, alumni };
};
