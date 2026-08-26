const tracks = [
  {
    num: "01",
    title: "HEALTH & WELLBEING",
    description: "Physical or mental health access, awareness, support",
  },
  {
    num: "02",
    title: "ENVIRONMENT & SUSTAINABILITY",
    description: "Climate, waste, resource access",
  },
  {
    num: "03",
    title: "EDUCATION & ACCESS",
    description: "Learning tools, information access, tutoring",
  },
  {
    num: "04",
    title: "SAFETY & EMERGENCY RESPONSE",
    description: "Early warning, safety reporting, crisis response",
  },
  {
    num: "05",
    title: "CIVIC ENGAGEMENT & CONNECTION",
    description: "Local government, community organizing, connection",
  },
  {
    num: "06",
    title: "ACCESSIBILITY & INCLUSION",
    description: "Solutions for disabled users, language access, low-resource contexts",
  },
];

type CardStyle = "paper" | "rough" | "dashed";

function getCardStyle(index: number): CardStyle {
  const mod = index % 3;
  if (mod === 0) return "paper";
  if (mod === 1) return "rough";
  return "dashed";
}

function cardClasses(style: CardStyle): string {
  if (style === "paper") return "paper-cut-sm p-6 card-hover";
  if (style === "rough") return "rough-border p-6 card-hover tilt-right";
  return "dashed-border p-6 card-hover";
}

function trackNumColor(style: CardStyle): string {
  return style === "paper" ? "text-near-black/50" : "text-gray";
}

function titleColor(style: CardStyle): string {
  return style === "paper" ? "text-near-black" : "text-off-white";
}

function descColor(style: CardStyle): string {
  return style === "paper" ? "text-near-black/70" : "text-dim";
}

export default function Challenge() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_003 / THE CHALLENGE
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          THE CHALLENGE
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          solve something real
        </p>

        {/* Main Prompt — paper cutout */}
        <div className="paper-cut p-8 md:p-12 mb-12 text-center">
          <h2 className="font-display text-2xl font-bold text-near-black mb-4">
            THE PROMPT
          </h2>
          <p className="font-display text-xl font-bold text-near-black/60">
            TO BE ANNOUNCED
          </p>
        </div>

        {/* Submission Question — rough border */}
        <div className="rough-border p-8 md:p-12 mb-12 tilt-right">
          <h2 className="font-display text-2xl font-bold text-off-white mb-4">
            REQUIRED SUBMISSION QUESTION
          </h2>
          <p className="font-mono text-base text-gray leading-relaxed mb-4 font-semibold">
            As part of your submission, every team will answer:
          </p>
          <blockquote className="border-l-4 border-accent pl-6 py-2 mb-4">
            <p className="font-display text-lg text-off-white italic">
              &ldquo;What is the specific problem, and how do you know it&apos;s
              real?&rdquo;
            </p>
          </blockquote>
          <p className="font-mono text-base text-gray leading-relaxed font-semibold">
            Tell us what you&apos;ve observed, who you&apos;ve talked to, or
            data you&apos;ve found. This is the heart of your project, so start
            here before you start coding.
          </p>
        </div>

        {/* Optional Tracks */}
        <div className="mb-12">
          <div className="flex items-end gap-4 mb-8">
            <h2 className="font-display text-2xl font-bold text-off-white">
              POSSIBLE TRACKS
            </h2>
            <span className="font-hand text-accent text-lg">
              (for inspiration)
            </span>
          </div>
          <p className="font-mono text-sm text-gray mb-8 font-semibold">
            Not required — just here to spark ideas. Build for whichever fits
            your problem best, or ignore these entirely.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track, i) => {
              const style = getCardStyle(i);
              return (
                <div key={track.title} className={cardClasses(style)}>
                  <div
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] mb-2 font-semibold ${trackNumColor(style)}`}
                  >
                    TRACK_{track.num}
                  </div>
                  <h3
                    className={`font-display font-bold mb-2 text-sm ${titleColor(style)}`}
                  >
                    {track.title}
                  </h3>
                  <p className={`font-mono text-sm font-semibold ${descColor(style)}`}>
                    {track.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reminder — handwritten note */}
        <div className="p-6 border-l-4 border-accent">
          <p className="font-hand text-xl text-off-white">
            remember: find the problem first, then build
          </p>
        </div>
      </div>
    </section>
  );
}
