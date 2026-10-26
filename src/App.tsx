import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Database,
  FileDown,
  Mail,
  MapPin,
  Menu,
  ShieldCheck,
  TrendingUp,
  Users,
  X,
  Linkedin,
  Github,
  Phone,
  Sparkles,
} from 'lucide-react'

type Experience = {
  role: string
  company: string
  period: string
  location: string
  summary: string
  bullets: string[]
  tag?: string
}

const experiences: Experience[] = [
  {
    role: 'Business Processing Officer / Underwriting Officer',
    company: 'APA Insurance',
    period: 'Jun 2025 – Present',
    location: 'Nairobi, Kenya',
    summary: 'Supporting new business acquisition, policy renewals, risk assessment and efficient underwriting operations.',
    bullets: [
      'Review applications, assess risk information and coordinate underwriting requirements for timely policy issuance.',
      'Prepare and review quotations, schedules, endorsements, debit notes and policy documentation.',
      'Support portfolio retention through renewals, additions, deletions and responsive client communication.',
      'Analyse renewal and portfolio reports to support business decisions and identify areas requiring intervention.',
    ],
    tag: '23% portfolio growth · 85%+ retention',
  },
  {
    role: 'Claims Analyst',
    company: 'APA Insurance Company Limited',
    period: 'Aug 2018 – May 2025',
    location: 'Nairobi, Kenya',
    summary: 'Used claims data, provider analysis and reporting to strengthen cost controls, identify trends and improve operational decisions.',
    bullets: [
      'Extracted data with SQL and developed Excel and Tableau dashboards and reports.',
      'Analysed provider performance, claims patterns and inconsistencies to identify savings and operational improvements.',
      'Reviewed high-value, repeated and duplicate claims while supporting agreed rates and compliance standards.',
      'Collaborated with underwriting, finance and customer service while maintaining confidentiality of patient information.',
    ],
    tag: 'KSh 3M cost savings · KSh 7M+ recoveries',
  },
  {
    role: 'Data Clerk',
    company: 'APA Insurance Company Limited',
    period: 'Jul 2016 – Aug 2018',
    location: 'Nairobi, Kenya',
    summary: 'Maintained accurate claims records and supported document quality and retrieval.',
    bullets: [
      'Entered claims data and maintained physical and digital records.',
      'Performed quality checks to identify discrepancies and support data integrity.',
      'Verified policy documents and supported underwriting compliance requirements.',
    ],
  },
  {
    role: 'Sales Representative',
    company: 'Airtel Kenya',
    period: 'Mar 2016 – Jul 2016',
    location: 'Kenya',
    summary: 'Supported customer acquisition, product promotion and relationship building.',
    bullets: [
      'Promoted products and services based on customer needs and opportunities.',
      'Exceeded assigned sales targets and supported customer onboarding, retention and referrals.',
    ],
  },
  {
    role: 'Intern',
    company: 'National Health Insurance Fund (NHIF)',
    period: 'Mar 2015 – Jul 2015',
    location: 'Nyeri, Kenya',
    summary: 'Supported member services, claims data capture and records administration.',
    bullets: [
      'Captured claims data, assisted with membership registration and card issuance.',
      'Handled premium collections and updated member records.',
    ],
  },
]

const skillGroups = [
  {
    icon: ShieldCheck,
    title: 'Insurance & Risk',
    skills: ['Underwriting and risk analysis', 'Medical risk assessment', 'Claims analysis', 'Loss ratio reporting', 'Policy issuance and renewals', 'Quality assurance and audit'],
  },
  {
    icon: BarChart3,
    title: 'Data & Reporting',
    skills: ['SQL data extraction', 'Microsoft Excel', 'Tableau dashboards', 'Trend and provider analysis', 'Portfolio reporting', 'Data quality checks'],
  },
  {
    icon: Users,
    title: 'Business & Operations',
    skills: ['Client relationship management', 'Process improvement', 'Document management', 'Business development', 'Communication', 'Team collaboration'],
  },
]

const education = [
  { title: 'Diploma in Insurance', school: 'College of Insurance · Nairobi, Kenya', period: 'Jan 2024 – May 2026' },
  { title: 'Data Science', school: 'Moringa School · Nairobi, Kenya', period: 'Aug 2022 – May 2023' },
  { title: 'Post Graduate Diploma in Tax Administration', school: 'Kenya School of Revenue Administration', period: 'May 2018 – Dec 2020' },
  { title: 'Bachelor of Science in Actuarial Science', school: 'Dedan Kimathi University of Technology · Nyeri, Kenya', period: 'May 2012 – Apr 2016' },
]

const certifications = [
  { title: 'McKinsey Forward Program', detail: 'Structured problem solving, leadership and digital transformation.' },
  { title: 'Young Insurance Professionals Programme (YIPP)', detail: 'Nine-month certified training in leadership and advanced reinsurance by Africa Re and London School of Insurance.' },
  { title: 'Association of Kenya Insurers (AKI) Relay Run', detail: 'Certificate of participation recognising teamwork, discipline and perseverance.' },
]

const highlights = [
  { value: '23%', label: 'Portfolio growth contributed to', icon: TrendingUp },
  { value: '85%+', label: 'Client retention maintained', icon: Users },
  { value: '30%', label: 'Time saved through a centralised document repository', icon: FileDown },
  { value: 'KSh 3M', label: 'Cost savings identified through claims analysis', icon: BarChart3 },
  { value: 'KSh 7M+', label: 'Recovery initiatives that realized over 7 million Kenyan Shillings', icon: Sparkles },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    ['About', '#about'],
    ['Experience', '#experience'],
    ['Expertise', '#expertise'],
    ['Education', '#education'],
    ['Contact', '#contact'],
  ]

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Alice Wamuyu home" onClick={closeMenu}>
          <span className="brand-mark">AW</span>
          <span className="brand-copy"><strong>Alice Wamuyu</strong><small>Insurance · Risk · Analytics</small></span>
        </a>
        <button className="mobile-menu-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> INSURANCE PROFESSIONAL & DATA ANALYST</div>
            <h1>Turning complex data into <em>confident decisions.</em></h1>
            <p className="hero-description">I’m Alice Wanjiru Wamuyu — an insurance and analytics professional connecting underwriting insight, claims intelligence and operational improvement to meaningful business outcomes.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#experience">Explore my experience <ArrowDownRight size={17} /></a>
              <a className="button button-light" href="/Alice-Wanjiru-Wamuyu-CV.pdf" download>Download CV <FileDown size={17} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Nairobi, Kenya</span><span className="meta-divider" /><span><span className="availability-dot" /> Open to relevant opportunities</span></div>
          </div>
            <div className="hero-art profile-art" aria-label="Alice Wanjiru Wamuyu profile portrait">
  <div className="profile-image-frame">
    <img
      src="/alice-profile.jpg"
      alt="Alice Wanjiru Wamuyu"
      className="profile-image"
    />
  </div>

  <div className="floating-card card-risk">
    <span className="float-icon">
      <ShieldCheck size={17} />
    </span>
    <span>
      <strong>Risk intelligence</strong>
      <small>Assess · Analyse · Act</small>
    </span>
  </div>

  <div className="floating-card card-data">
    <span className="float-icon gold">
      <Database size={17} />
    </span>
    <span>
      <strong>Data-led insight</strong>
      <small>SQL · Excel · Tableau</small>
    </span>
  </div>

  <div className="art-caption">
    EXPERIENCE THAT CONNECTS
    <br />
    PEOPLE, PROCESSES & PERFORMANCE
  </div>
</div>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div className="proof-inner">
            {highlights.map((item) => {
              const Icon = item.icon
              return <article className="proof-item" key={item.value}><span className="proof-icon"><Icon size={18} /></span><div><strong>{item.value}</strong><p>{item.label}</p></div></article>
            })}
          </div>
      
        </section>

        <section className="section section-wrap about-section" id="about">
          <div className="section-heading"><span className="section-kicker">ABOUT</span><h2>Analytical thinking.<br /><em>Practical impact.</em></h2></div>
          <div className="about-content">
            <p className="lead">With over eight years of experience across insurance operations, claims analysis and underwriting support, I bring together a careful eye for risk and a practical approach to solving business problems.</p>
            <p>My work has involved analysing provider and claims data, preparing reports and dashboards, improving document workflows, supporting policy servicing, and collaborating across teams. I enjoy translating complex information into clear next steps that support better decisions, stronger service and operational efficiency.</p>
            <div className="value-points"><div><Check size={17} /><span>Risk-aware and detail-oriented</span></div><div><Check size={17} /><span>Evidence-led decision support</span></div><div><Check size={17} /><span>Collaborative process improvement</span></div></div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-wrap">
            <div className="section-topline"><div><span className="section-kicker">CAREER JOURNEY</span><h2>Experience built on <em>results.</em></h2></div><p>From data administration to claims analytics and underwriting, each role has strengthened my understanding of how people, risk and information shape business performance.</p></div>
            <div className="experience-list">
              {experiences.map((job, index) => <article className="experience-card" key={job.role}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-main"><div className="experience-meta"><span>{job.period}</span><span className="meta-dot">·</span><span>{job.location}</span></div><h3>{job.role}</h3><h4>{job.company}</h4><p className="experience-summary">{job.summary}</p><ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>{job.tag && <div className="impact-tag"><TrendingUp size={15} /> {job.tag}</div>}</div>
                <div className="experience-symbol"><BriefcaseBusiness size={22} /></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section section-wrap expertise-section" id="expertise">
          <div className="section-heading"><span className="section-kicker">EXPERTISE</span><h2>Where insurance meets <em>analytics.</em></h2><p className="heading-description">A combination of domain knowledge, analytical tools and operational skills to support sound decisions.</p></div>
          <div className="skills-grid">{skillGroups.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-icon"><Icon size={22} /></div><h3>{group.title}</h3><ul>{group.skills.map((skill) => <li key={skill}><span className="skill-bullet" />{skill}</li>)}</ul></article> })}</div>
          <div className="tools-band"><div className="tools-title"><Database size={19} /><span>Tools & working strengths</span></div><div className="tool-chips"><span>SQL</span><span>Microsoft Excel</span><span>Tableau</span><span>Claims reporting</span><span>Risk assessment</span><span>Process improvement</span><span>Data quality</span></div></div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-wrap education-layout">
            <div className="education-left"><span className="section-kicker">LEARNING</span><h2>Built on a foundation of <em>curiosity.</em></h2><p>Academic study and continued professional development across actuarial science, data science, tax administration and insurance.</p><div className="award-card"><span className="award-icon"><Award size={24} /></span><div><small>RECOGNITION</small><strong>Most Trusted Employee of the Year</strong><p>APA Insurance Company Limited · 2024</p></div></div></div>
            <div className="education-right"><h3 className="subsection-title">Education</h3><div className="education-list">{education.map((item) => <article className="education-item" key={item.title}><span className="education-dot" /><div><h4>{item.title}</h4><p>{item.school}</p><small>{item.period}</small></div><ChevronDown size={16} /></article>)}</div><h3 className="subsection-title certifications-title">Programs & certificates</h3><div className="certification-list">{certifications.map((item) => <article className="certification-item" key={item.title}><span className="cert-check"><Check size={14} /></span><div><h4>{item.title}</h4><p>{item.detail}</p></div></article>)}</div></div>
          </div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-inner section-wrap"><div className="contact-copy"><span className="section-kicker">LET’S CONNECT</span><h2>Good decisions start with <em>a conversation.</em></h2><p>Interested in insurance, underwriting, claims analytics or data-focused opportunities? I’d welcome a conversation about how my experience could contribute to your team.</p><a className="button button-gold" href="mailto:wamuyualice935@gmail.com?subject=Professional%20opportunity%20for%20Alice%20Wamuyu">Start a conversation <ArrowRight size={17} /></a></div><div className="contact-card"><span className="contact-card-label">CONTACT DETAILS</span><a href="mailto:wamuyualice935@gmail.com"><Mail size={18} /><span><small>Email</small><strong>wamuyualice935@gmail.com</strong></span><ArrowRight className="contact-arrow" size={16} /></a><a href="tel:0716267077"><Phone size={18} /><span><small>Phone</small><strong>0716267077</strong></span><ArrowRight className="contact-arrow" size={16} /></a><a href="https://www.linkedin.com/in/alice-wamuyu-6466631a3/" target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LinkedIn</small><strong>Connect professionally</strong></span><ArrowRight className="contact-arrow" size={16} /></a><a href="https://github.com/AliceWamuyu" target="_blank" rel="noreferrer"><Github size={18} /><span><small>GitHub</small><strong>View profile</strong></span><ArrowRight className="contact-arrow" size={16} /></a></div></div></section>
      </main>

      <footer className="footer"><a className="footer-brand" href="#home">AW<span>.</span></a><p>Thoughtful analysis. Better outcomes.</p><span>© {new Date().getFullYear()} Alice Wanjiru Wamuyu</span></footer>
    </div>
  )
}

export default App
