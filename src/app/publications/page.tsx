import SuspenseSearchParamsWrapper from "@/components/publications/search-params-wrapper";
import { getYamlResearchPapersGroupedByYear } from "@/utils/lib/yaml-parser";

export default async function PublicationsPage() {
  const publications = await getYamlResearchPapersGroupedByYear();

  return <SuspenseSearchParamsWrapper publications={publications} />;
}
