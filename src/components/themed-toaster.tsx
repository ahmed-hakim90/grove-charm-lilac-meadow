import { useEffect, useState } from "react";
import { Toaster } from "sonner";

type Theme = "light" | "dark";

export function ThemedToaster() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const sync = () =>
      setTheme(root.classList.contains("dark") ? "dark" : "light");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <Toaster
      theme={theme}
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast:
            "font-sans bg-bg-elevated text-fg shadow-card border-0 rounded-xl",
          title: "text-fg",
        },
      }}
    />
  );
}
