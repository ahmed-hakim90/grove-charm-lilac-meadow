import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { FeaturedLink } from "@/components/featured-link";
import { ShareButton } from "@/components/share-button";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { featuredLinks, profile } from "@/lib/profile";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="flex min-h-dvh w-full justify-center md:items-center">
      <main className="flex w-full max-w-md flex-col px-5 py-5 sm:py-12">
        <header className="mb-8 flex items-center justify-end">
          <ThemeToggle />
        </header>

        <section className="flex flex-col items-center text-center">
          <div className="rise-in" style={{ "--delay": "0ms" } as CSSProperties}>
            <img
              src={profile.avatar}
              alt={profile.avatarAlt}
              width={112}
              height={112}
              fetchPriority="high"
              className="size-28 rounded-full object-cover outline outline-1 -outline-offset-1 outline-fg/15"
            />
          </div>

          <h1
            className="rise-in mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-fg"
            style={{ "--delay": "40ms" } as CSSProperties}
          >
            {profile.name}
          </h1>
          <p
            className="rise-in mt-1.5 text-sm font-medium text-fg-muted"
            style={{ "--delay": "80ms" } as CSSProperties}
          >
            {profile.role}
          </p>
          <p
            className="rise-in mt-4 max-w-xs font-display text-lg italic leading-snug text-fg"
            style={{ "--delay": "120ms" } as CSSProperties}
          >
            {profile.bio}
          </p>
          <p
            className="rise-in mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-fg-muted"
            style={{ "--delay": "160ms" } as CSSProperties}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin
                className="size-3.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {profile.location}
            </span>
            <span aria-hidden="true" className="text-fg-subtle">
              ·
            </span>
            <span>{profile.status}</span>
          </p>
        </section>

        <section
          aria-label="Featured links"
          className="mt-8 flex flex-col gap-3"
        >
          {featuredLinks.map((link, index) => (
            <FeaturedLink key={link.title} link={link} index={index} />
          ))}
        </section>

        <div className="mt-8 flex flex-col items-center gap-3">
          <SocialLinks />
          <ShareButton />
        </div>

        <p className="pt-10 text-center text-xs text-fg-subtle">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </main>
    </div>
  );
}
