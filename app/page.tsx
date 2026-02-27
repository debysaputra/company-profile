import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] relative">

      {/* Ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/[0.04] rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/[0.04] rounded-full blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/[0.08] py-8 text-center">
        <p className="text-zinc-600 text-sm font-mono">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </div>
  )
}
