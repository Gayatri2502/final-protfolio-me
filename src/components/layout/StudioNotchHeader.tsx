"use client";

import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Briefcase, Layers, Cpu, FlaskConical, Sparkles, ArrowUpRight, Mail, Wrench, User } from "lucide-react";
import { NotchNav, type NotchItemData } from "@/components/ui/adaptive-notch-navigation-bar";
import { companyInfo } from "@/data/companyInfo";

const STUDIO_ITEMS: (NotchItemData & { href: string })[] = [
  { id: "home", label: "Home", icon: Sparkles, href: "/" },
  { id: "about", label: "Why Us", icon: User, href: "/about-new" },
  { id: "work", label: "Projects", icon: Briefcase, href: "/projects" },
  { id: "our-goal", label: "Our Goal", icon: Layers, href: "/our-goal" },
  { id: "skills", label: "Skills", icon: Cpu, href: "/skills" },
  { id: "service", label: "Service", icon: Wrench, href: "/services" },
  { id: "experiments", label: "Lab", icon: FlaskConical, href: "/experiments" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
];

function getActiveId(pathname: string): string {
  if (pathname === "/") return "home";
  const match = STUDIO_ITEMS.find((it) => it.href !== "/" && pathname.startsWith(it.href));
  return match?.id ?? "home";
}

export function StudioNotchHeader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const activeId = useMemo(() => getActiveId(pathname), [pathname]);

  const handleActiveChange = (id: string) => {
    const item = STUDIO_ITEMS.find((i) => i.id === id);
    if (!item) return;
    if (item.href.includes("#")) {
      const [path, hash] = item.href.split("#");
      const targetPath = path || "/";
      const doScroll = () => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (pathname !== targetPath) {
        router.push(item.href);
        // wait for navigation then scroll
        setTimeout(doScroll, 300);
      } else {
        doScroll();
      }
      // also try to scroll NotchNav inner container if window scroll is not used
      const scroller = document.querySelector<HTMLElement>("[data-notch-viewport]");
      if (scroller) scroller.scrollTo({ top: document.getElementById(hash)?.offsetTop ?? 0, behavior: "smooth" });
    } else {
      router.push(item.href);
    }
  };

  const LogoSlot = (
    <a href="/" className="flex items-center gap-2 h-8">
      <span className="flex size-7 items-center justify-center rounded-lg bg-zinc-800 text-zinc-50 dark:bg-zinc-300 dark:text-zinc-900 font-display font-bold text-xs tracking-tight">
        GS
      </span>
      <span className="hidden sm:inline-flex flex-col leading-none">
        <span className="text-[13px] font-semibold tracking-tight text-zinc-50 dark:text-zinc-900">Gayatri Samal</span>
      </span>
    </a>
  );

  const RightContentSlot = (
    <div className="flex items-center gap-2 h-8">
      <span className="hidden lg:flex items-center gap-1.5 mono-label text-[10px] text-zinc-400 dark:text-zinc-600">
        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulseDot" />
        <span className="hidden xl:inline">Selective</span>
      </span>
      <a
        href={companyInfo.social.email}
        className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-zinc-800 dark:bg-zinc-900 border border-zinc-700 dark:border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-200 dark:text-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 transition-colors"
      >
        <Mail className="size-3.5" />
        <span className="hidden lg:inline">Contact us</span>
        <ArrowUpRight className="size-3 hidden lg:block opacity-60" />
      </a>
      <a
        href={companyInfo.social.email}
        className="sm:hidden flex size-7 items-center justify-center rounded-full bg-zinc-800 dark:bg-zinc-900 text-zinc-200 dark:text-zinc-100"
        aria-label="Contact us"
      >
        <Mail className="size-3.5" />
      </a>
    </div>
  );

  return (
    <NotchNav
      items={STUDIO_ITEMS}
      activeId={activeId}
      position="top"
      logo={LogoSlot}
      rightContent={RightContentSlot}
      onActiveChange={handleActiveChange}
      className="bg-[#F2F0EB] dark:bg-[#F2F0EB] p-0 md:p-3"
    >
      {children}
    </NotchNav>
  );
}

export default StudioNotchHeader;
