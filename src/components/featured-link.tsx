import type { CSSProperties } from "react";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import type { FeaturedLink as FeaturedLinkData } from "@/lib/profile";

const icons = {
  mail: Mail,
  calendar: Calendar,
};

export function FeaturedLink({
  link,
  index,
}: {
  link: FeaturedLinkData;
  index: number;
}) {
  const external = link.href.startsWith("http");
  const Icon = link.icon ? icons[link.icon] : null;

  return (
    <a
      href={link.href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group rise-in flex items-center gap-3 rounded-2xl bg-bg-elevated p-2 pr-3.5 shadow-card transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-px hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 active:scale-[0.96]"
      style={{ "--delay": `${200 + index * 40}ms` } as CSSProperties}
    >
      {link.thumb ? (
        <img
          src={link.thumb}
          alt={link.thumbAlt ?? ""}
          width={56}
          height={56}
          loading="lazy"
          className="size-14 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-fg/10"
        />
      ) : (
        <span className="flex size-14 items-center justify-center rounded-lg bg-bg text-fg-muted">
          {Icon ? <Icon className="size-5" strokeWidth={1.75} /> : null}
        </span>
      )}
      <span className="min-w-0 flex-1 text-left">
        <span className="block font-medium leading-snug text-fg">
          {link.title}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-fg-muted">
          {link.subtitle}
        </span>
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 text-fg-subtle transition-[transform,color] duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
        strokeWidth={1.75}
      />
    </a>
  );
}
