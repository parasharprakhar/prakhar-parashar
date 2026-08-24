import { SECTIONS } from "@/lib/record-data";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const IDS = SECTIONS.map((s) => s.id);

export function IndexRail() {
  const active = useScrollSpy(IDS);

  return (
    <>
      {/* Desktop: persistent left index rail */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 z-40 w-64 flex-col border-r border-hairline bg-surface/60 backdrop-blur-sm">
        <div className="flex items-start gap-3 px-6 py-6 border-b border-hairline">
          <span className="grid size-8 shrink-0 place-items-center border border-foreground font-mono text-[11px] tracking-[0.08em]">
            PP
          </span>
          <span className="font-mono text-[10px] uppercase leading-[1.6] tracking-[0.2em]">
            Operating
            <br />
            Record
          </span>
        </div>

        <nav aria-label="Sections" className="flex-1 overflow-y-auto py-5">
          <ol className="flex flex-col">
            {SECTIONS.map((s) => {
              const on = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`flex items-baseline gap-3 border-l-2 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                      on
                        ? "border-accent text-accent"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="num opacity-70">{s.num}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="border-t border-hairline px-6 py-5">
          <div className="flex items-center gap-2">
            <span className="pulse-dot size-1.5 rounded-full bg-accent" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Status: Active</span>
          </div>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Rev 2026.08 · BLR, IN
          </p>
        </div>
      </aside>

      {/* Mobile: sticky top bar with horizontally scrolling nav */}
      <header className="lg:hidden sticky top-0 z-40 border-b border-hairline bg-background/90 backdrop-blur-md">
        <div className="flex items-center justify-between gap-3 px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-7 shrink-0 place-items-center border border-foreground font-mono text-[10px]">
              PP
            </span>
            <span className="truncate font-mono text-[10px] uppercase tracking-[0.2em]">
              Operating Record
            </span>
          </div>
          <ThemeToggle />
        </div>
        <nav aria-label="Sections" className="border-t border-hairline">
          <ol className="flex overflow-x-auto">
            {SECTIONS.map((s) => {
              const on = active === s.id;
              return (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`flex items-baseline gap-1.5 border-b-2 px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] ${
                      on ? "border-accent text-accent" : "border-transparent text-muted-foreground"
                    }`}
                  >
                    <span className="num opacity-70">{s.num}</span>
                    <span>{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </header>
    </>
  );
}
