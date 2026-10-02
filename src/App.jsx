import React, { useState, useEffect } from 'react';
import { BriefcaseBusiness, Code2, Download, Github, Mail, MapPin, Phone, ShieldCheck, Sparkles, UserRound, ArrowRight, Linkedin, Cpu, Network, Wrench, ChevronRight, CheckCircle2, ExternalLink, Menu, X, Star, Briefcase, FolderKanban } from 'lucide-react';

const navItems = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' }
];

const stats = [
  { value: '3+', label: 'Years Experience', accent: 'from-sky-500 to-cyan-400' },
  { value: '50+', label: 'Users Supported', accent: 'from-violet-500 to-purple-400' },
  { value: 'FTTH', label: 'Field Specialist', accent: 'from-emerald-500 to-teal-400' },
  { value: 'Django', label: 'Full-Stack', accent: 'from-amber-500 to-orange-400' }
];

const skillGroups = [
  {
    title: 'Fiber & FTTH',
    icon: Network,
    items: ['FTTH installation', 'Fiber splicing', 'Cable routing', 'Signal-loss testing', 'Last-mile connectivity'],
    color: 'sky'
  },
  {
    title: 'Networking & Tools',
    icon: Wrench,
    items: ['IP networking', 'TCP/IP', 'Routing & switching', 'VLANs', 'Network troubleshooting'],
    color: 'violet'
  },
  {
    title: 'Software Development',
    icon: Code2,
    items: ['Django', 'Python', 'JavaScript', 'MySQL', 'REST APIs', 'Git/GitHub'],
    color: 'emerald'
  },
  {
    title: 'Leadership & Problem Solving',
    icon: ShieldCheck,
    items: ['Root cause analysis', 'Fault isolation', 'Documentation', 'System reliability', 'Cross-functional teamwork'],
    color: 'amber'
  }
];

const experiences = [
  {
    role: 'Field / Industrial Trainee',
    company: 'TTCL (Tanzania Telecommunications Corporation)',
    period: '2024',
    icon: Network,
    highlight: 'FTTH Deployment Expert',
    description: [
      'Installed, spliced, and tested FTTH last-mile connections with precision signal-loss testing for subscriber endpoints.',
      'Diagnosed and resolved network and telephony faults across transmission links to reduce troubleshooting turnaround.',
      'Maintained detailed infrastructure documentation and site records to support reliability and operational continuity.'
    ],
    skills: ['FTTH', 'Fiber Splicing', 'Network Diagnostics', 'Field Operations']
  },
  {
    role: 'Field / Industrial Trainee',
    company: 'CRDB Bank',
    period: '2023',
    icon: BriefcaseBusiness,
    highlight: 'Enterprise Support Leader',
    description: [
      'Provided first-line technical support to 50+ corporate users while maintaining 95% service uptime.',
      'Resolved LAN, router, printer, VPN, and domain login faults to restore network stability across branches.',
      'Managed IT asset records, user account resets, OS updates, and local hardware troubleshooting with strong service discipline.'
    ],
    skills: ['Enterprise Support', 'Network Troubleshooting', 'IT Asset Management', 'VPN/Security']
  },
  {
    role: 'Software Developer',
    company: 'Zalongwa Technologies Ltd',
    period: '2022 – 2024',
    icon: Code2,
    highlight: 'Full-Stack Web Developer',
    description: [
      'Built and maintained full-stack web applications using Django backend and JavaScript frontend for business use cases.',
      'Designed and optimized database schemas, RESTful APIs, and backend logic to improve performance and reliability.',
      'Used Git/GitHub, testing, and deployment workflows to ensure clean, stable delivery with minimal disruption.'
    ],
    skills: ['Django', 'JavaScript', 'MySQL', 'REST APIs', 'Git/Deployment']
  }
];

const education = [
  {
    title: 'Bachelor of Engineering in Telecommunication Systems',
    school: 'Mbeya University of Science and Technology (MUST)',
    period: '2026',
    location: 'Mbeya, Tanzania',
    details: ['Optical Fiber Communication', 'Mobile Communication', 'Embedded Systems', 'Network Security'],
    accent: 'from-sky-500 to-cyan-400'
  },
  {
    title: 'Advanced Certificate of Secondary Education (A-Level) — PCM',
    school: 'Magufuli Secondary School',
    period: '2022',
    location: 'Geita, Tanzania',
    details: [],
    accent: 'from-violet-500 to-purple-400'
  },
  {
    title: 'Certificate of Secondary Education (O-Level)',
    school: 'Mang\'ola Secondary School',
    period: '2019',
    location: 'Karatu, Arusha, Tanzania',
    details: [],
    accent: 'from-emerald-500 to-teal-400'
  }
];

const projects = [
  {
    title: 'FTTH Network Deployment',
    category: 'Telecommunications',
    summary: 'End-to-end fiber-to-the-home installation and maintenance for a growing client base with strict quality assurance.',
    achievements: ['100+ installations', '99.2% quality', 'Zero rework'],
    stack: ['FTTH', 'Fiber Testing', 'Network Diagnosis', 'Field Operations'],
    accent: 'from-sky-500 to-cyan-400',
    impact: 'Achieved high first-time-right deployment standards.'
  },
  {
    title: 'Enterprise IT Operations',
    category: 'IT Support & Infrastructure',
    summary: 'Managed branch-level troubleshooting and support to protect business continuity and user productivity.',
    achievements: ['95% uptime', '50+ users', 'Zero compliance issues'],
    stack: ['Network Support', 'VPN/Security', 'IT Asset Mgmt', 'Troubleshooting'],
    accent: 'from-violet-500 to-purple-400',
    impact: 'Maintained strong service continuity across critical operations.'
  },
  {
    title: 'Full-Stack Web Applications',
    category: 'Software Development',
    summary: 'Developed production-ready web systems using Django, JavaScript, and MySQL for business workflows and digital services.',
    achievements: ['5+ clients', '35% performance gain', 'Zero downtime'],
    stack: ['Django', 'JavaScript', 'MySQL', 'REST APIs', 'Git'],
    accent: 'from-emerald-500 to-teal-400',
    impact: 'Delivered scalable digital systems with reliable uptime.'
  },
  {
    title: 'Network Troubleshooting System',
    category: 'Systems Engineering',
    summary: 'Applied structured root cause analysis and fault isolation to improve service recovery and reliability.',
    achievements: ['40% faster resolution', 'Clear documentation', 'RCA framework'],
    stack: ['RCA', 'Diagnostics', 'Documentation', 'Best Practices'],
    accent: 'from-amber-500 to-orange-400',
    impact: 'Improved issue resolution quality and technical record-keeping.'
  }
];

const references = [
  {
    name: 'Jerry J. Bwikizo',
    role: 'Regional Manager, Network',
    company: 'TTCL',
    email: 'Jerry.Bwikizo@ttcl.co.tz',
    phone: '+255 738 262 853',
    testimonial: 'Musa demonstrated strong technical knowledge and field discipline in FTTH deployment.'
  },
  {
    name: 'Emmanuel Mahenge',
    role: 'Supervisor',
    company: 'MUST',
    email: 'emmahenge@gmail.com',
    phone: '+255 714 530 295',
    testimonial: 'Outstanding problem-solving skills and structured technical documentation.'
  },
  {
    name: 'Dr. Juma Hemed Lungo',
    role: 'Founder and Owner',
    company: 'Zalongwa Technologies Ltd',
    email: 'Jlungo@gmail.com',
    phone: '+255 787 065 098',
    testimonial: 'Reliable developer with strong delivery standards and code quality focus.'
  }
];

const languages = [
  { name: 'Swahili', level: 'Native / Bilingual', icon: '🇹🇿' },
  { name: 'English', level: 'Full Professional Proficiency', icon: '🇬🇧' }
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5">
        <Sparkles className="h-4 w-4 text-sky-300" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sky-300">{eyebrow}</span>
      </div>
      <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-lg text-slate-400">{description}</p>}
    </div>
  );
}

function StatCard({ stat, index }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl transition duration-500 hover:border-sky-500/30 hover:bg-slate-800/50"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 transition duration-500 group-hover:opacity-5`} />
      <div className="relative">
        <p className={`bg-gradient-to-r ${stat.accent} bg-clip-text text-3xl font-black text-transparent`}>{stat.value}</p>
        <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
      </div>
    </div>
  );
}

function SkillCard({ group }) {
  const colorMap = {
    sky: 'from-sky-500/20 to-cyan-500/10 text-sky-300',
    violet: 'from-violet-500/20 to-purple-500/10 text-violet-300',
    emerald: 'from-emerald-500/20 to-teal-500/10 text-emerald-300',
    amber: 'from-amber-500/20 to-orange-500/10 text-amber-300'
  };

  return (
    <div className={`group rounded-3xl border border-white/10 bg-gradient-to-br ${colorMap[group.color]} p-8 backdrop-blur-xl transition hover:border-white/20`}>
      <div className={`mb-6 inline-flex rounded-2xl bg-slate-950/60 p-3 ${group.color === 'sky' ? 'text-sky-300' : group.color === 'violet' ? 'text-violet-300' : group.color === 'emerald' ? 'text-emerald-300' : 'text-amber-300'}`}>
        <group.icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-bold text-white">{group.title}</h3>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {group.items.map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-sm text-slate-200">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl transition duration-500 hover:border-sky-500/30 hover:bg-slate-800/50">
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-sky-500/20 to-cyan-500/10 p-3 text-sky-300 ring-1 ring-sky-500/20">
              <exp.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xl font-bold text-white">{exp.role}</p>
              <p className="mt-1 text-sm text-sky-300/90">{exp.company}</p>
            </div>
          </div>
          <span className="whitespace-nowrap rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-200">
            {exp.period}
          </span>
        </div>

        <div className="rounded-2xl border border-white/5 bg-slate-950/50 p-4">
          <p className="text-sm font-semibold text-sky-300">{exp.highlight}</p>
        </div>

        <ul className="space-y-3">
          {exp.description.map((point, i) => (
            <li key={i} className="flex gap-3 text-slate-300">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
              <span className="leading-6">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {exp.skills.map((skill) => (
            <span key={skill} className="rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-xs text-sky-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl">
      <div className={`relative h-28 bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
            {project.category}
          </span>
          <Star className="h-4 w-4 text-yellow-400/60 transition group-hover:text-yellow-400" />
        </div>

        <h3 className="mt-4 text-xl font-bold text-white transition group-hover:text-sky-300">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>

        <div className="mt-5 rounded-2xl border border-white/5 bg-slate-950/50 p-3">
          <p className="text-xs font-semibold text-sky-300">Key Achievement</p>
          <p className="mt-1.5 text-sm text-slate-300">{project.impact}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {project.achievements.map((achievement, i) => (
              <span key={i} className="rounded-full bg-sky-500/10 px-2 py-1 text-[10px] font-semibold text-sky-300">
                {achievement}
              </span>
            ))}
          </div>
          <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-sky-400" />
        </div>
      </div>
    </div>
  );
}

function ReferenceCard({ ref }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/5 to-violet-500/5 p-6 backdrop-blur-xl transition hover:border-sky-500/30 hover:bg-sky-500/10">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-300 text-sm font-black text-slate-950">
          {ref.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="font-semibold text-white">{ref.name}</p>
          <p className="text-xs text-sky-300">{ref.role}</p>
        </div>
      </div>

      <p className="text-sm italic text-slate-300">"{ref.testimonial}"</p>

      <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-slate-400">
        <p>{ref.company}</p>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${ref.email}`} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs transition hover:bg-sky-500/10">
            Email
          </a>
          <a href={`tel:${ref.phone}`} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-xs transition hover:bg-sky-500/10">
            Call
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl animate-pulse" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-violet-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className={`sticky top-0 z-50 transition ${scrolled ? 'border-b border-white/10 bg-slate-950/90 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-300 text-sm font-black text-slate-950 shadow-lg">
              M
            </div>
            <div>
              <p className="text-sm font-black tracking-[0.3em] text-sky-300">MUSA</p>
              <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500">Engineer & Dev</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm font-medium text-slate-400 transition hover:text-sky-300">{item.name}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="/resume.pdf" download className="hidden items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:border-sky-300 hover:bg-sky-500/20 md:inline-flex">
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden" aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 md:hidden">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm text-slate-300">{item.name}</a>
            ))}
            <a href="/resume.pdf" download className="mt-3 inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        )}
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:py-32">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-4 py-1.5">
              <UserRound className="h-4 w-4 text-sky-300" />
              <span className="text-sm font-semibold text-sky-200">Open to opportunities</span>
            </div>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.1] text-white md:text-6xl lg:text-7xl">
              Telecom Engineer <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">&</span> Full-Stack Developer
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I bridge <span className="font-semibold text-white">infrastructure and software</span>—from fiber optics and enterprise IT to production web applications. Based in Dar es Salaam, delivering solutions that scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg transition hover:shadow-xl hover:shadow-sky-500/30">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-sky-400/40 hover:bg-sky-500/10 backdrop-blur-sm">
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-sky-300">3+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">Years</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-violet-300">50+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">Supported</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm">
                <p className="text-2xl font-black text-cyan-300">∞</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-400">Learning</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-500/25 via-transparent to-violet-500/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 backdrop-blur-xl">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Profile</p>
                  <p className="mt-3 text-2xl font-black text-white">MUSA E. BASILI</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-lg font-bold text-white shadow-lg">
                  MB
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sky-300">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">Specialization</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['FTTH', 'Networking', 'Django', 'JavaScript'].map((tag) => (
                      <span key={tag} className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 grid-cols-2">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className={`rounded-2xl border border-white/10 bg-gradient-to-br ${stat.accent} p-4`}>
                      <p className={`text-xl font-black bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                <a href="mailto:musabasili035@gmail.com" className="flex-1 rounded-lg border border-sky-500/20 bg-sky-500/5 py-2 text-center text-xs font-semibold text-sky-300 transition hover:bg-sky-500/10">
                  Email
                </a>
                <a href="https://linkedin.com/in/musa-basili-82bab62b5" target="_blank" rel="noreferrer" className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/10">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-12">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="About"
            title="Technical expertise meets operational precision"
            description="I combine infrastructure knowledge with software development skills to build reliable systems and solutions."
          />

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 backdrop-blur-xl">
              <p className="text-lg leading-8 text-slate-300">
                I'm a Telecommunication Systems Engineering graduate with <span className="font-semibold text-sky-300">hands-on experience</span> in fiber deployment, enterprise IT support, and full-stack web development. My approach is systematic: understand the problem deeply, solve it reliably, and document it clearly.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-sky-500/20 bg-sky-500/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-sky-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Infrastructure Expert</p>
                    <p className="mt-1 text-sm text-slate-400">FTTH, fiber splicing, network troubleshooting</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-violet-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Enterprise Support</p>
                    <p className="mt-1 text-sm text-slate-400">IT operations, network management, reliability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Full-Stack Development</p>
                    <p className="mt-1 text-sm text-slate-400">Django, JavaScript, databases, REST APIs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 auto-rows-max">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 p-8 backdrop-blur-xl">
                <Network className="mb-4 h-8 w-8 text-sky-300" />
                <h3 className="text-xl font-bold text-white">Network Operations</h3>
                <p className="mt-3 text-slate-400">Diagnosing connectivity issues and maintaining performance across complex network environments.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-purple-500/5 p-8 backdrop-blur-xl">
                <BriefcaseBusiness className="mb-4 h-8 w-8 text-violet-300" />
                <h3 className="text-xl font-bold text-white">IT Support</h3>
                <p className="mt-3 text-slate-400">Supporting 50+ users with system stability and user satisfaction as top priorities.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-8 backdrop-blur-xl">
                <Code2 className="mb-4 h-8 w-8 text-emerald-300" />
                <h3 className="text-xl font-bold text-white">Web Development</h3>
                <p className="mt-3 text-slate-400">Building functional, scalable applications with modern frameworks and best practices.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Experience" title="Real-world impact across infrastructure and software" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Skills" title="A complete technical toolkit" description="Strong capabilities across telecom infrastructure, IT operations, and modern software development." />
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, i) => (
              <SkillCard key={i} group={group} />
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Projects" title="Work that demonstrates real impact" description="From field installations to production applications, each project reflects technical depth and measurable outcomes." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <SectionHeading eyebrow="Education" title="Strong academic foundation" />
            </div>

            <div className="space-y-5">
              {education.map((item, i) => (
                <div key={i} className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.accent} p-8 backdrop-blur-xl`}>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <p className="text-xl font-bold text-white">{item.title}</p>
                      <p className="text-sm text-sky-200 font-semibold">{item.school}</p>
                    </div>
                    <div className="text-sm text-slate-400">
                      <p className="font-semibold">{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  {item.details.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                      {item.details.map((detail, j) => (
                        <span key={j} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="Languages" title="Fluent communication" />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {languages.map((lang, i) => (
                <div key={i} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 backdrop-blur-xl">
                  <div className="mb-4 text-3xl">{lang.icon}</div>
                  <p className="text-xl font-bold text-white">{lang.name}</p>
                  <p className="mt-2 text-slate-400">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="References" title="Trusted by industry leaders" description="Professional references from telecom, banking, and software development sectors." />
          <div className="grid gap-6 md:grid-cols-3">
            {references.map((ref, i) => (
              <ReferenceCard key={i} ref={ref} />
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="Contact" title="Let's build something great together" description="Available for telecom infrastructure projects, IT support roles, and web development opportunities." />

              <div className="mt-8 space-y-3">
                <a href="mailto:musabasili035@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Mail className="h-5 w-5 text-sky-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <p className="text-xs text-slate-400">musabasili035@gmail.com</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-500" />
                </a>

                <a href="tel:+255695388337" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Phone className="h-5 w-5 text-sky-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <p className="text-xs text-slate-400">+255 695 388 337</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-500" />
                </a>

                <a href="https://linkedin.com/in/musa-basili-82bab62b5" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Linkedin className="h-5 w-5 text-sky-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">LinkedIn</p>
                    <p className="text-xs text-slate-400">Connect with me</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-500" />
                </a>

                <a href="https://github.com/musabasili035-meb" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Github className="h-5 w-5 text-sky-300" />
                  <div>
                    <p className="text-sm font-semibold text-white">GitHub</p>
                    <p className="text-xs text-slate-400">See my code</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-500" />
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-8 backdrop-blur-xl">
              <form className="space-y-5">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white">Full Name</label>
                    <input id="name" type="text" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-white">Email</label>
                    <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30" placeholder="you@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-white">Subject</label>
                  <input id="subject" type="text" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30" placeholder="Project inquiry, job opportunity, etc." />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-white">Message</label>
                  <textarea id="message" rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/30" placeholder="Tell me about your project or opportunity..." />
                </div>

                <button type="submit" className="w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg transition hover:shadow-xl hover:shadow-sky-500/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-cyan-300 text-sm font-black text-slate-950">
                  M
                </div>
                <p className="font-bold text-white">MUSA</p>
              </div>
              <p className="text-sm text-slate-400">Telecommunication Engineer & Software Developer</p>
            </div>

            <div>
              <p className="mb-4 font-semibold text-white">Navigation</p>
              <ul className="space-y-2 text-sm text-slate-400">
                {navItems.map((item) => (
                  <li key={item.id}><a href={`#${item.id}`} className="transition hover:text-white">{item.name}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-semibold text-white">Social</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://linkedin.com/in/musa-basili-82bab62b5" target="_blank" rel="noreferrer" className="transition hover:text-white">LinkedIn</a></li>
                <li><a href="https://github.com/musabasili035-meb" target="_blank" rel="noreferrer" className="transition hover:text-white">GitHub</a></li>
                <li><a href="mailto:musabasili035@gmail.com" className="transition hover:text-white">Email</a></li>
              </ul>
            </div>

            <div>
              <p className="mb-4 font-semibold text-white">Location</p>
              <p className="text-sm text-slate-400">Dar es Salaam, Tanzania</p>
              <p className="mt-4 text-xs text-slate-500">Available for remote and on-site opportunities</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} MUSA E. BASILI. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <a href="#" className="transition hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="transition hover:text-slate-300">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
