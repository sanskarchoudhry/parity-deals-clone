import { Globe2Icon } from "lucide-react";
import React from "react";

export function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 mr-auto text-lg">
      <Globe2Icon className="sixe-8" />
      <span>Easy PPP</span>
    </span>
  );
}
