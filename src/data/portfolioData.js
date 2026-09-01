export const portfolioData = {
  personal: {
    name: "Eyuel Kassahun",
    shortName: "Eyuel",
    title: "Software Engineer / Full-Stack Developer",
    subtitle: "Backend-First Architecture & Scalable Distributed Systems",
    slogan: "Building ideas into robust, production-grade systems.",
    motto: "Better design. Better code. Better impact. 💙",
    bioHeadline: "Software engineer who crafts reliable backend services, intuitive frontends, and production-ready applications.",
    bio: [
      "I am a passionate software engineer based in Addis Ababa, Ethiopia 🇪🇹, specializing in backend microservices, resilient API design, and high-performance full-stack web and mobile applications.",
      "With 3+ years of building production-grade distributed systems, my core engineering philosophy is rooted in domain-driven design, clean interfaces, and pragmatic scalability. I love taking complex business requirements and architecting them into clean, testable, and maintainable systems.",
      "From municipal smart city platforms handling civic permits to high-throughput financial microservices and offline-first mobile apps, I bridge backend rigor with delightful user experiences."
    ],
    location: "Addis Ababa, Ethiopia",
    email: "eyuelkassahun.dev@gmail.com",
    github: "https://github.com/joel-2112",
    githubUsername: "joel-2112",
    linkedin: "https://linkedin.com/in/eyuel-kassahun-yenew",
    telegram: "https://t.me/Eyuel_joel",
    portfolioUrl: "https://eyuelkassahun.com",
    availability: "Available for Full-Stack, Backend & Contract Engineering Roles",
    statusBadge: "🚀 Open for Opportunities",
    currentFocus: "High-concurrency Go services, Event-driven architectures (Kafka/Redis BullMQ), and Next.js/React ecosystems.",
    profileImage: "/profile.jpg",
    stats: [
      { label: "Years Experience", value: "3+" },
      { label: "Production Apps", value: "15+" },
      { label: "GitHub Repositories", value: "50+" },
      { label: "Cumulative GPA", value: "3.74" }
    ]
  },

  journey: [
    {
      year: "2019",
      title: "Enrolled in Software Engineering",
      institution: "Bahir Dar Institute of Technology (BIT)",
      description: "Started B.Sc. in Software Engineering. Mastered algorithms, data structures, discrete math, database engines, and OOP principles.",
      category: "Education",
      tag: "Academic Foundation",
      doodle: "🎓"
    },
    {
      year: "2023",
      title: "MERN Stack Developer",
      institution: "Science and Technology Commission",
      description: "Built EthioExplore — a nationwide regional tourism discovery and booking platform featuring dynamic search, geo-mapping, and admin analytics.",
      category: "Experience",
      tag: "Government Project",
      doodle: "🏛️"
    },
    {
      year: "2024",
      title: "Graduated with High Distinction (3.74 GPA)",
      institution: "Bahir Dar University / BIT",
      description: "Earned B.Sc. in Software Engineering with 3.74 / 4.0 Cumulative GPA and 71% in the National Exit Exam (top percentile nationwide).",
      category: "Milestone",
      tag: "Graduation",
      doodle: "🏆"
    },
    {
      year: "2025 (Early)",
      title: "Full Stack Engineer",
      institution: "Gerizan Technology PLC",
      description: "Engineered DineIn food delivery dispatch platform with real-time courier tracking and automated SMS gateway (Afrosms) integration.",
      category: "Experience",
      tag: "Mobile & Logistics",
      doodle: "🚚"
    },
    {
      year: "2025 – 2026",
      title: "Backend Developer",
      institution: "Teamwork IT Solutions",
      description: "Architected Smart City Land & Municipal Permit System with CAD integration, plus high-concurrency real-time Telegram gaming systems (Bingo & Lucky Spinner).",
      category: "Experience",
      tag: "Enterprise & Realtime",
      doodle: "🏢"
    },
    {
      year: "2026 – Present",
      title: "Backend Engineer",
      institution: "Eaglelion System Technologies",
      description: "Building scalable financial APIs and super app microservices using Node.js, TypeScript, Go, and event-driven architecture.",
      category: "Current",
      tag: "Fintech & Microservices",
      doodle: "⚡"
    }
  ],

  experience: [
    {
      role: "Backend Developer",
      company: "Eaglelion System Technologies",
      period: "Jun 2026 – Present",
      location: "Addis Ababa, Ethiopia",
      badge: "Current Role",
      accentColor: "#0284c7",
      bullets: [
        "Architecting high-throughput financial microservices and transaction processing pipelines for super app ecosystem.",
        "Developing resilient RESTful and gRPC endpoints in Node.js, TypeScript, and Go with rigorous schema validation.",
        "Optimizing PostgreSQL query execution plans and implementing multi-tier Redis caching to maintain sub-50ms latency under peak load.",
        "Collaborating on CI/CD pipelines, container orchestration with Docker, and automated integration testing."
      ],
      technologies: ["Node.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Docker", "Microservices"]
    },
    {
      role: "Backend Developer",
      company: "Teamwork IT Solutions",
      period: "Mar 2025 – May 2026",
      location: "Addis Ababa, Ethiopia",
      badge: "Smart City & Gaming",
      accentColor: "#0d9488",
      bullets: [
        "Engineered the municipal City Development & Zoning Permit System, digitizing urban planning workflows and property ownership records.",
        "Built real-time multiplayer Telegram betting gaming systems (Bingo & Lucky Spinner) with WebSockets, handling concurrent wager allocations.",
        "Designed relational database schemas with complex RBAC security rules and audit logging for municipal oversight.",
        "Integrated payment gateways and asynchronous background workers using Redis & BullMQ for automated payout queues."
      ],
      technologies: ["React", "Express.js", "Go", "PostgreSQL", "Redis", "WebSockets", "BullMQ"]
    },
    {
      role: "Full Stack Developer",
      company: "Gerizan Technology PLC",
      period: "Jan 2025 – Mar 2025",
      location: "Addis Ababa, Ethiopia",
      badge: "Logistics & Mobile",
      accentColor: "#d97706",
      bullets: [
        "Developed end-to-end features for DineIn delivery mobile application with Flutter and Laravel REST backend.",
        "Integrated Afrosms messaging gateway for instant SMS order confirmations and courier status dispatch.",
        "Implemented real-time geolocation tracking for drivers with Google Maps API and live status websockets."
      ],
      technologies: ["Flutter", "Dart", "Laravel", "MySQL", "Afrosms API", "Google Maps"]
    },
    {
      role: "MERN Stack Developer",
      company: "Science and Technology Commission",
      period: "Mar 2023 – Nov 2024",
      location: "Bahir Dar, Ethiopia",
      badge: "Tourism Platform",
      accentColor: "#7c3aed",
      bullets: [
        "Designed and implemented EthioExplore — an Ethiopian tourism discovery, tour agency verification, and booking platform.",
        "Built responsive web admin portal and customer discovery interfaces using React, Express, MongoDB, and Tailwind CSS.",
        "Created an interactive regional destination directory with localized media galleries and user review verification."
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"]
    }
  ],

  toolbox: {
    backend: [
      { name: "Go (Golang)", note: "Microservices, Goroutines, Gin, High-throughput APIs", level: "Advanced", icon: "🐹" },
      { name: "Node.js & Express", note: "REST APIs, Auth, Async Pipelines", level: "Expert", icon: "🟢" },
      { name: "NestJS", note: "Enterprise TypeScript, Dependency Injection", level: "Advanced", icon: "🐱" },
      { name: "Python (Django/FastAPI)", note: "Data processing, Clean architecture", level: "Proficient", icon: "🐍" },
      { name: "Laravel (PHP)", note: "Rapid API development & MVC", level: "Proficient", icon: "🔴" }
    ],
    frontend: [
      { name: "React.js", note: "Hooks, Context, State machines, Custom animations", level: "Expert", icon: "⚛️" },
      { name: "Next.js", note: "App Router, SSR, SSG, API Routes", level: "Advanced", icon: "▲" },
      { name: "TypeScript", note: "Strict type safety, Generics, Interfaces", level: "Advanced", icon: "📘" },
      { name: "Tailwind CSS", note: "Modern responsive styling, custom design systems", level: "Expert", icon: "🎨" },
      { name: "Three.js / Canvas", note: "3D interactions & Canvas animations", level: "Intermediate", icon: "✨" }
    ],
    mobile: [
      { name: "Flutter", note: "Cross-platform iOS & Android mobile apps", level: "Advanced", icon: "📱" },
      { name: "Dart", note: "State management (Bloc/Provider), Clean Arch", level: "Advanced", icon: "🎯" }
    ],
    database: [
      { name: "PostgreSQL", note: "Complex queries, Indexing, Transactions, JSONB", level: "Advanced", icon: "🐘" },
      { name: "Redis", note: "In-memory caching, Pub/Sub, Rate limiting, Queues", level: "Advanced", icon: "⚡" },
      { name: "MongoDB", note: "Document store, Aggregation pipelines", level: "Advanced", icon: "🍃" },
      { name: "MySQL", note: "Relational schema design, normalization", level: "Proficient", icon: "🐬" }
    ],
    devops: [
      { name: "Docker", note: "Containerization, Multi-stage builds, Compose", level: "Advanced", icon: "🐳" },
      { name: "CI/CD (GitHub Actions)", note: "Automated linting, testing, and deployment", level: "Advanced", icon: "🔄" },
      { name: "Git & Linux", note: "Branching strategies, Bash scripting, Server mgmt", level: "Expert", icon: "🐧" },
      { name: "Kafka & BullMQ", note: "Distributed event queues & background workers", level: "Intermediate", icon: "📬" }
    ]
  },

  projects: [
    {
      id: "pharmacore-pro",
      title: "PharmaCore Pro",
      tagline: "Enterprise Pharmacy & Inventory Management Architecture",
      category: "Featured Enterprise System",
      badge: "Star Project ⭐",
      accent: "#0284c7",
      problem: "Pharmacies struggle with manual batch expiration tracking, stock discrepancies across branches, supplier delay friction, and prescription audit compliance.",
      solution: "Engineered a high-performance inventory system with automated batch tracking, prescription reconciliation, multi-branch synchronization, and role-based operational security.",
      architecture: [
        "Go (Gin) RESTful microservices for ultra-low latency transaction processing.",
        "PostgreSQL with ACID transactions for tamper-proof drug dispensation audits.",
        "Redis caching for lightning-fast inventory SKU searches and real-time stock counts.",
        "Modern responsive web dashboard with live analytics and automated reorder alerts."
      ],
      stack: ["Go (Gin)", "PostgreSQL", "React", "Next.js", "Redis", "Docker", "Tailwind CSS"],
      highlights: [
        "Sub-10ms inventory search across 50,000+ medical SKUs",
        "Automated batch expiry alerting prevents drug spoilage",
        "Role-based access control (Pharmacist, Cashier, Admin)",
        "Audit logging for every prescription dispensation"
      ],
      github: "https://github.com/joel-2112",
      demo: "https://eyuelkassahun.com",
      diagramNote: "Client ──> API Gateway (Go) ──> Inventory Service ──> [PostgreSQL / Redis]"
    },
    {
      id: "municipal-permit",
      title: "Smart City Municipal Permit & Zoning System",
      tagline: "Digitizing Urban Land Governance & Building Permits",
      category: "Civic Enterprise Tech",
      badge: "Teamwork IT Solutions",
      accent: "#0d9488",
      problem: "Urban zoning approvals and land permit applications suffered from paper backlog, lack of applicant transparency, and lengthy verification delays.",
      solution: "Built a centralized digital portal for municipal engineers to review CAD architectural blueprints, verify cadastral parcel records, and issue cryptographically verifiable permits.",
      architecture: [
        "Event-driven approval workflows with strict role-based signoff stages.",
        "PostgreSQL spatial data integration for parcel boundary checks.",
        "Automated citizen SMS notifications via Afrosms on status changes."
      ],
      stack: ["React.js", "Express.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Tailwind"],
      highlights: [
        "Reduced permit processing turnaround by over 60%",
        "Immutable audit trail of all zoning approval stages",
        "Interactive parcel zoning status maps for citizens"
      ],
      github: "https://github.com/joel-2112/teamwork_backend",
      demo: null
    },
    {
      id: "ethioexplore",
      title: "EthioExplore Platform",
      tagline: "Regional Ethiopian Tourism Discovery & Agency Network",
      category: "Web & Mobile Platform",
      badge: "Gov Innovation",
      accent: "#7c3aed",
      problem: "Travelers in Ethiopia lacked a trusted platform to discover authentic regional destinations and book with verified local tour operators.",
      solution: "Created an interactive tourism marketplace connecting travelers with verified operators, featuring localized itinerary builders, reviews, and interactive regional maps.",
      architecture: [
        "React web client + Flutter cross-platform mobile app.",
        "Express REST backend with media optimization and JWT authentication.",
        "Admin moderation portal for vetting tour operator credentials."
      ],
      stack: ["React", "Flutter", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      highlights: [
        "Curated guide to 100+ Ethiopian historical and natural wonders",
        "Verified agency verification badge system",
        "Multi-language support for international travelers"
      ],
      github: "https://github.com/joel-2112",
      demo: "https://eyuel-kassahun.vercel.app"
    },
    {
      id: "dinein-delivery",
      title: "DineIn Courier & Food Delivery",
      tagline: "Real-Time Food Dispatch & Driver Logistics System",
      category: "Mobile Logistics",
      badge: "Gerizan PLC",
      accent: "#ea580c",
      problem: "Restaurants needed an integrated solution for online menu management, live order dispatching, and courier route coordination.",
      solution: "Engineered a Flutter mobile application paired with a robust Laravel backend, real-time Google Maps driver tracking, and instant SMS order confirmations.",
      architecture: [
        "Flutter mobile app with responsive state management (Provider).",
        "Laravel API backend with MySQL relational transactions.",
        "Real-time webhook notifications and Afrosms gateway integration."
      ],
      stack: ["Flutter", "Dart", "Laravel", "MySQL", "Afrosms", "Google Maps API"],
      highlights: [
        "Live GPS tracking for customer order delivery",
        "Merchant dashboard for real-time menu & inventory toggles",
        "Automated customer order receipt via SMS"
      ],
      github: "https://github.com/joel-2112",
      demo: null
    },
    {
      id: "eyu-bingo",
      title: "Eyu Bingo & Lucky Spinner",
      tagline: "High-Concurrency Telegram Mini-App & Gaming Engine",
      category: "Real-Time Systems",
      badge: "High Concurrency",
      accent: "#059669",
      problem: "Building a fair, real-time multiplayer betting game inside Telegram that supports thousands of concurrent players with instant payouts.",
      solution: "Built a high-performance WebSockets backend in Node/Go with Redis Pub/Sub to manage game ticks, number drawing rng, ticket validations, and instant SMS win notifications.",
      architecture: [
        "Telegram Bot + WebApp (TWA) interface.",
        "Redis Pub/Sub for broadcast room state synchronization.",
        "Cryptographically secure pseudo-random number generator for fair draws."
      ],
      stack: ["Go", "Node.js", "WebSockets", "Redis", "Telegram API", "PostgreSQL"],
      highlights: [
        "Low-latency real-time ticket validation (<15ms)",
        "Handles thousands of simultaneous room spectators",
        "Automated SMS withdrawal confirmations"
      ],
      github: "https://github.com/joel-2112/eyu_bingo_sms",
      demo: null
    },
    {
      id: "intern-hub",
      title: "Intern Hub Career Portal",
      tagline: "Candidate Pipeline & Internship Management System",
      category: "Full-Stack Web App",
      badge: "Talent Tech",
      accent: "#2563eb",
      problem: "University graduates needed a streamlined platform to connect with verified tech companies for internships and junior developer roles.",
      solution: "Built an intuitive application portal with resume parsing, role-based application review stages, interview scheduling, and feedback tracking.",
      architecture: [
        "React frontend with Tailwind CSS and modular UI components.",
        "Node/Express backend with JWT authentication and RBAC permissions."
      ],
      stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      highlights: [
        "Applicant tracking board with drag-and-drop status stages",
        "Role-based permissions for recruiters and candidates",
        "Resume preview and direct interview feedback"
      ],
      github: "https://github.com/joel-2112/Intern-Hub",
      demo: null
    }
  ],

  engineeringPhilosophy: {
    title: "How I Think & Build Systems",
    slogan: "Designing resilient backends, clean modular domains, and scalable distributed architectures.",
    pillars: [
      {
        num: "01",
        title: "Domain-Driven & Hexagonal Design",
        description: "Keep core business invariants isolated from transport layers (HTTP/gRPC) and database drivers. Adapters handle external chaos while domain logic stays pure and unit-testable.",
        tag: "Modularity"
      },
      {
        num: "02",
        title: "Decoupled Async Message Pipelines",
        description: "Offload heavy background tasks (SMS notifications, payment webhooks, invoice generation) into Redis BullMQ and Kafka worker queues to protect API latency.",
        tag: "Throughput"
      },
      {
        num: "03",
        title: "Multi-Tier Caching & Query Optimization",
        description: "Profile SQL queries before indexing. Combine in-memory Redis caching with PostgreSQL connection pooling (PgBouncer) for sub-50ms p99 response times under load.",
        tag: "Performance"
      },
      {
        num: "04",
        title: "Zero-Trust Security & Audit Trails",
        description: "Enforce strict Role-Based Access Control (RBAC), cryptographic token validation, and immutable transaction logs across critical municipal and fintech pipelines.",
        tag: "Reliability"
      }
    ],
    productionBlueprint: `[ Clients: React / Next.js / Flutter ]
           │ (HTTPS / WebSockets)
           ▼
[ API Gateway / Reverse Proxy (Nginx / Go) ]
           │
 ┌─────────┴─────────┐
 ▼                   ▼
[ Core Microservices ] ──Async──> [ Redis / BullMQ / Kafka ]
 │                   │                       │
 ▼                   ▼                       ▼
[ PostgreSQL (ACID) ][ Redis (Hot Cache) ]  [ Background Workers ]`
  },

  openSource: [
    {
      name: "Eyu Bingo SMS Engine",
      repo: "joel-2112/eyu_bingo_sms",
      lang: "Dart / Go",
      desc: "Real-time SMS verification and gaming transaction bridge with async worker queues.",
      stars: 1,
      tag: "Realtime"
    },
    {
      name: "Go Lessons & Idioms",
      repo: "joel-2112/go-lessons",
      lang: "Go",
      desc: "Comprehensive code examples covering concurrency, goroutines, channels, interfaces, and patterns.",
      stars: 1,
      tag: "Educational"
    },
    {
      name: "NestJS Better Auth",
      repo: "joel-2112/nestjs-better-auth",
      lang: "TypeScript",
      desc: "Pluggable modular authentication adapter with JWT, Refresh Tokens, and RBAC guards.",
      stars: 1,
      tag: "Library"
    },
    {
      name: "Lets Chat Next (Gemini AI)",
      repo: "joel-2112/lets-chat-next",
      lang: "TypeScript / Next.js",
      desc: "AI conversational playground integrated with Google Gemini API streaming responses.",
      stars: 2,
      tag: "AI / GenAI"
    },
    {
      name: "Nexus ERP Core",
      repo: "joel-2112/nexus-erp",
      lang: "Go",
      desc: "Enterprise resource planning backend modules written in idiomatic Go.",
      stars: 1,
      tag: "Enterprise"
    },
    {
      name: "PDF Preview Fullstack",
      repo: "joel-2112/pdfpreview_frontend",
      lang: "JavaScript / Node",
      desc: "In-browser high-performance PDF annotation and document previewer.",
      stars: 1,
      tag: "Utility"
    }
  ],

  education: {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Bahir Dar Institute of Technology (BIT)",
    location: "Bahir Dar, Ethiopia",
    period: "2019 – 2024",
    status: "Graduated with High Distinction",
    gpa: "3.74 / 4.0",
    exitExam: "71% (Top National Percentile)",
    highlights: [
      "Specialized in Software Architecture, Distributed Databases, and Compiler Design",
      "Completed rigorous 5-year engineering curriculum with capstone distinction",
      "Top-tier score on National Exit Examination (Ministry of Education)"
    ],
    keyCourses: [
      "Advanced Database Systems",
      "Distributed Systems",
      "Algorithms & Complexity",
      "Software Testing & QA",
      "Object-Oriented Analysis & Design",
      "Network Security & Cryptography"
    ]
  },

  tableOfContents: [
    { page: 1, title: "Cover & Welcome", desc: "Start of Eyuel's engineering notebook" },
    { page: 2, title: "About Me & Philosophy", desc: "Identity, core values & Ethiopian touch" },
    { page: 3, title: "My Journey (Timeline)", desc: "Hand-drawn milestones (2019 – Present)" },
    { page: 4, title: "Work Experience Logs", desc: "Eaglelion, Teamwork IT, Gerizan, SciComm" },
    { page: 5, title: "Engineering Toolbox", desc: "Hand-drawn tools: Backend, Frontend, Mobile" },
    { page: 6, title: "PharmaCore Pro", desc: "Featured pharmacy & inventory architecture" },
    { page: 7, title: "Smart City Permit System", desc: "Municipal GIS & zoning permit governance" },
    { page: 8, title: "EthioExplore & Mobile Apps", desc: "Tourism platform & DineIn delivery app" },
    { page: 9, title: "How I Think (System Architecture)", desc: "Engineering methodology & distributed blueprints" },
    { page: 10, title: "Open Source & Experiments", desc: "GitHub contributions, AI chat & tools" },
    { page: 11, title: "Education & Academic Honors", desc: "BIT B.Sc. Software Engineering (3.74 GPA)" },
    { page: 12, title: "The Last Page / Contact", desc: "Let's build something together — Say Hello" }
  ]
};
