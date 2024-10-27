"use client";
import { cursoCategoriaeEnum } from "~/server/db/schema";
import CategoryItem from "./CategoryItem";

const iconMap: Record<string, string> = {
  Arte: "🎨",
  Ciencia: "🧪",
  Espiritual: "🙏",
  Negocios: "📈",
  Idiomas: "💭",
  Cocina: "🍽",
  Musica: "🎵",
  Deportes: "🏅",
};

export default function CategorySelection() {
  const categories = cursoCategoriaeEnum.enumValues;
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto py-2">
      {categories.map((category) => (
        <CategoryItem
          key={category}
          category={category}
          icon={iconMap[category]}
        />
      ))}
    </div>
  );
}
