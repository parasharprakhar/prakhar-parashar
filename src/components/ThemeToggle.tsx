import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "auto";
const KEY = "operating-record-theme";
const MODES: Mode[] = ["light", "dark", "auto"];

function apply(mode: Mode) {
  const prefersDark =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = mode === "dark" || (mode === "auto" && prefersDark);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("auto");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY) as Mode | null;
    const initial = stored && MODES.includes(stored) ? stored : "auto";
    setMode(initial);
    apply(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    apply(mode);
    window.localStorage.setItem(KEY, mode);
    if (mode !== "auto") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => apply("auto");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode, mounted]);

  return (
    <div
      role="group"
      aria-label="Colour theme"
      className="inline-flex border border-hairline bg-surface/70 backdrop-blur-sm"
    >
      {MODES.map((m) => {
        const active = mounted && mode === m;
        return (
          <button
            key={m}
            type="button"
            aria-pressed={active}
            onClick={() => setMode(m)}
            className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5 transition-colors ${
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {m === "light" ? "Lt" : m === "dark" ? "Dk" : "Auto"}
          </button>
        );
      })}
    </div>
  );
}
