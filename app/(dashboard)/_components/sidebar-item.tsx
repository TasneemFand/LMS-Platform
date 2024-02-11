"use client";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-[#fb923c] text-sm font-[500] pl-6 transition-all hover:text-[#ff630b] hover:bg-[#fff7ed]",
        isActive &&
          "text-[#ff630b] bg-[#ffedd5] hover:bg-[#ffedd5] hover:text-[#ff630b]"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn("text-[#fb923c]", isActive && "text-[#ff630b]")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-[#ff630b] h-full transition-all",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
