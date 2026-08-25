const rounds = [
  {
    round: "1",
    title: "AI SCREENING",
    judges: "AUTOMATED",
    description:
      "A quality check on your written submission — making sure your problem and solution are clearly explained. Basic quality filter, not hard to pass.",
  },
  {
    round: "2",
    title: "PEER JUDGING",
    judges: "STUDENT PANELISTS",
    description:
      "Panelists review submissions using our full rubric and select the top 10 projects to advance.",
  },
  {
    round: "3",
    title: "FINAL ROUND",
    judges: "PROFESSIONAL JUDGES + STUDENTS",
    description:
      "The top 10 submissions get a closer, more thorough review. Judges select the Top 3 overall winners plus 2 category-specific awards.",
  },
];

const rubric = [
  {
    criterion: "COMMUNITY RELEVANCE",
    weight: "25%",
    what: "Is this a real, specific problem the team has direct knowledge of?",
  },
  {
    criterion: "IMPACT POTENTIAL",
    weight: "20%",
    what: "If this worked at scale, would it meaningfully help people?",
  },
  {
    criterion: "TECHNICAL EXECUTION",
    weight: "20%",
    what: "Does it work? Is it reasonably well-built for the time given?",
  },
  {
    criterion: "CREATIVITY",
    weight: "15%",
    what: "Is the approach novel, or a copy of something obvious?",
  },
  {
    criterion: "PRESENTATION & CLARITY",
    weight: "10%",
    what: "Can the team clearly explain the problem and solution?",
  },
  {
    criterion: "ACCESSIBILITY",
    weight: "10%",
    what: "Could the people affected actually use this?",
  },
];

export default function Judging() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_005 / JUDGING
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          JUDGING
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          fair, thorough, focused on impact
        </p>

        {/* Intro */}
        <p className="font-mono text-base text-gray leading-relaxed mb-12 max-w-2xl font-semibold">
          Every project goes through three rounds of judging — designed to be
          fair, thorough, and genuinely focused on impact, not just technical
          polish.
        </p>

        {/* Rounds */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            JUDGING ROUNDS
          </h2>
          <div className="space-y-4">
            {rounds.map((round, i) => (
              <div
                key={round.round}
                className={`p-6 ${i === 0 ? "rough-border tilt-left" : i === 1 ? "rough-border" : "dashed-border"}`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-hand text-3xl text-accent">
                    {round.round}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-off-white mb-1">
                      {round.title}
                    </h3>
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim mb-2 font-semibold">
                      {round.judges}
                    </p>
                    <p className="font-mono text-sm text-gray font-semibold">
                      {round.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rubric */}
        <div>
          <div className="flex items-end gap-4 mb-2">
            <h2 className="font-display text-2xl font-bold text-off-white">
              JUDGING RUBRIC
            </h2>
          </div>
          <p className="font-hand text-accent text-lg mb-8">
            published openly so you know what we&apos;re looking for
          </p>

          {/* Desktop table */}
          <div className="hidden sm:block">
            <div className="border-t-2 border-off-white pt-4">
              {rubric.map((row, i) => (
                <div
                  key={row.criterion}
                  className={`py-4 border-b border-grid flex items-start gap-6 ${i % 2 === 0 ? "" : "tilt-slight"}`}
                >
                  <span className="font-mono text-[11px] text-dim w-8 shrink-0 font-semibold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="font-display font-bold text-off-white text-sm">
                      {row.criterion}
                    </div>
                    <div className="font-mono text-sm text-gray mt-1 font-semibold">
                      {row.what}
                    </div>
                  </div>
                  <span className="font-mono text-sm text-accent font-bold">
                    {row.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile cards */}
          <div className="sm:hidden space-y-4">
            {rubric.map((row, i) => {
              const isPaper = i % 2 === 0;
              return (
                <div
                  key={row.criterion}
                  className={`p-4 ${isPaper ? "paper-cut-sm" : "rough-border"}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-display font-bold text-sm ${isPaper ? "text-near-black" : "text-off-white"}`}>
                      {row.criterion}
                    </h3>
                    <span className="font-mono text-sm text-accent font-bold">
                      {row.weight}
                    </span>
                  </div>
                  <p className={`font-mono text-sm font-semibold ${isPaper ? "text-near-black/70" : "text-gray"}`}>{row.what}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
