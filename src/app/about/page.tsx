export default function About() {
  return (
    <section className="min-h-screen px-4 sm:px-8 pt-24 pb-16">
      <div className="max-w-4xl mx-auto md:ml-24 lg:ml-40">
        {/* Issue label */}
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray mb-6 font-semibold">
          PAGE_002 / ABOUT
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-bold text-off-white mb-2">
          ABOUT
        </h1>
        <p className="font-hand text-2xl text-accent mb-16 tilt-left">
          what we&apos;re doing and why
        </p>

        {/* Mission */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            OUR MISSION
          </h2>
          <p className="font-mono text-base text-gray leading-relaxed max-w-2xl font-semibold">
            Neighborhood Hacks is a global hackathon where high schoolers use
            technology to solve real problems in their own communities, not
            hypothetical ones. We believe the most impactful builders start by
            looking at what&apos;s broken around them and building the fix. Over
            one week, students from every continent design, build, and pitch
            solutions to challenges they&apos;ve personally witnessed at home,
            then join a global community of young builders doing the same thing,
            everywhere else.
          </p>
        </div>

        {/* Origin story — paper cutout */}
        <div className="paper-cut p-8 md:p-12 mb-16 tilt-right">
          <h2 className="font-display text-2xl font-bold text-near-black mb-6">
            WHY WE STARTED THIS
          </h2>
          <p className="font-mono text-base text-near-black/80 leading-relaxed mb-4 font-semibold">
            Caleb and Kian started Neighborhood Hacks because we noticed
            something: most hackathons ask students to build for hypothetical
            users or abstract problems. We wanted to flip that.
          </p>
          <p className="font-mono text-base text-near-black/80 leading-relaxed font-semibold">
            We wanted a hackathon where a student in a flood-prone town, a
            student worried about food access, or a student frustrated by their
            local bus schedule could all build something that actually mattered:
            to people they actually know.
          </p>
        </div>

        {/* Who this is for */}
        <div className="mb-16">
          <h2 className="font-display text-2xl font-bold text-off-white mb-6">
            WHO THIS IS FOR
          </h2>
          <p className="font-mono text-base text-gray leading-relaxed max-w-2xl font-semibold">
            Neighborhood Hacks is open to high schoolers worldwide, regardless
            of experience level. You don&apos;t need to have coded before, you
            need a real problem you care about and the willingness to try
            building something for it.
          </p>
        </div>

        {/* Values — asymmetric grid */}
        <div>
          <h2 className="font-display text-2xl font-bold text-off-white mb-8">
            WHAT WE BELIEVE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rough-border p-6 tilt-left">
              <h3 className="font-display font-bold text-off-white mb-2">
                LOCAL KNOWLEDGE IS EXPERT KNOWLEDGE
              </h3>
              <p className="font-mono text-sm text-gray font-semibold">
                No one understands your community&apos;s problems better than
                the people who live there.
              </p>
            </div>
            <div className="paper-cut-sm p-6 tilt-right">
              <h3 className="font-display font-bold text-near-black mb-2">
                TECHNOLOGY SHOULD SERVE PEOPLE
              </h3>
              <p className="font-mono text-sm text-near-black/70 font-semibold">
                The best projects start with a human problem, not a tech demo.
              </p>
            </div>
            <div className="dashed-border p-6">
              <h3 className="font-display font-bold text-off-white mb-2">
                ACCESSIBLE MEANS ACCESSIBLE
              </h3>
              <p className="font-mono text-sm text-gray font-semibold">
                Free to participate. Beginner-friendly. Designed for every
                timezone and skill level.
              </p>
            </div>
            <div className="rough-border p-6 tilt-slight">
              <h3 className="font-display font-bold text-off-white mb-2">
                COMMUNITY OVER COMPETITION
              </h3>
              <p className="font-mono text-sm text-gray font-semibold">
                We&apos;re building a global network of young people who care
                about their communities — not just a leaderboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
