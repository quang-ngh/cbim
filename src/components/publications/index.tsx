"use client";

import Image from "next/image";
import { YearGroup } from "@/types/research/research-types";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { matchesQuery, splitQuery } from "@/utils/lib/research-search";
import PublicationCard from "./publication-card";

import backgroundImage from "@images/home/bg.png";
import searchIcon from "@images/shared/search.svg";

interface PublicationsProps {
  readonly publications: YearGroup[];
}

export default function Publications({ publications }: PublicationsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentSearch = searchParams.get("search") || "";
  const inputRef = useRef<HTMLInputElement>(null);
  const currentInputValue = useRef(currentSearch);
  const debouncedUrlUpdate = useDebounce(currentInputValue.current, 300);

  const filteredPublications = useMemo(() => {
    if (!currentSearch) return publications;
    const { phrases, terms } = splitQuery(currentSearch);

    return publications
      .map((yearGroup) => ({
        ...yearGroup,
        papers: yearGroup.papers.filter((paper) => {
          const searchableText = [
            paper.title,
            paper.authors.join(" "),
            paper.publisher,
          ].join(" ");

          return matchesQuery(searchableText, phrases, terms);
        }),
      }))
      .filter((yearGroup) => yearGroup.papers.length > 0);
  }, [publications, currentSearch]);

  // Get all matched terms for highlighting
  const highlightTerms = useMemo(() => {
    if (!currentSearch) return [];
    const { phrases, terms } = splitQuery(currentSearch);
    return [...phrases, ...terms];
  }, [currentSearch]);

  // Handle input changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentInputValue.current = e.target.value;
    router.refresh();
  };

  // Update URL when debounced value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedUrlUpdate) {
      params.set("search", debouncedUrlUpdate);
    } else {
      params.delete("search");
    }

    if (params.toString() !== searchParams.toString()) {
      router.replace(`/publications?${params.toString()}`, { scroll: false });
    }
  }, [debouncedUrlUpdate, router, searchParams]);

  return (
    <main className="w-full bg-white relative">
      <div className="w-full flex flex-col items-center">
        {/* Thumbnail image */}
        <Image
          src={backgroundImage}
          alt="Rutgers AI Lab Background"
          className="object-cover  w-full h-[360px]"
        />
        {/* Main content */}
        <div
          className="w-full 
          xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]
          pt-8 px-3 
        "
        >
          {/* section title */}
          <div className=" py-5 w-full">
            <h2 className="xl:text-5xl text-3xl font-bold tracking-wide font-pt-serif">
              Publications
            </h2>
          </div>

          {/* TODO: fix top position according to header */}
          {/* search input */}
          <div className="sticky top-[60px] z-50">
            <div
              className="relative w-fit md:w-full bg-white
            border-b border-b-gray-700 flex items-center
            hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg shadow-md
            transition-all duration-200 ease-in-out 
            md:px-3 md:py-2 px-1.5 py-1
            md:gap-10 gap-4 
            "
            >
              <input
                ref={inputRef}
                type="text"
                defaultValue={currentSearch}
                onChange={handleSearchChange}
                placeholder="Search Publications"
                className="w-full px-4 pt-4 md:pb-6 pb-4   
                focus:outline-none md:text-xl text-base tracking-wider
                relative z-10
                "
              />

              <Image
                src={searchIcon}
                alt="Search Icon"
                className="size-5 md:size-8"
              />
            </div>
          </div>

          {/* publications list */}
          <div className="mt-8 pb-20 md:px-3 w-full flex flex-col gap-4">
            {[...filteredPublications].toReversed().map((yearGroup) => (
              <div
                key={yearGroup.year}
                className=" flex justify-start items-start gap-4 "
              >
                {/* year */}
                <div
                  className="flex-shrink-0
                  sticky top-[150px] z-10
                   flex flex-col gap-2 items-center
                "
                >
                  <div
                    className=" flex items-center gap-0 md:text-xl text-base leading-none font-bold 
                  text-black bg-white border-2 border-primary-red                  
                   tracking-wider h-10 md:px-4 px-1"
                  >
                    <div>{yearGroup.year}</div>
                  </div>
                </div>
                {/* publications */}
                <div className="flex-1 border-l-4 border-primary-red pl-5 -ml-10 mt-14 pb-4">
                  <p className="font-semibold tracking-wider italic px-6 text-white w-fit -mt-14 leading-loose bg-primary-red h-10 flex items-center">
                    {yearGroup.papers.length} Publications
                  </p>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-6 pl-2">
                    {[...yearGroup.papers].toReversed().map((paper) => (
                      <PublicationCard
                        key={paper.id}
                        publication={paper}
                        searchTerms={highlightTerms}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
