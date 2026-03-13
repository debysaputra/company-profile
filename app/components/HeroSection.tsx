import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16"
    >
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center py-20">

        {/* Text Side */}
        <div className="order-2 md:order-1 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
              Hello, I&apos;m
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Artupasybed
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-400 font-light mt-1">
              Full Stack Developer
            </p>
          </div>

          <p className="text-zinc-400 text-base leading-relaxed max-w-md">
            Passionate developer yang senang membangun produk digital yang
            indah dan fungsional. Spesialis dalam web modern dengan teknologi
            terkini.
          </p>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Lihat Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-indigo-400 hover:text-indigo-400 text-zinc-300 font-medium rounded-lg transition-colors text-sm"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4 border-t border-white/[0.08] mt-2">
            <div>
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-zinc-500 text-xs mt-0.5">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">20+</p>
              <p className="text-zinc-500 text-xs mt-0.5">Project Selesai</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-zinc-500 text-xs mt-0.5">Teknologi</p>
            </div>
          </div>
        </div>

        {/* Photo Side */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-2xl scale-110" />

            {/* Outer decorative ring */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full" />
              </div>
              <div className="absolute inset-3 rounded-full border border-white/[0.08]" />

              {/* Photo */}
              <div className="absolute inset-5 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                <Image
                  src="/img.png"
                  alt="Profile Photo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
