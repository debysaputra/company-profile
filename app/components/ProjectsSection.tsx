import { projects } from '../data/projects'

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-violet-400 text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            ⚡ Vibe Coding
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Vibe Coded Projects
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            Proyek-proyek ini dibangun dengan pendekatan <span className="text-violet-400 font-medium">vibe coding</span> —
            kolaborasi antara intuisi developer dan kecerdasan AI untuk menciptakan
            solusi nyata lebih cepat.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-[#111111] rounded-2xl border border-white/[0.08] overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col"
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="text-white font-semibold text-xl leading-snug">
                    {project.title}
                  </h3>
                  {project.vibeCoded && (
                    <span className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/30 tracking-wide">
                      ⚡ Vibe Coded
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono bg-white/[0.05] text-zinc-400 rounded-md border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2.5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-colors border border-white/[0.08]"
                  >
                    <GitHubIcon />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 hover:text-indigo-300 rounded-lg text-sm font-medium transition-colors border border-indigo-500/30"
                  >
                    <ExternalLinkIcon />
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
