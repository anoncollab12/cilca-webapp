"use client";
import { cursoCategoriaeEnum } from "~/server/db/schema";
import CategoryItem from "./CategoryItem";

import {
  MdOutlineChatBubbleOutline,
  MdOutlineChurch,
  MdOutlineEmojiEvents,
  MdOutlineInsertChartOutlined,
  MdOutlineMusicNote,
  MdOutlinePalette,
  MdOutlineRestaurant,
  MdOutlineScience,
} from "react-icons/md";
import { type IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  Arte: MdOutlinePalette,
  Ciencia: MdOutlineScience,
  Espiritual: MdOutlineChurch,
  Negocios: MdOutlineInsertChartOutlined,
  Idiomas: MdOutlineChatBubbleOutline,
  Cocina: MdOutlineRestaurant,
  Musica: MdOutlineMusicNote,
  Deportes: MdOutlineEmojiEvents,
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
