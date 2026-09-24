export const services = [
  {
    slug: "full-stack-development",
    icon: "Code2",
    title: "Full Stack Development",
    short: "Web applications, APIs and backend systems built to handle real production load.",
    overview:
      "We design and build web applications end to end — from the interface someone clicks through to the systems that keep data consistent under load. Our full stack teams work across the browser, the API layer and the database, so the pieces are architected together instead of stitched together after the fact.",
    value:
      "A well-built application reduces support tickets, handles growth without a rewrite, and gives your team a codebase they can actually extend. That's the standard we build to.",
    provide: [
      "Web application architecture and development",
      "REST and GraphQL API design",
      "Database schema design and query optimization",
      "Authentication, authorization and session management",
      "Third-party integrations and internal tooling",
    ],
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "Java", "Spring Boot", "PostgreSQL", "MongoDB"],
    approach: [
      "Map the domain and data model before writing UI code",
      "Build the API contract first, so frontend and backend move in parallel",
      "Write integration tests around the paths that matter most",
      "Review architecture at each milestone, not just at the end",
    ],
  },
  {
    slug: "cyber-security",
    icon: "ShieldCheck",
    title: "Cyber Security",
    short: "Security built into the system, not bolted on after a scan finds problems.",
    overview:
      "Security work that starts after launch is expensive and incomplete. We embed security review into architecture, code and deployment — covering authentication design, data handling, dependency risk and infrastructure hardening — so vulnerabilities are caught while they're still cheap to fix.",
    value:
      "Fewer incidents, faster audits, and a system your compliance and legal teams don't have to worry about every release.",
    provide: [
      "Application security review and threat modeling",
      "Secure authentication and access control design",
      "Vulnerability assessment and remediation",
      "Secrets management and infrastructure hardening",
      "Security-focused code review",
    ],
    stack: ["OWASP", "OAuth 2.0 / OIDC", "TLS/PKI", "Vault", "Snyk", "AWS IAM"],
    approach: [
      "Threat-model the system before development starts",
      "Bake security checks into the CI pipeline",
      "Test authentication and authorization paths explicitly",
      "Document findings in plain language, not just scan output",
    ],
  },
  {
    slug: "software-testing-qa",
    icon: "CheckCircle2",
    title: "Software Testing & QA",
    short: "Functional, automation and performance testing that catches issues before users do.",
    overview:
      "Quality engineering runs alongside development, not after it. We build test suites that cover functional behavior, automate the regressions that matter, and load-test systems before they meet real traffic — so releases are something your team trusts, not something they brace for.",
    value:
      "Fewer production incidents, faster release cycles, and a measurable understanding of where the system is fragile.",
    provide: [
      "Manual and exploratory functional testing",
      "Automated regression test suites",
      "Performance and load testing",
      "Test strategy and coverage planning",
      "CI-integrated test pipelines",
    ],
    stack: ["Selenium", "Playwright", "JMeter", "Postman", "JUnit", "Jest"],
    approach: [
      "Define what 'working correctly' means before writing tests",
      "Automate the regressions that would otherwise be manually repeated",
      "Run performance tests against realistic traffic patterns",
      "Report defects with reproduction steps, not just a fail count",
    ],
  },
  {
    slug: "devops",
    icon: "Workflow",
    title: "DevOps",
    short: "CI/CD, containerization and infrastructure automation that make releases routine.",
    overview:
      "We set up the pipelines, containers and monitoring that turn deployment from an event into a routine. That means automated builds and tests on every commit, infrastructure defined as code, and visibility into what's actually happening in production.",
    value:
      "Deployments stop being something to schedule around. Your team ships more often, with less risk each time.",
    provide: [
      "CI/CD pipeline design and implementation",
      "Containerization and orchestration",
      "Infrastructure as code",
      "Monitoring, logging and alerting setup",
      "Release and rollback strategy",
    ],
    stack: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
    approach: [
      "Automate the build and test pipeline first",
      "Containerize services for consistent environments",
      "Define infrastructure as code, not manual configuration",
      "Set up monitoring before the first production release",
    ],
  },
  {
    slug: "cloud-solutions",
    icon: "Cloud",
    title: "Cloud Solutions",
    short: "Cloud architecture, migration and infrastructure that scales with real usage.",
    overview:
      "Whether you're moving an existing system to the cloud or designing a new one cloud-native, we architect for the traffic and reliability requirements you actually have — not a generic reference architecture. That includes cost-aware infrastructure choices and a migration plan that doesn't require downtime you can't afford.",
    value:
      "Infrastructure that scales when you need it to, and a cloud bill that reflects actual usage rather than over-provisioning.",
    provide: [
      "Cloud architecture design",
      "Migration planning and execution",
      "Auto-scaling and load balancing setup",
      "Cost optimization review",
      "Multi-environment infrastructure (dev/staging/prod)",
    ],
    stack: ["AWS", "Docker", "Kubernetes", "Terraform", "CloudFront", "RDS"],
    approach: [
      "Assess current infrastructure and constraints honestly",
      "Design for the scale you need, not the maximum possible",
      "Plan migration in stages with rollback points",
      "Review cost against usage after go-live",
    ],
  },
  {
    slug: "custom-software-development",
    icon: "Settings2",
    title: "Custom Software Development",
    short: "Software shaped around your actual workflow, not a generic template.",
    overview:
      "Off-the-shelf tools work until they don't. When a business process doesn't fit a template, we build software around how the work actually happens — internal tools, enterprise applications and systems that connect to what you already run.",
    value:
      "Software that fits the way your team works, instead of a workaround for software that doesn't.",
    provide: [
      "Requirements discovery and process mapping",
      "Custom application design and development",
      "Enterprise system integration",
      "Internal tooling and admin systems",
      "Long-term maintenance and iteration",
    ],
    stack: ["React.js", "Java", "Spring Boot", "Node.js", "PostgreSQL", "MySQL"],
    approach: [
      "Understand the current process before proposing a system",
      "Prototype the core workflow early for feedback",
      "Build in phases tied to real business milestones",
      "Plan for maintenance from day one, not as an afterthought",
    ],
  },
];
