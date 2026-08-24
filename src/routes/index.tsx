import { createFileRoute } from "@tanstack/react-router";

import { IndexRail } from "@/components/IndexRail";
import { Reveal } from "@/components/Reveal";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  CASES,
  CERTIFICATIONS,
  LEDGER,
  LINKS,
  RECOGNITION,
  RECORD,
  SIGNALS,
  SYSTEMS,
} from "@/lib/record-data";

const TITLE = "Prakhar Parashar — Operating Record";
const DESCRIPTION =
  "Operating record of Prakhar Parashar, Senior SAP & Intelligent Automation Leader: 13+ years across SAP S/4HANA, Global Business Services, Blue Prism RPA and AI-supported automation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: OperatingRecord,
});

function SectionHead({ num, title, intro }: { num: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 border-b border-hairline pb-6 md:flex-row md:items-end md:justify-between">
      <div className="min-w-0">
        <p className="label num">Section {num}</p>
        <h2 className="mt-2 font-display text-3xl leading-tight tracking-tight md:text-4xl">
          {title}
        </h2>
      </div>
      {intro ? (
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{intro}</p>
      ) : null}
    </Reveal>
  );
}

function ActionLink({
  href,
  children,
  primary = false,
  external = true,
}: {
  href: string;
  children: string;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external && href.startsWith("http")
        ? { target: "_blank", rel: "noreferrer noopener" }
        : {})}
      className={`inline-flex items-center border px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
        primary
          ? "border-accent bg-accent text-accent-foreground hover:bg-foreground hover:border-foreground hover:text-background"
          : "border-hairline text-foreground hover:border-foreground"
      }`}
    >
      {children}
    </a>
  );
}

function Stamp({ children }: { children: string }) {
  return (
    <span className="inline-flex shrink-0 items-center border border-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
      {children}
    </span>
  );
}

function OperatingRecord() {
  return (
    <div className="min-h-screen">
      <div className="grain" aria-hidden="true" />
      <IndexRail />

      <div className="hidden lg:block fixed right-6 top-6 z-50">
        <ThemeToggle />
      </div>

      <main className="lg:pl-64">
        <div className="mx-auto w-full max-w-4xl px-5 md:px-10">
          {/* 00 COVER */}
          <section id="cover" className="scroll-mt-28 py-16 md:py-24">
            <Reveal>
              <p className="label num">
                Operating Record · Rev 2026.08 · Compiled from 13 years of logs
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Prakhar <span className="italic text-accent">Parashar.</span>
              </h1>
              <p className="mt-6 max-w-2xl font-display text-lg italic leading-snug text-muted-foreground md:text-xl">
                Senior SAP &amp; Intelligent Automation Leader — Digital Transformation, Global
                Business Services
              </p>
              <p className="mt-7 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                High-impact transformation leader with 13+ years of experience, including 6+ years
                across SAP-driven operations, Global Business Services, and intelligent automation.
                Builds RPA and AI-supported systems — Blue Prism, Decipher, Nanonets, GenAI — that
                hold up under real production load, and has led SAP S/4HANA migrations at global
                scale without missing a beat.
              </p>
            </Reveal>

            <Reveal
              delay={80}
              className="mt-12 grid grid-cols-1 border border-hairline sm:grid-cols-3"
            >
              {SIGNALS.map((s, i) => (
                <div
                  key={s.label}
                  className={`min-w-0 p-5 ${
                    i > 0 ? "border-t border-hairline sm:border-t-0 sm:border-l" : ""
                  }`}
                >
                  <p className="label">{s.label}</p>
                  <p className="num mt-3 font-display text-xl leading-tight">{s.value}</p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={140} className="mt-10 flex flex-wrap gap-3">
              <ActionLink href={LINKS.cv} primary>
                Download CV
              </ActionLink>
              <ActionLink href={LINKS.email} external={false}>
                Email
              </ActionLink>
              <ActionLink href={LINKS.linkedin}>LinkedIn</ActionLink>
              <ActionLink href={LINKS.github}>GitHub</ActionLink>
            </Reveal>

            <Reveal delay={180} className="mt-10 border-t border-hairline pt-5">
              <p className="font-mono text-[10px] uppercase leading-[1.9] tracking-[0.16em] text-muted-foreground">
                Master&apos;s — Banaras Hindu University, 2012 · B.A. — VBS Purvanchal University,
                2010 · Available weekdays 12–2PM &amp; 6PM–2AM IST
              </p>
            </Reveal>
          </section>

          {/* 01 LEDGER */}
          <section id="ledger" className="scroll-mt-28 border-t border-hairline py-16 md:py-20">
            <SectionHead
              num="01"
              title="Ledger"
              intro="Every figure below is an outcome, not an estimate — measured before and after the change went live."
            />
            <Reveal className="overflow-hidden border border-hairline">
              <table className="w-full table-fixed border-collapse text-left">
                <caption className="sr-only">Measured operating outcomes</caption>
                <thead>
                  <tr className="border-b border-hairline bg-surface/60">
                    <th scope="col" className="label w-[38%] p-3 font-normal">
                      Metric
                    </th>
                    <th scope="col" className="label hidden w-[36%] p-3 font-normal sm:table-cell">
                      Context
                    </th>
                    <th scope="col" className="label p-3 text-right font-normal">
                      Reading
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LEDGER.map((row) => (
                    <tr key={row.metric} className="border-b border-hairline last:border-b-0">
                      <th
                        scope="row"
                        className="min-w-0 p-3 align-top text-sm font-medium leading-snug"
                      >
                        {row.metric}
                        <span className="mt-1 block text-xs leading-snug text-muted-foreground sm:hidden">
                          {row.context}
                        </span>
                      </th>
                      <td className="hidden min-w-0 p-3 align-top text-xs leading-relaxed text-muted-foreground sm:table-cell">
                        {row.context}
                      </td>
                      <td className="num p-3 align-top text-right font-mono text-sm leading-snug text-accent">
                        {row.reading}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </section>

          {/* 02 RECORD */}
          <section id="record" className="scroll-mt-28 border-t border-hairline py-16 md:py-20">
            <SectionHead num="02" title="Record" intro="Chronological, oldest entry first." />
            <ol className="flex flex-col">
              {RECORD.map((e) => (
                <Reveal
                  as="li"
                  key={e.role}
                  className="grid grid-cols-1 gap-4 border-t border-hairline py-7 first:border-t-0 first:pt-0 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8"
                >
                  <div className="min-w-0">
                    <p className="label num">{e.dates}</p>
                    {e.active ? (
                      <span className="mt-3 inline-flex items-center gap-2 border border-accent px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        <span
                          className="pulse-dot size-1.5 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        Active
                      </span>
                    ) : null}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl leading-snug tracking-tight">{e.role}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-data">
                      {e.org}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex min-w-0 gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-2 size-1 shrink-0 bg-accent"
                            aria-hidden="true"
                          />
                          <span className="min-w-0">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* 03 CASES */}
          <section id="cases" className="scroll-mt-28 border-t border-hairline py-16 md:py-20">
            <SectionHead num="03" title="Case Files" intro="Four files, opened and documented." />
            <div className="flex flex-col gap-6">
              {CASES.map((c) => (
                <Reveal
                  as="article"
                  key={c.ref}
                  className="border border-hairline bg-surface/40 p-5 md:p-7"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-hairline pb-4">
                    <div className="min-w-0">
                      <p className="label num">
                        {c.ref} · {c.year}
                      </p>
                      <h3 className="mt-2 font-display text-xl leading-snug tracking-tight">
                        {c.title}
                      </h3>
                    </div>
                    <Stamp>{c.stamp}</Stamp>
                  </div>
                  <dl className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                    {(
                      [
                        ["Problem", c.problem],
                        ["Response", c.response],
                        ["Result", c.result],
                      ] as const
                    ).map(([k, v]) => (
                      <div key={k} className="min-w-0">
                        <dt className="label">{k}</dt>
                        <dd
                          className={`mt-2 text-sm leading-relaxed ${
                            k === "Result" ? "text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 04 SYSTEMS */}
          <section id="systems" className="scroll-mt-28 border-t border-hairline py-16 md:py-20">
            <SectionHead
              num="04"
              title="Systems"
              intro="Grouped by cluster, in the order they get used."
            />
            <div className="grid grid-cols-1 gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
              {SYSTEMS.map((group, i) => (
                <Reveal
                  key={group.cluster}
                  delay={i * 60}
                  className="min-w-0 bg-background p-5"
                >
                  <h3 className="label text-accent">{group.cluster}</h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="min-w-0 text-sm leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 05 ATTESTATIONS */}
          <section
            id="attestations"
            className="scroll-mt-28 border-t border-hairline py-16 md:py-20"
          >
            <SectionHead num="05" title="Attestations" intro="Certified, then recognised." />
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              {(
                [
                  ["Certifications", CERTIFICATIONS],
                  ["Recognition", RECOGNITION],
                ] as const
              ).map(([heading, rows]) => (
                <Reveal key={heading} className="min-w-0">
                  <h3 className="label border-b border-hairline pb-3 text-accent">
                    {heading} <span className="num">({rows.length})</span>
                  </h3>
                  <ul className="flex flex-col">
                    {rows.map((r) => (
                      <li
                        key={r.name}
                        className="flex min-w-0 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-hairline py-3"
                      >
                        <span className="min-w-0 text-sm leading-snug">{r.name}</span>
                        <span className="num shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          {r.issuer} · {r.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>

          {/* 06 ACCESS */}
          <section id="access" className="scroll-mt-28 border-t border-hairline py-16 md:py-20">
            <SectionHead num="06" title="Access" />
            <Reveal>
              <p className="max-w-2xl font-display text-xl italic leading-snug md:text-2xl">
                Open to conversations about RPA strategy, operational excellence, and AI-driven
                process transformation — anywhere the mandate is to make a system that was manual,
                quietly stop being manual.
              </p>
            </Reveal>
            <Reveal delay={80} className="mt-9 flex flex-wrap gap-3">
              <ActionLink href={LINKS.email} external={false} primary>
                Email
              </ActionLink>
              <ActionLink href={LINKS.linkedin}>LinkedIn</ActionLink>
              <ActionLink href={LINKS.github}>GitHub</ActionLink>
              <ActionLink href={LINKS.cv}>Download CV</ActionLink>
            </Reveal>
          </section>

          <footer className="flex flex-col gap-2 border-t border-hairline py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              © 2026 Prakhar Parashar — Operating Record
            </p>
            <p className="num font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Compiled 2012–2026 · Bengaluru, India
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
