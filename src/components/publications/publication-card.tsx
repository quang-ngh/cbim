import Image from "next/image";
import Link from "next/link";
import { Paper } from "@/types/research/research-types";
import authorIcon from "@images/shared/author-black.svg";
import dateIcon from "@images/shared/date-black.svg";
import HighlightedSearchedText from "./highlighted-searched-text";

interface PublicationCardProps {
  readonly publication: Paper;
  readonly searchTerms?: string[];
}

export default function PublicationCard({
  publication,
  searchTerms,
}: PublicationCardProps) {
  return (
    <div
      className="w-full text-[#686868] group hover:scale-105 transition-all duration-200 ease-in-out 
     shadow-lg relative pb-12
    "
    >
      <div className="flex md:flex-row flex-col gap-4 p-2 w-full">
        {publication.image && (
          <div className="w-[200px] h-[200px]  relative rounded-md">
            <Image
              src={publication.image}
              alt={publication.title}
              fill
              className="rounded-md"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 min-w-0 py-2">
          {/* publisher */}
          <p className="text-xs inline-flex ">
            {HighlightedSearchedText(publication.publisher ?? "", searchTerms)}
          </p>

          {/* title */}
          <h3 className="text-base text-black font-pt-serif leading-[120%] font-bold mt-1 mb-2 py-1 border-b border-t border-gray-300">
            <Link href={publication.link} target="_blank">
              {HighlightedSearchedText(publication.title, searchTerms)}
            </Link>
          </h3>

          {/* date */}
          <div className="flex items-center gap-2 text-sm mb-1">
            <Image src={dateIcon} alt="date" width={16} height={16} />
            <p>{publication.date}</p>
          </div>

          {/* authors */}
          <div className="inline-flex items-start gap-2 ">
            <Image
              src={authorIcon}
              alt="author"
              width={16}
              height={16}
              className="inline-block"
            />
            <p className=" text-sm mb-4">
              {HighlightedSearchedText(
                publication.authors.join(", "),
                searchTerms
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        {/* tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {publication.tags?.map((tag) => (
            <Link
              href={`/research?tag=${tag}`}
              key={tag}
              className="px-3 py-1 text-sm font-semibold border-primary-red border-2
                hover:bg-primary-red hover:text-white 
                transition-colors duration-200 ease-in-out"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
