import { cn } from "@/lib/utils";
import React from "react";

const SectionHeading = ({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-2xl font-mono tracking-wider font-bold border-b  py-2 capitalize",
        className
      )}
    >
      {heading}
    </h1>
  );
};

export default SectionHeading;
