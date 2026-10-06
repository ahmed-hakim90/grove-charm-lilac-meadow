import type { CSSProperties, SVGProps } from "react";
import { socialLinks, type SocialLink } from "@/lib/profile";
import { cn } from "@/lib/utils";

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.92A3.12 3.12 0 1 1 12 8.88a3.12 3.12 0 0 1 0 6.24zM17.76 6.96a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM12 3.36c-2.35 0-2.64.01-3.56.05-.91.04-1.54.19-2.08.4a4.2 4.2 0 0 0-1.52 1.03 4.2 4.2 0 0 0-1.03 1.52c-.21.54-.36 1.17-.4 2.08-.04.92-.05 1.21-.05 3.56s.01 2.64.05 3.56c.04.91.19 1.54.4 2.08.23.59.56 1.1 1.03 1.52.42.47.93.8 1.52 1.03.54.21 1.17.36 2.08.4.92.04 1.21.05 3.56.05s2.64-.01 3.56-.05c.91-.04 1.54-.19 2.08-.4a4.2 4.2 0 0 0 1.52-1.03 4.2 4.2 0 0 0 1.03-1.52c.21-.54.36-1.17.4-2.08.04-.92.05-1.21.05-3.56s-.01-2.64-.05-3.56c-.04-.91-.19-1.54-.4-2.08a4.2 4.2 0 0 0-1.03-1.52 4.2 4.2 0 0 0-1.52-1.03c-.54-.21-1.17-.36-2.08-.4-.92-.04-1.21-.05-3.56-.05zm0 1.68c2.31 0 2.58.01 3.49.05.84.04 1.3.18 1.6.3.4.15.69.34.99.64.3.3.49.59.64.99.12.3.26.76.3 1.6.04.91.05 1.18.05 3.49s-.01 2.58-.05 3.49c-.04.84-.18 1.3-.3 1.6-.15.4-.34.69-.64.99-.3.3-.59.49-.99.64-.3.12-.76.26-1.6.3-.91.04-1.18.05-3.49.05s-2.58-.01-3.49-.05c-.84-.04-1.3-.18-1.6-.3a2.67 2.67 0 0 1-.99-.64 2.67 2.67 0 0 1-.64-.99c-.12-.3-.26-.76-.3-1.6-.04-.91-.05-1.18-.05-3.49s.01-2.58.05-3.49c.04-.84.18-1.3.3-1.6.15-.4.34-.69.64-.99.3-.3.59-.49.99-.64.3-.12.76-.26 1.6-.3.91-.04 1.18-.05 3.49-.05z" />
    </svg>
  );
}

function IconGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function IconArena(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.2 7.2h3.2v3.2H7.2zm6.4 0h3.2v3.2h-3.2zM7.2 13.6h3.2v3.2H7.2zm6.4 0h3.2v3.2h-3.2z" />
    </svg>
  );
}

function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

const icons: Record<SocialLink["icon"], typeof IconX> = {
  x: IconX,
  instagram: IconInstagram,
  github: IconGithub,
  arena: IconArena,
  mail: IconMail,
};

export function SocialLinks() {
  return (
    <nav
      aria-label="Social"
      className="rise-in flex items-center justify-center gap-1"
      style={{ "--delay": "440ms" } as CSSProperties}
    >
      {socialLinks.map((link) => {
        const Icon = icons[link.icon];
        const external = link.href.startsWith("http");
        return (
          <a
            key={link.name}
            href={link.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
            aria-label={link.name}
            className={cn(
              "relative flex size-11 items-center justify-center rounded-full text-fg-muted",
              "transition-[transform,color,background-color] duration-150 ease-out",
              "hover:bg-fg/5 hover:text-fg active:scale-[0.96]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
            )}
          >
            <Icon className="size-5" />
          </a>
        );
      })}
    </nav>
  );
}
