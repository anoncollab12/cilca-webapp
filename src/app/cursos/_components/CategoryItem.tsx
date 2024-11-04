import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { type IconType } from "react-icons";
import { cn } from "~/lib/utils";

interface CategoryItemProps {
  category: string;
  icon?: IconType;
}

export default function CategoryItem({
  category,
  icon: Icon,
}: CategoryItemProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const isSelected = currentCategory === category;

  const onClick = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (isSelected) {
      newSearchParams.delete("category");
    } else {
      newSearchParams.set("category", category);
    }

    const newPathname = `${pathname}?${newSearchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-x-1 rounded-full border border-slate-200 px-3 py-2 text-sm transition hover:border-purple-700",
        isSelected && "border-purple-700 bg-purple-200/20 text-purple-800",
      )}
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{category}</div>
    </button>
  );
}
