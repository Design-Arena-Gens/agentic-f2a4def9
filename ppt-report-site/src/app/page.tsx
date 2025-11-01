export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
              Gandhi Aided Primary School
            </p>
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              2-Day Mathematics Kit Training Report
            </h1>
            <p className="text-sm text-slate-500 sm:text-base">
              Facilitated by Mrs. Jayashree | Participants: Headmistress, Assistant Teacher, Senior Resource Person
            </p>
          </div>
          <a
            href="/api/report"
            className="rounded-full bg-sky-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
          >
            Download PPT Report
          </a>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-[2fr,1fr]">
        <section className="space-y-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm backdrop-blur">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Training Overview</h2>
            <p className="leading-relaxed text-slate-600">
              The Mathematics Kit training spanned two intensive days focused on equipping key academic leaders with
              hands-on strategies for activity-based learning. Emphasis was placed on aligning manipulatives with the
              existing curriculum, building confident facilitation skills, and drafting an implementation roadmap for
              joyful mathematics classrooms.
            </p>
          </div>

          <div className="grid gap-6 rounded-2xl bg-slate-50 p-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Day 1 Focus</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Exploring Kit Components</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Orientation to number sense and geometry tools</li>
                <li>• Demonstrations of activity-based facilitation</li>
                <li>• Mapping concepts to Primary Mathematics syllabus</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Day 2 Focus</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">Classroom Integration</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>• Collaborative lesson design studio</li>
                <li>• Assessment and reflection techniques</li>
                <li>• Drafting a phased rollout plan</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Key Outcomes</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
              <li>
                • Leadership team articulated clear benchmarks for manipulative-driven teaching across grades III–V.
              </li>
              <li>• Established weekly Maths Lab schedule with monitoring responsibilities.</li>
              <li>• Captured evidence-based reflection framework to track learner progress.</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-dashed border-sky-200 bg-sky-50/80 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Next Steps</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>• Launch peer observation cycle to reinforce facilitation skills.</li>
              <li>• Convene monthly review with Mrs. Jayashree to analyse classroom evidence.</li>
              <li>• Maintain shared repository for lesson artefacts and learner worksheets.</li>
            </ul>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">Participants</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Trainer</span>
                Mrs. Jayashree, Mathematics Resource Coach
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Trainee 1</span>
                Headmistress
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Trainee 2</span>
                Assistant Teacher
              </li>
              <li>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Trainee 3</span>
                Senior Resource Person
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur">
            <h3 className="text-lg font-semibold text-slate-900">How to Use</h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-600">
              <li>1. Review the summary on this page for quick highlights.</li>
              <li>2. Click “Download PPT Report” to get the ready-to-present slides.</li>
              <li>3. Share the presentation with school management and stakeholders.</li>
            </ol>
          </div>
        </aside>
      </main>
    </div>
  );
}
