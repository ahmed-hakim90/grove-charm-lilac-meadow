import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Mail, c as ArrowUpRight, i as MapPin, n as Sun, o as Link2, r as Moon, s as Calendar } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as socialLinks, n as featuredLinks, r as profile } from "./router-B3ud-vSa.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUoaREon.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons$1 = {
	mail: Mail,
	calendar: Calendar
};
function FeaturedLink({ link, index }) {
	const external = link.href.startsWith("http");
	const Icon = link.icon ? icons$1[link.icon] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: link.href,
		target: external ? "_blank" : void 0,
		rel: external ? "noreferrer noopener" : void 0,
		className: "group rise-in flex items-center gap-3 rounded-2xl bg-bg-elevated p-2 pr-3.5 shadow-card transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-px hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 active:scale-[0.96]",
		style: { "--delay": `${200 + index * 40}ms` },
		children: [
			link.thumb ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: link.thumb,
				alt: link.thumbAlt ?? "",
				width: 56,
				height: 56,
				loading: "lazy",
				className: "size-14 rounded-lg object-cover outline outline-1 -outline-offset-1 outline-fg/10"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-14 items-center justify-center rounded-lg bg-bg text-fg-muted",
				children: Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "size-5",
					strokeWidth: 1.75
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium leading-snug text-fg",
					children: link.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-0.5 block text-sm leading-snug text-fg-muted",
					children: link.subtitle
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				"aria-hidden": "true",
				className: "size-4 shrink-0 text-fg-subtle transition-[transform,color] duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg",
				strokeWidth: 1.75
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[transform,background-color,color,box-shadow,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			outline: "bg-bg-elevated text-fg shadow-card hover:shadow-card-hover",
			ghost: "text-fg-muted hover:bg-fg/5 hover:text-fg"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-9 px-3",
			icon: "size-11"
		},
		press: {
			true: "active:not-disabled:scale-[0.96]",
			false: ""
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default",
		press: true
	}
});
function Button({ className, variant, size, press, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			press,
			className
		})),
		...props
	});
}
function copyText(text) {
	const input = document.createElement("textarea");
	input.value = text;
	input.setAttribute("readonly", "");
	input.style.position = "fixed";
	input.style.top = "0";
	input.style.left = "0";
	input.style.opacity = "0";
	document.body.appendChild(input);
	input.focus();
	input.select();
	input.setSelectionRange(0, text.length);
	try {
		return document.execCommand("copy");
	} finally {
		document.body.removeChild(input);
	}
}
function ShareButton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		type: "button",
		variant: "ghost",
		className: "rise-in text-fg-muted",
		style: { "--delay": "480ms" },
		onClick: async () => {
			const url = window.location.href;
			try {
				if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(url);
				else if (!copyText(url)) throw new Error("copy failed");
				toast.success("Link copied");
			} catch {
				if (copyText(url)) {
					toast.success("Link copied");
					return;
				}
				toast.error("Could not copy the link");
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { strokeWidth: 1.75 }), "Copy profile link"]
	});
}
function IconX(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
	});
}
function IconInstagram(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.92A3.12 3.12 0 1 1 12 8.88a3.12 3.12 0 0 1 0 6.24zM17.76 6.96a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM12 3.36c-2.35 0-2.64.01-3.56.05-.91.04-1.54.19-2.08.4a4.2 4.2 0 0 0-1.52 1.03 4.2 4.2 0 0 0-1.03 1.52c-.21.54-.36 1.17-.4 2.08-.04.92-.05 1.21-.05 3.56s.01 2.64.05 3.56c.04.91.19 1.54.4 2.08.23.59.56 1.1 1.03 1.52.42.47.93.8 1.52 1.03.54.21 1.17.36 2.08.4.92.04 1.21.05 3.56.05s2.64-.01 3.56-.05c.91-.04 1.54-.19 2.08-.4a4.2 4.2 0 0 0 1.52-1.03 4.2 4.2 0 0 0 1.03-1.52c.21-.54.36-1.17.4-2.08.04-.92.05-1.21.05-3.56s-.01-2.64-.05-3.56c-.04-.91-.19-1.54-.4-2.08a4.2 4.2 0 0 0-1.03-1.52 4.2 4.2 0 0 0-1.52-1.03c-.54-.21-1.17-.36-2.08-.4-.92-.04-1.21-.05-3.56-.05zm0 1.68c2.31 0 2.58.01 3.49.05.84.04 1.3.18 1.6.3.4.15.69.34.99.64.3.3.49.59.64.99.12.3.26.76.3 1.6.04.91.05 1.18.05 3.49s-.01 2.58-.05 3.49c-.04.84-.18 1.3-.3 1.6-.15.4-.34.69-.64.99-.3.3-.59.49-.99.64-.3.12-.76.26-1.6.3-.91.04-1.18.05-3.49.05s-2.58-.01-3.49-.05c-.84-.04-1.3-.18-1.6-.3a2.67 2.67 0 0 1-.99-.64 2.67 2.67 0 0 1-.64-.99c-.12-.3-.26-.76-.3-1.6-.04-.91-.05-1.18-.05-3.49s.01-2.58.05-3.49c.04-.84.18-1.3.3-1.6.15-.4.34-.69.64-.99.3-.3.59-.49.99-.64.3-.12.76-.26 1.6-.3.91-.04 1.18-.05 3.49-.05z" })
	});
}
function IconGithub(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" })
	});
}
function IconArena(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7.2 7.2h3.2v3.2H7.2zm6.4 0h3.2v3.2h-3.2zM7.2 13.6h3.2v3.2H7.2zm6.4 0h3.2v3.2h-3.2z" })
	});
}
function IconMail(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.75,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3.5",
			y: "5.5",
			width: "17",
			height: "13",
			rx: "2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m4 7 8 6 8-6" })]
	});
}
var icons = {
	x: IconX,
	instagram: IconInstagram,
	github: IconGithub,
	arena: IconArena,
	mail: IconMail
};
function SocialLinks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		"aria-label": "Social",
		className: "rise-in flex items-center justify-center gap-1",
		style: { "--delay": "440ms" },
		children: socialLinks.map((link) => {
			const Icon = icons[link.icon];
			const external = link.href.startsWith("http");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: link.href,
				target: external ? "_blank" : void 0,
				rel: external ? "noreferrer noopener" : void 0,
				"aria-label": link.name,
				className: cn("relative flex size-11 items-center justify-center rounded-full text-fg-muted", "transition-[transform,color,background-color] duration-150 ease-out", "hover:bg-fg/5 hover:text-fg active:scale-[0.96]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5" })
			}, link.name);
		})
	});
}
function readTheme() {
	if (typeof document === "undefined") return "light";
	return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function applyTheme(theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
	try {
		localStorage.setItem("theme", theme);
	} catch {}
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setTheme(readTheme());
		setReady(true);
	}, []);
	const isDark = theme === "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: "outline",
		size: "icon",
		"aria-label": isDark ? "Switch to light theme" : "Switch to dark theme",
		onClick: () => {
			const next = isDark ? "light" : "dark";
			setTheme(next);
			applyTheme(next);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative size-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("absolute inset-0 flex items-center justify-center transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
					className: "size-4",
					strokeWidth: 1.75
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("flex items-center justify-center transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", !ready || !isDark ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
					className: "size-4",
					strokeWidth: 1.75
				})
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh w-full justify-center md:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex w-full max-w-md flex-col px-5 py-5 sm:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "mb-8 flex items-center justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rise-in",
							style: { "--delay": "0ms" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: profile.avatar,
								alt: profile.avatarAlt,
								width: 112,
								height: 112,
								fetchPriority: "high",
								className: "size-28 rounded-full object-cover outline outline-1 -outline-offset-1 outline-fg/15"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "rise-in mt-5 font-display text-3xl font-medium leading-tight tracking-tight text-fg",
							style: { "--delay": "40ms" },
							children: profile.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in mt-1.5 text-sm font-medium text-fg-muted",
							style: { "--delay": "80ms" },
							children: profile.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rise-in mt-4 max-w-xs font-display text-lg italic leading-snug text-fg",
							style: { "--delay": "120ms" },
							children: profile.bio
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "rise-in mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-fg-muted",
							style: { "--delay": "160ms" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "size-3.5",
										strokeWidth: 1.75,
										"aria-hidden": "true"
									}), profile.location]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "text-fg-subtle",
									children: "·"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.status })
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					"aria-label": "Featured links",
					className: "mt-8 flex flex-col gap-3",
					children: featuredLinks.map((link, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedLink, {
						link,
						index
					}, link.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialLinks, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShareButton, {})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "pt-10 text-center text-xs text-fg-subtle",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						profile.name
					]
				})
			]
		})
	});
}
//#endregion
export { Home as component };
