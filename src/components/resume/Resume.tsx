import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import styles from './Resume.module.css';
import { type ReactNode } from 'react';
import {
  profile,
  summary,
  experience,
  skills,
  education,
  experiencing,
  type Role as RoleData,
} from './resume-data';
import { ThemeRoot, ThemeToggle } from './ThemeControls';

// Server component: all content renders on the server. Only the theme
// state and toggle button (ThemeControls.jsx) run on the client.
export default function Resume() {
  const fontClasses = `${GeistSans.variable} ${GeistMono.variable}`;

  return (
    <ThemeRoot className={fontClasses}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <div className={styles.container}>
            <nav className={cx(styles.nav, styles.noprint)} aria-label="Site">
              <ThemeToggle>
                <MoonIcon className={styles.iconMoon} />
                <SunIcon className={styles.iconSun} />
              </ThemeToggle>
            </nav>

            <div className={styles.heroBody}>
              <h1 className={styles.name}>{profile.name}</h1>
              <p className={styles.title}>{profile.title}</p>
              <p className={styles.subtitle}>{profile.subtitle}</p>
              <div className={cx(styles.actions, styles.noprint)}>
                <a className={cx(styles.btn, styles.btnPrimary)} href={profile.pdf} download>
                  <DownloadIcon />
                  Download PDF
                </a>
                <a className={styles.btn} href={`mailto:${profile.email}`}>
                  <MailIcon />
                  Email
                </a>
                <a className={styles.btn} href={profile.github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className={cx(styles.container, styles.main)}>
          <section aria-labelledby="summary-h" className={styles.summarySection}>
            <SectionHeading id="summary-h" index="01">Professional summary</SectionHeading>
            <p className={styles.summary}>{summary}</p>
          </section>

          <div className={styles.columns}>
            <div className={styles.primaryCol}>
              <section aria-labelledby="exp-h">
                <SectionHeading id="exp-h" index="02" spacious>Experience</SectionHeading>
                {experience.map((job) => (
                  <article key={job.company} className={styles.company}>
                    <div className={styles.companyHead}>
                      <h3>{job.company}</h3>
                      <span className={styles.mono}>{job.dates}</span>
                    </div>
                    <p className={styles.companyMeta}>{job.meta}</p>

                    <div className={styles.timeline}>
                      {job.roles.map((role) => (
                        <Role key={role.title + role.dates} role={role} />
                      ))}
                    </div>
                  </article>
                ))}
              </section>
            </div>

            <aside className={styles.sideCol}>
              <section aria-labelledby="skills-h">
                <SectionHeading id="skills-h" index="03">Technical skills</SectionHeading>
                <div className={styles.stack}>
                  {skills.map((s) => (
                    <div key={s.group} className={styles.panel}>
                      <div className={styles.overline}>{s.group}</div>
                      <div className={styles.chips}>
                        {s.items.map((item) => (
                          <span key={item} className={styles.chip}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="edu-h" className={styles.eduSection}>
                <SectionHeading id="edu-h" index="04">Education &amp; development</SectionHeading>
                <div className={styles.panel}>
                  <div className={styles.eduTitle}>{education.title}</div>
                  <div className={styles.eduDates}>{education.dates}</div>
                  <p className={styles.eduText}>{education.text}</p>
                </div>
              </section>
            </aside>
          </div>

          <section aria-labelledby="xp-h" className={styles.experiencingSection}>
            <SectionHeading id="xp-h" index="05">Experiencing</SectionHeading>
            <div className={styles.cards}>
              {experiencing.map((a) => (
                <div key={a.label} className={styles.card}>
                  <div className={styles.cardLabel}>{a.label}</div>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={cx(styles.container, styles.footerInner)}>
            <span>{profile.name}</span>
          </div>
        </footer>
      </div>
    </ThemeRoot>
  );
}

const cx = (...classes: (string | false | undefined)[]) => classes.filter(Boolean).join(' ');

function SectionHeading({
  id,
  index,
  spacious = false,
  children,
}: {
  id: string;
  index: string;
  spacious?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <div className={styles.sectionIndex}>{`// ${index}`}</div>
      <h2 id={id} className={cx(styles.sectionTitle, spacious && styles.sectionTitleSpacious)}>
        {children}
      </h2>
    </>
  );
}

function Role({ role }: { role: RoleData }) {
  return (
    <div className={styles.role}>
      <div aria-hidden="true" className={role.current ? styles.dotCurrent : styles.dot} />
      <div className={styles.roleHead}>
        <h4>{role.title}</h4>
        <span className={role.current ? styles.datePillCurrent : styles.datePill}>{role.dates}</span>
      </div>

      {role.description && <p className={styles.roleDesc}>{role.description}</p>}

      {role.accomplishments && (
        <>
          <div className={styles.overline}>Selected engineering accomplishments</div>
          <div className={styles.cards}>
            {role.accomplishments.map((a) => (
              <div key={a.label} className={styles.card}>
                <div className={styles.cardLabel}>{a.label}</div>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {role.bullets && (
        <ul className={styles.bullets}>
          {role.bullets.map((b) => (
            <li key={b.text}>
              {b.label && <strong>{b.label}:</strong>} {b.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Icons (inline stroke SVG, inherit currentColor) ---------- */

const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.8" {...iconProps}>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.8" {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...iconProps}>
      <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.8" {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.8" {...iconProps}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}
