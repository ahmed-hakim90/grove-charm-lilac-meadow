import type { CSSProperties } from "react";
import { Link2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

function copyText(text: string): boolean {
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

export function ShareButton() {
  return (
    <Button
      type="button"
      variant="ghost"
      className="rise-in text-fg-muted"
      style={{ "--delay": "480ms" } as CSSProperties}
      onClick={async () => {
        const url = window.location.href;
        try {
          if (navigator.clipboard?.writeText) {
            await navigator.clipboard.writeText(url);
          } else if (!copyText(url)) {
            throw new Error("copy failed");
          }
          toast.success("Link copied");
        } catch {
          if (copyText(url)) {
            toast.success("Link copied");
            return;
          }
          toast.error("Could not copy the link");
        }
      }}
    >
      <Link2 strokeWidth={1.75} />
      Copy profile link
    </Button>
  );
}
