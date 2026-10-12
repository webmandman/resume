// All resume content lives here. Edit this file to update the page —
// the component only handles layout and theming.

export const profile = {
  name: 'Daniel Mejia Vera',
  title: 'Web Applications Development Manager',
  subtitle: 'Full-Stack Engineer & Technical Lead',
  email: 'webmandman@gmail.com',
  github: 'https://github.com/webmandman',
  // File placed in /public — served from the site root.
  pdf: '/Daniel-Mejia-Vera-Resume.pdf',
};

export const summary =
  'Web applications engineering professional with extensive experience architecting, integrating, developing and supporting full-featured, user-friendly, best in-class user experience apps. Experienced in REST API integration, workflow automation, cloud deployment, production troubleshooting,  translating business requirements into reliable software, reverse-engineering legacy data structures, and establishing engineering standards. Currently leads two developers while remaining directly responsible for complex implementation work and technical architecture.';

export type Role = {
  title: string;
  dates: string;
  current?: boolean;
  description?: string;
  accomplishments?: { label: string; text: string }[];
  bullets?: { label?: string; text: string }[];
};

export const experience: { company: string; dates: string; meta: string; roles: Role[] }[] = [
  {
    company: 'Psomas',
    dates: 'Mar 2014 – Present',
    meta: 'Civil Engineering, Environmental, Surveying & Construction',
    roles: [
      {
        title: 'Web Applications Development Manager',
        dates: 'Jan 2023 – Present',
        current: true,
        description:
          'Lead a team of two developers while remaining hands-on in full-stack development, architecture, complex implementation, and production support. Establish engineering standards, review code, mentor developers, and translate business requirements into technical solutions in collaboration with end users and company leadership.',
        accomplishments: [
          {
            label: 'Business planning & reporting',
            text: 'Architected and developed Business Evolution, an enterprise planning and reporting platform launched in 2022 and continuously enhanced. Supports salary, expense, revenue, and project-sharing plans, plus ongoing actual-versus-budget reporting for 228+ planning and special-access users.',
          },
          {
            label: 'Full-stack architecture',
            text: "Own the platform's frontend, backend services, business logic, SQL data layer, integrations, and production environment, using React, Telerik UI, BoxLang/ColdBox RESTful services, SQL Server, Redis, and Azure-hosted containers.",
          },
          {
            label: 'Legacy system analysis',
            text: 'Reverse-engineered undocumented Deltek Vision database structures and inherited SQL reports, mapping data relationships and validating results with Accounting and the CFO to deliver reliable reporting.',
          },
          {
            label: 'Business process automation',
            text: "Automated a longstanding budget-export process into Deltek Vantagepoint's planning module, replacing a recurring manual workflow maintained by successive CFOs for more than 20 years.",
          },
          {
            label: 'Enterprise integrations',
            text: 'Design and maintain employee and project data integrations across UKG UltiPro, Microsoft Entra ID, Deltek Vantagepoint, DataBasics, Unanet, and internal applications using APIs, scheduled database queries, and runtime SQL.',
          },
          {
            label: 'Python automation',
            text: 'Built and maintain a production automation process that retrieves third-party survey data and generates Word reports; the process has been running for approximately two years.',
          },
          {
            label: 'Modern application engineering',
            text: 'Develop full-stack applications in a Next.js/Turborepo monorepo, using Vitest for automated testing. Handle complex implementation work, establish shared standards, and coordinate module ownership across the team.',
          },
          {
            label: 'Production reliability & security',
            text: 'Investigate root causes across frontend, backend, databases, and integrations. Maintain GitHub pull-request workflows, automated CI/CD, dev and staging environments, and extra testing and approval gates for selected critical applications.',
          },
          {
            label: 'Documentation & knowledge transfer',
            text: 'Create system documentation, user-flow diagrams, workflows, automation diagrams, and business-process maps to improve maintainability and help new developers contribute effectively.',
          },
        ],
      },
      {
        title: 'Senior Web Developer',
        dates: 'Aug 2021 – Dec 2022',
        bullets: [
          { text: 'Designed, developed, and maintained full-stack enterprise applications, taking ownership of frontend interfaces, backend services, database logic, and system integrations.' },
          { text: 'Made technical architecture and technology-stack decisions while collaborating directly with business stakeholders to translate requirements into production applications.' },
          { text: 'Delivered application enhancements and supported production systems, progressively assuming broader technical ownership ahead of promotion to management.' },
        ],
      },
      {
        title: 'Web Developer',
        dates: 'Mar 2014 – Sep 2021',
        bullets: [
          { text: 'Developed and maintained enterprise web applications and internal business systems using JavaScript, CFML, SQL, HTML, and CSS.' },
          { text: 'Integrated third-party services and enterprise systems to automate workflows and support business operations.' },
          { text: 'Collaborated with Accounting, Operations, IT, Marketing, and other end users to gather requirements and deliver practical software solutions.' },
        ],
      },
    ],
  },
  {
    company: 'Nikken International, Inc.',
    dates: 'Aug 2006 – Apr 2014',
    meta: 'Irvine, California',
    roles: [
      {
        title: 'Web Developer',
        dates: 'Aug 2008 – Apr 2014',
        bullets: [
          { label: 'International e-commerce', text: 'Sole developer for an international e-commerce platform supporting 60+ products across three countries. Built the Angular frontend and CFML backend, including payment processing, database integration, order tracking, purchase history, and deployment.' },
          { label: 'Consultant attribution', text: "Implemented customer-to-consultant assignment and personalized referral-link workflows supporting the company's multilevel marketing business model." },
          { label: 'Multilingual applications', text: 'Delivered English, Spanish, and French experiences for international customers and consultants.' },
          { label: 'Consultant business portal', text: 'Independently developed and maintained MyNikken.com, a business portal featuring business reports, customer history, resources, event planning, and awards and recognition, using ASP.NET and custom HTML, CSS, and JavaScript.' },
          { text: 'Worked with the IT Director and assistant to gather requirements and translate business needs into production applications running on company-managed infrastructure.' },
        ],
      },
      {
        title: 'Web Designer',
        dates: 'Aug 2006 – Aug 2008',
        bullets: [
          { text: 'Designed and maintained websites and interactive web experiences in collaboration with IT and Marketing, building the foundation for progression into full-stack application development.' },
        ],
      },
    ],
  },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'SQL', 'Python (automation)', 'CFML', 'BoxLang'] },
  { group: 'Frameworks & UI', items: ['Next.js', 'React', 'Angular', 'AngularJS', 'ColdBox', 'Telerik UI', 'HTML5', 'CSS3'] },
  { group: 'Integration & Data', items: ['REST APIs', 'Third-party API integration', 'Microsoft SQL Server', 'Complex SQL queries', 'Stored procedures', 'Redis distributed caching', 'Data transformation', 'Workflow automation'] },
  { group: 'Cloud & DevOps', items: ['Microsoft Azure', 'Azure Blob Storage', 'Azure WAF', 'Containerized apps', 'Amazon S3', 'GitHub', 'CI/CD', 'Pull-request workflows'] },
  { group: 'Testing & Troubleshooting', items: ['Vitest', 'Automated testing', 'Root-cause analysis', 'Production debugging', 'Integration troubleshooting', 'Security testing coordination'] },
  { group: 'Design & Documentation', items: ['System architecture', 'User-flow & workflow diagrams', 'Automation diagrams', 'Business-process mapping', 'Developer documentation', 'Visio', 'Balsamiq', 'Excalidraw'] },
];

export const education = {
  title: 'Self-directed study in Web Design & Programming',
  dates: '2002 – 2006',
  text: 'Extensive hands-on professional experience developing and supporting production software, enterprise integrations, and business-critical applications.',
};

export const experiencing = [
  {
    label: 'AI-Powered Business Data Assistant',
    text: 'Experimenting with the user experience of an AI chat assistant connected to enterprise business data through Model Context Protocol (MCP) connectors. Exploring how conversational interfaces can make business information more accessible and enable users to interact with complex data through natural language. Testing a suite of data mcp connectors in Claude live dashboard artifacts.',
  },
  {
    label: 'Generative UI & Interactive AI',
    text: 'Experimenting with AI chat interfaces that generate and render UI components dynamically within the same browser experience. Exploring conversational interactions that produce contextual, interactive interfaces in real time, moving beyond traditional text-only AI responses.',
  },
];
