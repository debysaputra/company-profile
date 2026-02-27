import { skillCategories } from '../data/skills'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-indigo-400 text-sm font-mono font-medium mb-3 tracking-widest uppercase">
            What I Use
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Tech Stack
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Teknologi yang saya gunakan untuk membangun produk digital yang cepat dan skalabel.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="bg-[#111111] rounded-2xl border border-white/[0.08] p-6 hover:border-white/[0.15] transition-colors"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/[0.08]">
                <span className="text-2xl">{category.emoji}</span>
                <h3 className="text-white font-semibold text-lg">{category.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/[0.05] text-zinc-300 rounded-lg border border-white/[0.08] hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
