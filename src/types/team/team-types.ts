export interface TeamMember {
  name: string;
  image: string;
  description?: string | null;
  role: "pi" | "undergrad" | "alumni";
  affiliation?: string | null;
  links?: Record<string, string>;
  aliases?: string[];
  body?: string | null;
}

export interface TeamPageProps {
  pi: TeamMember[];
  teamMembers: TeamMember[];
  alumni: TeamMember[];
}
