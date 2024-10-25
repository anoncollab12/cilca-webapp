"use client";
import { cursoCategoriaeEnum } from "~/server/db/schema";
import CategoryItem from "./CategoryItem";

export default function CategorySelection() {
  const categories = cursoCategoriaeEnum.enumValues;
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto py-2">
      {categories.map((category) => (
        <CategoryItem key={category} category={category} />
      ))}
    </div>
  );
}
