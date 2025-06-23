"use client";
import { Suspense } from "react";
import Publications from "@/components/publications";
import { YearGroup } from "@/types/research/research-types";

interface Props {
  readonly publications: YearGroup[];
}

export default function SuspenseSearchParamsWrapper({ publications }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Publications publications={publications} />
    </Suspense>
  );
}
