import { BriefcaseBusiness, Code2, Download, Github, Globe, Mail, MapPin, Phone, ShieldCheck, Sparkles, UserRound, ArrowRight, Linkedin, Cpu, Network, Wrench, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const stats = [
  { value: '3+', label: 'Years of practical experience' },
  { value: '50+', label: 'Corporate users supported' },
  { value: 'FTTH', label: 'Fiber-to-the-home specialist' },
  { value: 'Django', label: 'Full-stack web applications' }
];

const skillGroups = [
  {
    title: 'Fiber & FTTH',
    icon: Network,
    items: ['FTTH installation', 'Fiber splicing', 'Cable routing', 'Signal-loss testing', 'Last-mile connectivity troubleshooting']
  },
  {
    title: 'Networking & Tools',
    icon: Wrench,
    items: ['IP networking', 'TCP/IP', 'Routing & switching', 'VLANs', 'Static routing', 'Network troubleshooting']
  },
  {
    title: 'Software Development',
    icon: Code2,
    items: ['Django', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'MySQL', 'SQLite', 'RESTful APIs']
  },
  {
    title: 'Leadership & Problem Solving',
    icon: ShieldCheck,
    items: ['Root cause analysis', 'Fault isolation', 'Cross-functional teamwork', 'Technical documentation', 'Network reliability']
  }
];

const experiences = [
  {
    role: 'Field / Industrial Trainee',
    company: 'TTCL (Tanzania Telecommunications Corporation)',
    period: '2024',
    description: [
      'Installed, spliced, and tested FTTH last-mile connections, including fiber routing and signal-loss testing for reliable subscriber connectivity.',
      'Configured and tested telecommunications network and telephony equipment under senior supervision to ensure compliance with operational standards.',
      'Diagnosed and resolved faults across network connectivity, transmission links, and telephony services to reduce average troubleshooting turnaround.'
    ]
  },
  {
    role: 'Field / Industrial Trainee',
    company: 'CRDB Bank',
    period: '2023',
    description: [
      'Provided first-line technical support to over 50 corporate users, maintaining 95% service uptime by resolving workstation, software, and peripheral issues.',
      'Diagnosed and fixed branch-level network faults, including LAN cabling issues, IP conflicts, printer sharing issues, and local switch port drops.',
      'Restored branch connectivity to core banking software by troubleshooting local router settings, domain login failures, and VPN access errors.'
    ]
  },
  {
    role: 'Software Developer',
    company: 'Zalongwa Technologies Ltd',
    period: '2022 – 2024',
    description: [
      'Developed and maintained full-stack web applications using Django, Python, HTML5, CSS3, JavaScript, and MySQL.',
      'Designed and optimized database schemas, RESTful endpoints, and backend logic to improve performance and reliability.',
      'Performed system testing, bug fixing, and deployment support while using Git for version control and collaborative workflows.'
    ]
  }
];

const education = [
  {
    title: 'Bachelor of Engineering in Telecommunication Systems',
    school: 'Mbeya University of Science and Technology (MUST)',
    period: '2026',
    location: 'Mbeya, Tanzania',
    details: ['Optical Fiber Communication', 'Mobile Communication', 'Satellite Communication', 'Computer Networks']
  },
  {
    title: 'Advanced Certificate of Secondary Education (A-Level) — PCM',
    school: 'Magufuli Secondary School',
    period: '2022',
    location: 'Geita, Tanzania',
    details: []
  },
  {
    title: 'Certificate of Secondary Education (O-Level)',
    school: 'Mang’ola Secondary School',
    period: '2019',
    location: 'Karatu, Arusha, Tanzania',
    details: []
  }
];

const projects = [
  {
    title: 'FTTH Network Installation Case Study',
    category: 'Telecommunications',
    summary: 'Managed field network deployment and troubleshooting for fiber-to-the-home last-mile connectivity, ensuring stable service delivery and quality assurance.',
    stack: ['FTTH', 'Fiber Testing', 'Network Diagnosis'],
    accent: 'from-sky-500 to-cyan-400'
  },
  {
    title: 'Branch IT Support Operations',
    category: 'Enterprise IT',
    summary: 'Resolved recurring LAN, local switch, router, VPN, and core banking system issues for branch offices, improving uptime and service continuity.',
    stack: ['LAN', 'VPN', 'Support', 'Hardware'],
    accent: 'from-violet-500 to-indigo-500'
  },
  {
    title: 'Business Web Application',
    category: 'Software Development',
    summary: 'Built and maintained full-stack applications with Django, JavaScript, and MySQL, improving workflow automation and business operations.',
    stack: ['Django', 'JavaScript', 'MySQL', 'REST API'],
    accent: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Deployment & Maintenance Workflow',
    category: 'Systems Reliability',
    summary: 'Developed testing and maintenance processes to improve deployment quality, bug prevention, and continuous system reliability.',
    stack: ['Git', 'Testing', 'Deployment', 'Bug Fixing'],
    accent: 'from-amber-500 to-orange-500'
  }
];

const references = [
  {
    name: 'Jerry J. Bwikizo',
    role: 'Regional Manager, Network',
    company: 'Tanzania Telecommunications Corporation Limited (TTCL)',
    email: 'Jerry.Bwikizo@ttcl.co.tz',
    phone: '+255 738 262 853'
  },
  {
    name: 'Emmanuel Mahenge',
    role: 'Supervisor',
    company: 'Mbeya University of Science and Technology (MUST)',
    email: 'emmahenge@gmail.com',
    phone: '+255 714 530 295'
  },
  {
    name: 'Dr. Juma Hemed Lungo',
    role: 'Founder and Owner',
    company: 'Zalongwa Technologies Ltd',
    email: 'Jlungo@gmail.com',
    phone: '+255 787 065 098'
  }
];

const languages = [
  { name: 'Swahili', level: 'Native / Bilingual' },
  { name: 'English', level: 'Full Professional Proficiency' }
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base text-slate-300">{description}</p> : null}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-10 top-24 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-300 text-sm font-black text-slate-950 shadow-glow">
              M
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">MUSA</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Portfolio</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:border-sky-300 hover:bg-sky-500/20"
          >
            Let’s Talk
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/5 px-3 py-1 text-sm font-medium text-sky-200">
              <UserRound className="h-4 w-4" />
              Available for telecom and software opportunities
            </p>

            <h1 className="max-w-xl text-4xl font-black leading-tight text-white md:text-6xl">
              Telecommunication Engineer <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">&</span> Software Developer
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              I’m <span className="font-semibold text-white">MUSA E. BASILI</span>, a graduate in Telecommunication Systems Engineering with hands-on experience in fiber optics, IT support, network troubleshooting, and web application development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
                View projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:musabasili035@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-sky-400/40 hover:bg-sky-500/10">
                <Mail className="h-4 w-4" />
                Contact me
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-300">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-400" /> Dar es Salaam, Tanzania</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-400" /> +255 695 388 337</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/10 blur-2xl" />
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-sky-300">Profile</p>
                  <p className="mt-2 text-2xl font-bold text-white">MUSA E. BASILI</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-lg font-bold text-white">
                  MB
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sky-300">
                    <Cpu className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">Core strengths</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['FTTH', 'Networking', 'Django', 'GitHub', 'Linux', 'Troubleshooting'].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-black text-white">{stat.value}</p>
                      <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="About"
            title="Technical professional with a strong field and systems mindset."
            description="I combine telecom operations, IT support, and web development to deliver practical, reliable solutions across both infrastructure and digital services."
          />

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
              <p className="text-lg leading-8 text-slate-300">
                I am a Telecommunication Systems Engineering graduate with practical experience in network operations, enterprise IT support, and web application development. My work has involved fiber installation, fault diagnosis, network troubleshooting, and maintaining stable digital operations for users and internal systems.
              </p>
              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-sky-400/20 bg-sky-500/5 p-4">
                <div className="rounded-xl bg-sky-500/10 p-2 text-sky-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Operational reliability</p>
                  <p className="text-sm text-slate-300">Structured problem solving and clear documentation are central to my process.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-2 text-sky-300"><Network className="h-5 w-5" /></div>
                <h3 className="text-xl font-bold text-white">Network Operations</h3>
                <p className="mt-3 text-slate-300">Diagnosing faults, resolving connectivity issues, and maintaining secure and efficient network performance.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-2 text-violet-300"><BriefcaseBusiness className="h-5 w-5" /></div>
                <h3 className="text-xl font-bold text-white">IT Support</h3>
                <p className="mt-3 text-slate-300">Supporting users, troubleshooting systems, and keeping daily business services stable and responsive.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-emerald-500/10 p-2 text-emerald-300"><Code2 className="h-5 w-5" /></div>
                <h3 className="text-xl font-bold text-white">Web Development</h3>
                <p className="mt-3 text-slate-300">Building functional digital solutions with Django, Python, JavaScript, and database-backed systems.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-6">
                <div className="mb-4 inline-flex rounded-xl bg-amber-500/10 p-2 text-amber-300"><ShieldCheck className="h-5 w-5" /></div>
                <h3 className="text-xl font-bold text-white">Root Cause Analysis</h3>
                <p className="mt-3 text-slate-300">Applying structured investigations to isolate issues and create practical and lasting fixes.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Hands-on work across telecom infrastructure, enterprise support, and software development."
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
                <div className="absolute left-8 top-8 h-full w-px -translate-x-1/2 bg-gradient-to-b from-sky-500/70 to-transparent" />
                <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300 ring-1 ring-sky-500/20">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-xl font-bold text-white">{exp.role}</p>
                        <p className="text-base text-sky-300">{exp.company}</p>
                      </div>
                      <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-3 text-slate-300">
                      {exp.description.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Skills"
            title="Strong in both infrastructure and software delivery."
            description="I bring together telecom and IT capabilities with modern development practices to solve real-world technical problems."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl bg-sky-500/10 p-2 text-sky-300">
                    <group.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work that reflects technical depth and reliability."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project) => (
              <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 transition hover:-translate-y-1 hover:border-sky-500/30 hover:shadow-glow">
                <div className={`h-28 bg-gradient-to-br ${project.accent}`} />
                <div className="p-6">
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                    {project.category}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-sky-500/20 bg-sky-500/5 px-2 py-1 text-[11px] text-sky-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Education"
                title="Academic foundation with applied telecom and engineering focus."
              />
            </div>

            <div className="space-y-5">
              {education.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-lg font-bold text-white">{item.title}</p>
                      <p className="text-sm text-sky-300">{item.school}</p>
                    </div>
                    <div className="text-sm text-slate-400">
                      <p>{item.period}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>

                  {item.details.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-200">
                          {detail}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionHeading
                eyebrow="Languages"
                title="Effective communication across professional environments."
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {languages.map((language) => (
                <div key={language.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                  <p className="text-lg font-bold text-white">{language.name}</p>
                  <p className="mt-2 text-slate-300">{language.level}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="References"
            title="Professional references available on request."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {references.map((ref) => (
              <div key={ref.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
                <p className="text-xl font-bold text-white">{ref.name}</p>
                <p className="mt-2 text-sm text-sky-300">{ref.role}</p>
                <p className="mt-3 text-sm text-slate-300">{ref.company}</p>
                <div className="mt-5 space-y-2 text-sm text-slate-300">
                  <p>{ref.email}</p>
                  <p>{ref.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let’s connect for telecom, IT, and software opportunities."
              />

              <div className="space-y-4 text-slate-300">
                <a href="mailto:musabasili035@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Mail className="h-4 w-4 text-sky-300" />
                  musabasili035@gmail.com
                </a>
                <a href="tel:+255695388337" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Phone className="h-4 w-4 text-sky-300" />
                  +255 695 388 337
                </a>
                <a href="https://www.linkedin.com/in/musa-basili-82bab62b5" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Linkedin className="h-4 w-4 text-sky-300" />
                  linkedin.com/in/musa-basili-82bab62b5
                </a>
                <a href="https://github.com/musabasili035-meb" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-4 transition hover:border-sky-500/30 hover:bg-sky-500/5">
                  <Github className="h-4 w-4 text-sky-300" />
                  github.com/musabasili035-meb
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-8">
              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-slate-300">Name</label>
                    <input id="name" type="text" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email</label>
                    <input id="email" type="email" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50" placeholder="you@example.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm text-slate-300">Subject</label>
                  <input id="subject" type="text" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50" placeholder="How can I help?" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-slate-300">Message</label>
                  <textarea id="message" rows="5" className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition focus:border-sky-500/50" placeholder="Tell me about your project or opportunity..." />
                </div>

                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
                  Send message
                  <ChevronRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} MUSA E. BASILI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
