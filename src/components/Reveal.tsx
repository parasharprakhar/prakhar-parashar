import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Reveal is fail-safe by design:
 * - Server/first paint renders fully visible (no hidden pre-state in markup).
 * - After mount, JS arms the hidden pre-state and an IntersectionObserver.
 * - A 2.5s safety timeout forces everything visible even if the observer never fires.
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const show = () => {
      el.dataset["revealArmed"] = "shown";
    };

    if (reduce || typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    // Already in view at mount? Never hide it.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
      show();
      return;
    }

    el.dataset["revealArmed"] = "pending";
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(el);

    // Safety net: nothing stays invisible.
    const timer = window.setTimeout(() => {
      show();
      observer.disconnect();
    }, 2500);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <Tag ref={ref} data-reveal="" className={className}>
      {children}
    </Tag>
  );
}
