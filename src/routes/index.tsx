import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  Camera,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Facebook,
  FolderOpen,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Network,
  ShieldHalf,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { site } from "@/config/site";

const pageTitle = `${site.name} — Data Science, AI & Software Development`;
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      {
        name: "description",
        content:
          "The professional portfolio of Thabelo Andrew Mulaudzi: computer science, data science research, applied machine learning, technical projects and certifications.",
      },
      { property: "og:title", content: pageTitle },
      {
        property: "og:description",
        content: "Projects, education, research and certifications of Thabelo Andrew Mulaudzi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

const navigation = [
  ["identity", "About"],
  ["work", "Projects"],
  ["career", "Career"],
  ["research", "Research"],
  ["skills", "Skills & Tools"],
  ["certifications", "Certifications"],
  ["gallery", "Gallery"],
  ["contact", "Contact"],
] as const;

function DsfsiLogo({ className }: { className?: string }) {
  return <img src="/dsfsi-logo.png" alt="" className={className} aria-hidden="true" />;
}

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.291 19.49h2.039L6.486 3.24H4.298z" />
    </svg>
  );
}

const onlineLinks = [
  { label: "LinkedIn", href: site.links.linkedin, Icon: Linkedin },
  { label: "Instagram", href: site.links.instagram, Icon: Instagram },
  { label: "Facebook", href: site.links.facebook, Icon: Facebook },
  { label: "X", href: site.links.twitter, Icon: XBrandIcon },
  { label: "GitHub", href: site.links.github, Icon: Github },
  { label: "Google Scholar", href: site.links.scholar, Icon: BookOpen },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="mb-8 sm:mb-10">
      <p className="eyebrow flex items-center gap-3">
        <span className="h-px w-7 bg-accent" aria-hidden="true" />
        {label}
      </p>
      <h2 className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-[43rem] leading-relaxed text-muted-foreground">{description}</p>
      )}
    </header>
  );
}

function ProfileSidebar() {
  return (
    <aside
      className="profile-sidebar lg:sticky lg:top-7 lg:self-start"
      aria-label="Profile summary"
    >
      <div className="sidebar-art relative flex items-center justify-center overflow-hidden rounded-2xl border border-border/60">
        <div className="avatar-orbit avatar-orbit-outer" aria-hidden="true" />
        <div className="avatar-orbit avatar-orbit-inner" aria-hidden="true" />
        <img
          src="/profile-photo.jpeg"
          alt="Portrait of Thabelo Andrew Mulaudzi"
          className="profile-photo relative h-28 w-28 rounded-[1.75rem] border border-white/10 object-cover shadow-2xl"
        />
        <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-200">
          Portfolio
        </span>
      </div>
      <div className="px-1 pt-7 text-center lg:text-left">
        <h2 className="font-display text-3xl leading-[1.08] text-foreground">
          Thabelo Andrew <span className="text-gradient not-italic">Mulaudzi.</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{site.role}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          <span className="sidebar-pill">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {site.location}
          </span>
          <span className="sidebar-pill">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to connecting
          </span>
        </div>
        <div className="mt-6 border-t border-border pt-6">
          <p className="eyebrow mb-3">Find me online</p>
          <a href="#contact" className="btn-primary focus-ring w-full justify-center">
            Let's connect <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
}

function Navigation() {
  return (
    <nav
      className="portfolio-nav sticky top-0 z-30 mb-8 flex items-center justify-between gap-3 border-b border-border/80 py-4 backdrop-blur-xl sm:mb-12"
      aria-label="Section navigation"
    >
      <div className="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-x-auto pb-1 scrollbar-hide sm:gap-2">
        {navigation.map(([id, label]) => (
          <a
            key={id}
            className="focus-ring shrink-0 rounded-full px-2.5 py-2 text-[11px] font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground sm:px-3 sm:text-xs"
            href={`#${id}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Identity() {
  return (
    <section id="identity" className="portfolio-section scroll-mt-24 pt-0">
      <p className="eyebrow flex items-center gap-3">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" /> Digital Identity
      </p>
      <h1 className="mt-6 max-w-[46rem] font-display text-[2.8rem] leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-[4.4rem]">
        From innovative ideas to <em className="text-gradient">real-world solutions.</em>
      </h1>
      <p className="mt-5 max-w-[44rem] text-lg leading-relaxed text-muted-foreground">
        Exploring machine learning, natural language processing, cybersecurity and software
        development through practical projects and research.
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href="#work" className="btn-primary focus-ring">
          Explore my work <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href="#career" className="btn-ghost focus-ring">
          My journey
        </a>
      </div>
      <div className="mt-12 rounded-2xl border border-border/80 bg-card/45 p-6 sm:p-8">
        <h2 className="mb-5 font-display text-2xl text-foreground">A little about me</h2>
        <div className="space-y-4 leading-[1.85] text-muted-foreground">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="mt-7">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">
          Highlights & successes
        </h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { number: "02", label: "Featured projects", Icon: Code2 },
            { number: "07", label: "Certifications", Icon: Award },
            { number: "01", label: "Research focus", Icon: BrainCircuit },
          ].map(({ number, label, Icon }) => (
            <div key={label} className="highlight-tile">
              <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <strong className="mt-4 block font-display text-4xl font-normal text-foreground">
                {number}
              </strong>
              <span className="mt-1 block text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="portfolio-section">
      <SectionHeading
        label="Featured portfolios"
        title="Selected work."
        description="A closer look at two completed projects that combine software engineering, applied machine learning and user-focused interfaces."
      />
      <div className="grid gap-5 xl:grid-cols-2">
        {site.projects.map((project, index) => {
          const Icon = project.id === "insider-threat" ? ShieldHalf : Database;
          return (
            <article
              key={project.id}
              className="project-card group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/50"
            >
              <div
                className={`project-visual project-visual-${index + 1} flex h-48 items-center justify-center border-b border-border/60`}
              >
                <div className="relative flex h-24 w-24 items-center justify-center rounded-[1.5rem] border border-white/20 bg-white/5 shadow-[0_20px_65px_rgba(0,0,0,.3)] backdrop-blur-md">
                  <Icon className="h-12 w-12 text-white" strokeWidth={1.25} aria-hidden="true" />
                </div>
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/25 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-white/80">
                  0{index + 1} · Completed
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="eyebrow">{project.category}</p>
                <h3 className="mt-3 font-display text-[1.7rem] leading-[1.17] text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
                  {project.period}
                </p>
                <p className="mt-5 flex-1 text-sm leading-[1.85] text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <li key={technology} className="chip">
                      {technology}
                    </li>
                  ))}
                </ul>
                {(project.repositoryUrl || project.demoUrl) && (
                  <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5 text-sm">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        className="focus-ring inline-flex items-center gap-1.5 rounded text-accent hover:text-foreground"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Source code <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="focus-ring inline-flex items-center gap-1.5 rounded text-accent hover:text-foreground"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {project.demoLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Gallery({ onOpenCollection }: { onOpenCollection: (collection: string) => void }) {
  const collections = [...new Set(site.gallery.map((photo) => photo.collection))];

  return (
    <section id="gallery" className="portfolio-section">
      <SectionHeading
        label="Personal gallery"
        title="Snapshots along the journey."
        description="Moments from studies, research, projects, and life beyond the screen."
      />
      {site.gallery.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2" aria-label="Gallery folders">
          {collections.map((collection) => {
            const photoCount = site.gallery.filter(
              (photo) => photo.collection === collection,
            ).length;

            return (
              <button
                key={collection}
                type="button"
                onClick={() => onOpenCollection(collection)}
                className="focus-ring flex items-center gap-4 rounded-xl border border-border/80 bg-card/45 p-5 text-left transition hover:border-accent/50 hover:bg-secondary"
              >
                <FolderOpen className="h-7 w-7 shrink-0 text-accent" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-display text-xl text-foreground">{collection}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {photoCount} {photoCount === 1 ? "photo" : "photos"}
                  </span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex min-h-56 items-center gap-5 border-y border-border/80 py-10 sm:px-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
            <Camera className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="eyebrow">Life in frames</p>
            <h3 className="mt-2 font-display text-2xl text-foreground">
              Moments beyond the milestones.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Studies, research, projects, and the moments in between.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryCollection({ collection, onBack }: { collection: string; onBack: () => void }) {
  const photos = site.gallery.filter((photo) => photo.collection === collection);

  return (
    <>
      <div className="page-wash" aria-hidden="true" />
      <main className="relative mx-auto min-h-screen max-w-[1152px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <button type="button" className="btn-ghost focus-ring" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to main site
        </button>
        <header className="mb-9 mt-12">
          <p className="eyebrow">Gallery folder</p>
          <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">{collection}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {photos.length} {photos.length === 1 ? "photo" : "photos"}
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-xl border border-border/80 bg-card/45"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/3] w-full bg-secondary object-contain"
              />
              <figcaption className="p-5 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </main>
    </>
  );
}

function Career() {
  return (
    <section id="career" className="portfolio-section">
      <SectionHeading
        label="Career snapshot"
        title="The journey so far."
        description="Academic foundations and research involvement that have shaped my interests in data science, AI and software development."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {site.education.map((entry, index) => (
          <article
            key={entry.institution}
            className="rounded-2xl border border-border/80 bg-card/45 p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
                {entry.status}
              </span>
            </div>
            <p className="eyebrow">Education / 0{index + 1}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">
              {entry.qualification}
            </h3>
            <p className="mt-4 font-medium text-accent">{entry.institution}</p>
            <p className="mt-2 text-sm text-muted-foreground">{entry.focus}</p>
          </article>
        ))}
        <article className="rounded-2xl border border-border/80 bg-card/45 p-6">
          <div className="mb-6 flex items-center justify-between">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
              <BookOpen className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground">
              Research
            </span>
          </div>
          <p className="eyebrow">Research involvement</p>
          <h3 className="mt-3 font-display text-2xl leading-tight text-foreground">
            {site.research.role}
          </h3>
          <p className="mt-4 font-medium text-accent">{site.research.group}</p>
          <p className="mt-2 text-sm text-muted-foreground">{site.research.institution}</p>
          <a
            href="#research"
            className="focus-ring mt-4 inline-flex items-center gap-2 rounded text-sm text-accent hover:text-foreground"
          >
            Research details <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
}

function Research() {
  const themes = [
    {
      name: "Natural language processing",
      description:
        "Studying how language models extract useful information from unstructured text.",
      Icon: BrainCircuit,
    },
    {
      name: "Explicit & implicit aspects",
      description:
        "Identifying aspects stated directly, inferred from context, or both within a review.",
      Icon: Sparkles,
    },
    {
      name: "Education feedback",
      description: "Analysing course, teaching staff and university reviews at the aspect level.",
      Icon: BookOpen,
    },
  ];
  return (
    <section id="research" className="portfolio-section">
      <SectionHeading
        label="Research"
        title="Understanding the voice behind the feedback."
        description="Applying aspect-based sentiment analysis to higher-education reviews, with an emphasis on both explicit and implicit aspects."
      />
      <div className="rounded-2xl border border-border/80 bg-card/45 p-6 sm:p-8">
        <p className="eyebrow">Current research focus</p>
        <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
          {site.research.topic}
        </h3>
        <p className="mt-4 leading-[1.85] text-muted-foreground">{site.research.description}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {site.research.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              {highlight}
            </li>
          ))}
        </ul>
        {site.research.profileUrl && (
          <a
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded text-sm font-medium text-accent hover:text-foreground"
            href={site.research.profileUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            View research profile <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {themes.map(({ name, description, Icon }) => (
          <article key={name} className="rounded-2xl border border-border/80 bg-card/35 p-5">
            <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
            <h4 className="mt-4 font-medium text-foreground">{name}</h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const icons = [Code2, Network, Database, Sparkles];
  return (
    <section id="skills" className="portfolio-section">
      <SectionHeading
        label="Skills & tools"
        title="Technical strengths and how I work."
        description="Programming, web development, tools and technologies, and the soft skills I bring to collaborative work."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {site.skills.map((group, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <article
              key={group.title}
              className="rounded-2xl border border-border/80 bg-card/45 p-6"
            >
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl text-foreground">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="portfolio-section">
      <SectionHeading
        label="Licenses & certifications"
        title="Learning never stops."
        description="Seven credentials across generative AI, cybersecurity, risk management, networking and data systems."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {site.certifications.map((certification) => (
          <article
            key={`${certification.issuer}-${certification.title}`}
            className="flex gap-4 rounded-2xl border border-border/80 bg-card/45 p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <Award className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="eyebrow">{certification.issuer}</p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">
                {certification.title}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">Issued {certification.issued}</p>
              {"expires" in certification && certification.expires && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Expires {certification.expires}
                </p>
              )}
              {"credentialId" in certification && certification.credentialId && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Credential ID: {certification.credentialId}
                </p>
              )}
              {certification.skills.length > 0 && (
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Associated skills">
                  {certification.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-secondary px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
              {certification.url && (
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded text-xs text-accent hover:text-foreground"
                >
                  View credential <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="portfolio-section border-b-0 pb-4">
      <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-primary/[.13] via-card/75 to-accent/[.08] p-7 sm:p-10">
        <p className="eyebrow">Let's connect</p>
        <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.1] text-foreground sm:text-5xl">
          Have an interesting idea? Let's talk.
        </h2>
        <p className="mt-4 max-w-xl leading-[1.85] text-muted-foreground">
          I'm always interested in conversations about machine learning, natural language
          processing, cybersecurity, data projects and software development.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {onlineLinks
            .filter((link) => link.href)
            .map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                className={`profile-social focus-ring${label === "DSFSI Profile" ? " profile-social-dsfsi" : ""}`}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Open ${label}`}
                title={label}
              >
                <Icon
                  className={label === "DSFSI Profile" ? "h-auto w-16 object-contain" : "h-5 w-5"}
                  aria-hidden="true"
                />
              </a>
            ))}
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="profile-social focus-ring"
              aria-label="Email me"
              title="Email me"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          )}
          {site.links.DSFSI && (
            <a
              href={site.links.DSFSI}
              className="profile-social profile-social-dsfsi focus-ring"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Open DSFSI Profile"
              title="DSFSI Profile"
            >
              <DsfsiLogo className="h-auto w-16 object-contain" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [activeGalleryCollection, setActiveGalleryCollection] = useState<string | null>(null);

  if (activeGalleryCollection) {
    return (
      <GalleryCollection
        collection={activeGalleryCollection}
        onBack={() => setActiveGalleryCollection(null)}
      />
    );
  }

  return (
    <>
      <a
        href="#identity"
        className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:z-50 btn-primary"
      >
        Skip to content
      </a>
      <div className="page-wash" aria-hidden="true" />
      <div className="portfolio-layout relative mx-auto grid max-w-[1440px] gap-6 px-4 py-5 sm:px-6 sm:py-7 lg:grid-cols-[310px_minmax(0,1fr)] lg:items-start lg:gap-8 lg:px-10">
        <ProfileSidebar />
        <main className="min-w-0 rounded-3xl border border-border/80 bg-[#10131c]/90 px-5 pb-8 shadow-[0_32px_90px_rgba(0,0,0,.22)] sm:px-9 lg:px-10">
          <Navigation />
          <Identity />
          <Work />
          <Career />
          <Research />
          <Skills />
          <Certifications />
          <Gallery onOpenCollection={setActiveGalleryCollection} />
          <Contact />
          <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-6 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <a className="focus-ring rounded hover:text-foreground" href="#identity">
              Back to top ↑
            </a>
          </footer>
        </main>
      </div>
    </>
  );
}
