export const APP_NAME = "Mira Vale";

export const profile = {
  name: "Mira Vale",
  role: "Designer & photographer",
  bio: "Photographs, interfaces, and the space between them.",
  location: "Porto, Portugal",
  status: "Open for commissions",
  email: "hello@miravale.studio",
  avatar: "/profile/avatar.jpg",
  avatarAlt: "Portrait of Mira Vale",
} as const;

export type FeaturedLink = {
  title: string;
  subtitle: string;
  href: string;
  thumb?: string;
  thumbAlt?: string;
  icon?: "mail" | "calendar";
};

export const featuredLinks: FeaturedLink[] = [
  {
    title: "Selected work",
    subtitle: "Studio archive",
    href: "https://www.are.na/",
    thumb: "/profile/work-studio.jpg",
    thumbAlt: "A linen notebook and brass pen on a wooden desk",
  },
  {
    title: "Field notes",
    subtitle: "Essays on looking",
    href: "https://read.cv/",
    thumb: "/profile/work-notes.jpg",
    thumbAlt: "A quiet street in Porto at dusk",
  },
  {
    title: "Print shop",
    subtitle: "Small editions",
    href: "https://www.artsy.net/",
    thumb: "/profile/work-prints.jpg",
    thumbAlt: "A stack of photographic prints on linen",
  },
  {
    title: "The newsletter",
    subtitle: "Monthly, never noisy",
    href: "https://buttondown.com/",
    icon: "mail",
  },
  {
    title: "Book a call",
    subtitle: "New projects from spring",
    href: `mailto:${profile.email}?subject=${encodeURIComponent("New project")}`,
    icon: "calendar",
  },
];

export type SocialLink = {
  name: string;
  href: string;
  icon: "x" | "instagram" | "arena" | "github" | "mail";
};

export const socialLinks: SocialLink[] = [
  { name: "X", href: "https://x.com/", icon: "x" },
  { name: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  { name: "Are.na", href: "https://www.are.na/", icon: "arena" },
  { name: "GitHub", href: "https://github.com/", icon: "github" },
  { name: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];
