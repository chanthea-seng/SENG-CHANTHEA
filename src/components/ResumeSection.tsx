"use client";

import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import * as React from "react";

export default function ResumeSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>{title}</SheetTitle>
        {description && <SheetDescription>{description}</SheetDescription>}
      </SheetHeader>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        {children}
      </div>
    </>
  );
}
