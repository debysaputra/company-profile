export type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github: string
  live: string
  gradient: string
  vibeCoded?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sesuap Nasi',
    description: 'Platform data analytics & telekomunikasi — temukan lokasi cell tower via MCC/MNC/LAC/CID, cek informasi perangkat lewat IMEI, lacak geolokasi IP, dan visualisasikan topologi jaringan secara interaktif.',
    tags: ['Next.js', 'Data Analytics', 'Geolocation', 'IMEI', 'IP Checker'],
    github: '#',
    live: 'https://sesuapnasi.vercel.app/',
    gradient: 'from-cyan-500 to-blue-600',
    vibeCoded: true,
  },
  {
    id: 2,
    title: 'Undangan Digital',
    description: 'Platform pembuatan undangan pernikahan digital — buat, kustomisasi, dan preview undangan secara real-time. Solusi modern pengganti undangan cetak untuk pasangan Indonesia.',
    tags: ['Next.js', 'MongoDB', 'Undangan Digital', 'Real-time Preview'],
    github: '#',
    live: 'https://invitation-eight-tau.vercel.app/',
    gradient: 'from-pink-500 to-rose-600',
    vibeCoded: true,
  },
  {
    id: 3,
    title: 'Portofolio',
    description: 'Website portofolio ini sendiri — showcase proyek-proyek vibe coding yang dibangun dengan kolaborasi AI. Menampilkan projects, tech stack, dan kontak.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/debysaputra/company-profile',
    live: '#',
    gradient: 'from-violet-500 to-indigo-600',
    vibeCoded: true,
  },
]
