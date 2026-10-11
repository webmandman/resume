import { type NextPage } from "next";
import Head from "next/head";

const summary =
        "Hands-on software engineering professional with extensive experience architecting, developing, integrating, and supporting enterprise applications. Combines full-stack engineering expertise with technical leadership, REST API integration, workflow automation, cloud deployment, and production troubleshooting. Experienced in translating business requirements into reliable software, reverse-engineering legacy data structures, and establishing engineering standards. Currently leads two developers while remaining directly responsible for complex implementation work and technical architecture.";

const skills: [string, string[]][] = [
        ["Languages", ["JavaScript", "TypeScript", "SQL", "Python (automation)", "CFML"]],
        ["Frameworks & UI", ["Next.js", "React", "Angular", "AngularJS", "ColdBox", "Telerik UI", "HTML5", "CSS3"]],
        ["Integration & Data", ["REST APIs", "Third-party API integration", "Microsoft SQL Server", "Complex SQL queries", "Stored procedures", "Redis distributed caching", "Data transformation", "Workflow automation"]],
        ["Cloud & DevOps", ["Microsoft Azure", "Azure Blob Storage", "Azure WAF", "Containerized applications", "Amazon S3", "GitHub", "CI/CD", "Pull-request workflows"]],
        ["Testing & Troubleshooting", ["Vitest", "Automated testing", "Root-cause analysis", "Production debugging", "Integration troubleshooting", "Security testing coordination"]],
        ["Design & Documentation", ["System architecture", "User-flow & workflow diagrams", "Automation diagrams", "Business-process mapping", "Developer documentation", "Microsoft Visio", "Balsamiq", "Excalidraw"]],
];

type Role = { title: string; dates: string; intro?: string; heading?: string; bullets: [string | null, string][] };
type Company = { name: string; meta: string; roles: Role[] };

const experience: Company[] = [
        {
                name: "Psomas",
                meta: "March 2014–Present · Civil Engineering, Environmental, Surveying & Construction",
                roles: [
                        {
                                title: "Web Applications Development Manager",
                                dates: "January 2023–Present",
                                intro: "Lead a team of two developers while remaining hands-on in full-stack development, architecture, complex implementation, and production support. Establish engineering standards, review code, mentor developers, and translate business requirements into technical solutions in collaboration with end users and company leadership.",
                                heading: "Selected Engineering Accomplishments",
                                bullets: [
                                        ["Business planning and reporting", "Architected and developed Business Evolution, an enterprise planning and reporting platform launched in 2022 and continuously enhanced. Supports salary, expense, revenue, and project-sharing plans, along with ongoing actual-versus-budget reporting for more than 228 unique planning and special-access users."],
                                        ["Full-stack architecture", "Own the platform's frontend, backend services, business logic, SQL data layer, integrations, and production environment, using React, Telerik UI, BoxLang/ColdBox RESTful services, SQL Server, Redis, and Azure-hosted containers."],
                                        ["Legacy system analysis", "Reverse-engineered undocumented Deltek Vision database structures and inherited SQL reports, mapping data relationships and validating results with Accounting and the CFO to deliver reliable reporting."],
                                        ["Business process automation", "Automated a longstanding budget-export process into Deltek Vantagepoint's planning module, replacing a recurring manual workflow maintained by successive CFOs for more than 20 years."],
                                        ["Enterprise integrations", "Design and maintain employee and project data integrations across UKG UltiPro, Microsoft Entra ID, Deltek Vantagepoint, DataBasics, Unanet, and internal applications using APIs, scheduled database queries, and runtime SQL."],
                                        ["Python automation", "Built and maintain a production automation process that retrieves third-party survey data and generates Word reports; the process has been running for approximately two years."],
                                        ["Modern application engineering", "Develop full-stack applications in a Next.js/Turborepo monorepo, using Vitest for automated testing. Handle complex implementation work, establish shared standards, and coordinate module ownership across the development team."],
                                        ["Production reliability and security", "Investigate root causes across frontend, backend, databases, and integrations. Maintain GitHub pull-request workflows, automated CI/CD, development and staging environments, and additional testing and approval gates for selected critical applications."],
                                        ["Documentation and knowledge transfer", "Create system documentation, user-flow diagrams, workflows, automation diagrams, and business-process maps to improve maintainability and help new developers contribute effectively."],
                                ],
                        },
                        {
                                title: "Senior Web Developer",
                                dates: "August 2021–December 2022",
                                bullets: [
                                        [null, "Designed, developed, and maintained full-stack enterprise applications, taking ownership of frontend interfaces, backend services, database logic, and system integrations."],
                                        [null, "Made technical architecture and technology-stack decisions while collaborating directly with business stakeholders to translate requirements into production applications."],
                                        [null, "Delivered application enhancements and supported production systems, progressively assuming broader technical ownership ahead of promotion to management."],
                                ],
                        },
                        {
                                title: "Web Developer",
                                dates: "March 2014–September 2021",
                                bullets: [
                                        [null, "Developed and maintained enterprise web applications and internal business systems using JavaScript, CFML, SQL, HTML, and CSS."],
                                        [null, "Integrated third-party services and enterprise systems to automate workflows and support business operations."],
                                        [null, "Collaborated with Accounting, Operations, IT, Marketing, and other end users to gather requirements and deliver practical software solutions."],
                                ],
                        },
                ],
        },
        {
                name: "Nikken International, Inc.",
                meta: "August 2006–April 2014 · Irvine, California",
                roles: [
                        {
                                title: "Web Developer",
                                dates: "August 2008–April 2014",
                                bullets: [
                                        ["International e-commerce", "Served as sole developer for an international e-commerce platform supporting more than 60 products across three countries. Built the Angular frontend and CFML backend, including payment processing, database integration, order tracking, purchase history, and deployment."],
                                        ["Consultant attribution", "Implemented customer-to-consultant assignment and personalized referral-link workflows supporting the company's multilevel marketing business model."],
                                        ["Multilingual applications", "Delivered English, Spanish, and French experiences for international customers and consultants."],
                                        ["Consultant business portal", "Independently developed and maintained MyNikken.com, a business portal featuring business reports, customer history, resources, event planning, and awards and recognition, using ASP.NET and custom HTML, CSS, and JavaScript."],
                                        [null, "Worked with the IT Director and assistant to gather requirements and translate business needs into production applications running on company-managed infrastructure."],
                                ],
                        },
                        {
                                title: "Web Designer",
                                dates: "August 2006–August 2008",
                                bullets: [
                                        [null, "Designed and maintained websites and interactive web experiences in collaboration with IT and Marketing, building the foundation for progression into full-stack application development."],
                                ],
                        },
                ],
        },
];

const contacts = [
        ["email", "webmandman@gmail.com", "mailto:webmandman@gmail.com"],
        ["github", "github.com/webmandman", "https://github.com/webmandman"],
        ["web", "danielmejia.dev", "https://danielmejia.dev"],
];

const SectionTitle = ({ n, children }: { n: string; children: string }) => (
        <h2 className="mb-6 flex items-center gap-3 font-mono text-sm uppercase tracking-[0.2em] text-emerald-400 print:text-emerald-700">
                <span className="text-slate-500">{n}.</span>
                {children}
                <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/40 to-transparent" />
        </h2>
);

const Home: NextPage = () => {
        return (
                <>
                        <Head>
                                <title>Daniel Mejia Vera — Full-Stack Engineer & Technical Lead</title>
                                <meta name="description" content={summary} />
                                <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <main className="grid-bg min-h-screen px-4 py-10 font-sans text-slate-300 sm:px-8 sm:py-16 print:p-0 print:text-slate-800">
                                <div className="mx-auto max-w-5xl">
                                        {/* Header */}
                                        <header className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70 shadow-2xl shadow-emerald-500/5 backdrop-blur print:border-0 print:bg-white print:shadow-none">
                                                <div className="flex items-center border-b border-slate-800 pl-4 print:hidden">
                                                        <span className="font-mono text-xs text-emerald-400">
                                                                <span className="text-slate-500">PS C:\Users\daniel&gt;</span> whoami<span className="cursor" />
                                                        </span>
                                                        <div className="ml-auto flex text-slate-400" aria-hidden="true">
                                                                <span className="flex h-9 w-12 items-center justify-center hover:bg-white/10">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M0 5h10" stroke="currentColor" /></svg>
                                                                </span>
                                                                <span className="flex h-9 w-12 items-center justify-center hover:bg-white/10">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10"><rect x="0.5" y="0.5" width="9" height="9" rx="1.5" fill="none" stroke="currentColor" /></svg>
                                                                </span>
                                                                <span className="flex h-9 w-12 items-center justify-center rounded-tr-xl hover:bg-[#c42b1c] hover:text-white">
                                                                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M0 0l10 10M10 0L0 10" stroke="currentColor" /></svg>
                                                                </span>
                                                        </div>
                                                </div>
                                                <div className="flex flex-col gap-8 p-6 sm:p-10 md:flex-row md:items-center">
                                                        <div className="min-w-0">
                                                                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl print:text-slate-900">
                                                                        Daniel <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent print:text-emerald-700">Mejia Vera</span>
                                                                </h1>
                                                                <p className="mt-3 font-mono text-sm uppercase tracking-wider text-slate-400 sm:text-base">
                                                                        Web Applications Development Manager <span className="text-emerald-500">/</span> Full-Stack Engineer &amp; Technical Lead
                                                                </p>
                                                                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
                                                                        {contacts.map(([k, label, href]) => (
                                                                                <li key={k}>
                                                                                        <span className="text-slate-500">{k}:</span>{" "}
                                                                                        <a className="text-cyan-300 underline-offset-4 hover:text-emerald-300 hover:underline print:text-slate-800" href={href}>
                                                                                                {label}
                                                                                        </a>
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                </div>
                                        </header>

                                        <div className="mt-6 space-y-6">
                                                {/* Summary */}
                                                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 sm:p-10 print:border-0 print:bg-white">
                                                        <SectionTitle n="01">Summary</SectionTitle>
                                                        <p className="text-lg leading-relaxed text-slate-300 print:text-slate-800">{summary}</p>
                                                </section>

                                                {/* Experience */}
                                                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 sm:p-10 print:border-0 print:bg-white">
                                                        <SectionTitle n="02">Experience</SectionTitle>
                                                        <div className="space-y-12">
                                                                {experience.map((c) => (
                                                                        <article key={c.name}>
                                                                                <h3 className="text-2xl font-bold uppercase tracking-wide text-white print:text-slate-900">{c.name}</h3>
                                                                                <p className="mt-1 font-mono text-xs text-slate-500">{c.meta}</p>
                                                                                <ol className="mt-6 space-y-10 border-l border-slate-800 pl-6 print:border-slate-300">
                                                                                        {c.roles.map((r) => (
                                                                                                <li key={r.title + r.dates} className="relative">
                                                                                                        <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-slate-950 shadow-[0_0_10px_rgba(52,211,153,0.6)] print:shadow-none" />
                                                                                                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                                                                                                <h4 className="text-lg font-semibold text-slate-100 print:text-slate-900">{r.title}</h4>
                                                                                                                <span className="font-mono text-xs text-emerald-400 print:text-emerald-700">{r.dates}</span>
                                                                                                        </div>
                                                                                                        {r.intro && <p className="mt-3 leading-relaxed">{r.intro}</p>}
                                                                                                        {r.heading && <p className="mt-5 font-mono text-xs uppercase tracking-wider text-slate-500">{"// "}{r.heading}</p>}
                                                                                                        <ul className="mt-3 space-y-3">
                                                                                                                {r.bullets.map(([label, text]) => (
                                                                                                                        <li key={text} className="flex gap-3 leading-relaxed">
                                                                                                                                <span className="mt-0.5 font-mono text-emerald-500">▹</span>
                                                                                                                                <span>
                                                                                                                                        {label && <strong className="font-semibold text-slate-100 print:text-slate-900">{label}: </strong>}
                                                                                                                                        {text}
                                                                                                                                </span>
                                                                                                                        </li>
                                                                                                                ))}
                                                                                                        </ul>
                                                                                                </li>
                                                                                        ))}
                                                                                </ol>
                                                                        </article>
                                                                ))}
                                                        </div>
                                                </section>

                                                {/* Skills */}
                                                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 sm:p-10 print:border-0 print:bg-white">
                                                        <SectionTitle n="03">Technical Skills</SectionTitle>
                                                        <div className="grid gap-6 md:grid-cols-2">
                                                                {skills.map(([group, items]) => (
                                                                        <div key={group}>
                                                                                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">
                                                                                        <span className="text-emerald-500">const</span> {group}
                                                                                </h3>
                                                                                <ul className="flex flex-wrap gap-2">
                                                                                        {items.map((s) => (
                                                                                                <li key={s} className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-xs text-slate-200 transition hover:border-emerald-500/60 hover:text-emerald-300 print:border-slate-300 print:bg-white print:text-slate-800">
                                                                                                        {s}
                                                                                                </li>
                                                                                        ))}
                                                                                </ul>
                                                                        </div>
                                                                ))}
                                                        </div>
                                                </section>

                                                {/* Education */}
                                                <section className="rounded-xl border border-slate-800 bg-slate-950/60 p-6 sm:p-10 print:border-0 print:bg-white">
                                                        <SectionTitle n="04">Education &amp; Professional Development</SectionTitle>
                                                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                                                <h3 className="text-lg font-semibold text-slate-100 print:text-slate-900">Self-directed study in Web Design &amp; Programming</h3>
                                                                <span className="font-mono text-xs text-emerald-400 print:text-emerald-700">2002–2006</span>
                                                        </div>
                                                        <p className="mt-3 leading-relaxed">
                                                                Extensive hands-on professional experience developing and supporting production software, enterprise integrations, and business-critical applications.
                                                        </p>
                                                </section>
                                        </div>

                                        <footer className="mt-10 text-center font-mono text-xs text-slate-600 print:hidden">
                                                <span className="text-emerald-500">❯</span> built with Next.js + Tailwind
                                        </footer>
                                </div>
                        </main>
                </>
        );
};

export default Home;
