// Resume data extracted from Viraj Patil's CV
// Edit this file to update your portfolio content

export const resumeData = {
  profile: {
    name: "Viraj Patil",
    username: "virajpatil",
    role: "Backend Developer",
    location: "Pune, Maharashtra",
    bio: "I build production APIs and data systems with Java, Go, Spring Boot, PostgreSQL, and a bias for simple, observable services.",
    avatar: "/images/20251109-132404.jpg",
    gallery: [
      { src: "/images/profile-formal.jpeg", label: "Formal portrait" },
      { src: "/images/profile-casual.png", label: "Casual portrait" },
      { src: "/images/20251109-132404.jpg", label: "Outdoor portrait" },
    ],
    stats: {
      projects: 4,
      experience: "2.8+",
      techStacks: "25+",
    },
    contact: {
      email: "vrajpatil9891@gmail.com",
      phone: "+91 7414912464",
      portfolio: "https://viraj-patil.dev",
      linkedin: "https://www.linkedin.com/in/vrajptl",
      github: "https://github.com/vrajjptl",
      hackerrank: "https://hackerrank.com/vrajpatil9891",
    },
  },
  highlights: [
    { id: "java", label: "Java", icon: "01" },
    { id: "go", label: "Go", icon: "02" },
    { id: "spring", label: "Spring Boot", icon: "03" },
    { id: "postgres", label: "PostgreSQL", icon: "04" },
    { id: "security", label: "Security", icon: "05" },
    { id: "cloud", label: "Cloud & DevOps", icon: "06" },
  ],
  skills: {
    languages: ["Java", "Go", "Python", "JavaScript", "SQL"],
    frameworks: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Fiber", "React"],
    tools: ["Docker", "Kubernetes", "Jenkins", "Linux", "Git", "AWS EC2"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Query Optimization", "Indexing"],
    dataEngineering: ["REST APIs", "JWT / RBAC", "WebSockets", "ETL", "CI/CD", "Database Functions"],
    browserExtensions: [
      "Manifest V3",
      "Content Scripts",
      "Service Workers",
      "MutationObserver",
      "chrome.storage.sync",
      "Chrome Runtime Messaging",
      "CSS Animations",
      "Performance Optimization",
    ],
  },
  experience: [
    {
      id: "exp-1",
      type: "experience",
      company: "Cleverex Technology",
      role: "Software Developer",
      location: "Pune",
      period: "Mar 2026 - Present",
      image: "",
      description: "Building Go/Fiber services for an enterprise telecom energy-management platform.",
      responsibilities: [
        "Build parameter-driven APIs for daily, weekly, monthly, and yearly energy analysis",
        "Optimize PostgreSQL queries, functions, views, triggers, and tables for telemetry reporting",
        "Process infrastructure data ingested through Apache NiFi and integrate external APIs",
        "Implement Redis caching and JWT authentication and support Docker, Kubernetes, and AWS EC2 deployments",
      ],
      techStack: ["Go", "Fiber", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
      likes: 2026,
    },
    {
      id: "exp-2",
      type: "experience",
      company: "Think It Code It",
      role: "Software Developer",
      location: "Pune",
      period: "Aug 2024 - Mar 2026",
      image: "",
      description: "Built production Java and Spring Boot services for scheduling, payments, and customer operations.",
      responsibilities: [
        "Built REST APIs and persistence layers with Spring Boot, JPA, and PostgreSQL",
        "Secured admin, employee, and customer workflows with Spring Security, JWT, and RBAC",
        "Integrated Stripe, card-terminal, gift-card, and cash payment workflows",
        "Added JUnit and Mockito tests, WebSockets, caching, and Jenkins CI/CD validation",
      ],
      techStack: ["Java", "Spring Boot", "JPA", "PostgreSQL", "JWT", "JUnit", "Jenkins"],
      likes: 1890,
    },
    {
      id: "exp-3",
      type: "experience",
      company: "Tudip Technologies Pvt. Ltd.",
      role: "Associate Software Developer",
      location: "Pune",
      period: "Jan 2024 - Jul 2024",
      image: "",
      description: "Designed data-driven backend APIs and automated ETL workflows with Python.",
      responsibilities: [
        "Designed backend APIs and data models using Python, FastAPI, and MongoDB",
        "Automated data cleaning, transformation, and downstream processing with Pandas",
      ],
      techStack: ["Python", "FastAPI", "MongoDB", "Pandas", "ETL"],
      likes: 740,
    },
  ],
  projects: [
    {
      id: "proj-4",
      type: "project",
      title: "Edge Light for Video Calls",
      company: "Chrome / Edge Browser Extension",
      image: "",
      description:
        "A MacBook-style Edge Lighting extension for Windows that automatically adds customizable screen-edge lighting during video calls.",
      details:
        "Built a Manifest V3 Chrome and Edge extension that detects Google Meet, Microsoft Teams, Slack Huddles, and Zoom calls through getUserMedia hooking and DOM MutationObserver events. It renders a hardware-accelerated, click-through overlay with adjustable 2000K-6500K color temperature, intensity, brightness, auto-start, synced settings, HDR support, and prefers-reduced-motion support while targeting under 5% CPU usage at 60fps.",
      techStack: ["JavaScript ES6", "HTML5", "CSS3", "Manifest V3", "Chrome APIs", "MutationObserver", "getUserMedia", "Performance Optimization"],
      liveUrl: "#",
      likes: 920,
      featured: true,
    },
    {
      id: "proj-3",
      type: "project",
      title: "Tag List & BOM Auto-Generator",
      company: "Freelance Project",
      image: "",
      description:
        "Windows desktop app that turns a master Excel tag list and P&ID ATTEXT file into matched tags, a consolidated BOM, and a Design Qualification Word document.",
      details:
        "Users load both source files, review matched and newly discovered tags in the app, then export Excel and Word reports. The workflow covers file parsing, tag matching, BOM consolidation, report generation, and Windows packaging for a practical engineering documentation tool.",
      techStack: ["Java 17", "JavaFX", "Apache POI", "Excel Export", "Word Export", "Maven", "jpackage", "File Parsing"],
      liveUrl: "#",
      likes: 680,
      featured: true,
    },
    {
      id: "proj-1",
      type: "project",
      title: "GoManage",
      company: "Think It Code It",
      image: "",
      description:
        "Production salon-management SaaS for appointments, payments, staff scheduling, reporting, and role-based workflows.",
      details:
        "Owned backend modules and API integrations across scheduling, customer management, Stripe payments, reporting, and real-time updates.",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "JPA", "JWT/RBAC", "WebSockets", "Stripe", "Jenkins"],
      liveUrl: "#",
      likes: 1243,
      featured: true,
    },
    {
      id: "proj-2",
      type: "project",
      title: "TEMS",
      company: "Cleverex Technology",
      image: "",
      description:
        "Enterprise telecom energy-management platform for near-real-time consumption, KPI, efficiency, and savings analysis.",
      details:
        "Designed API flows for RAN, data centers, IPTX, OSS, and other infrastructure systems with PostgreSQL reporting and React dashboards.",
      techStack: ["Go", "Fiber", "PostgreSQL", "React", "REST APIs", "Redis", "Docker", "AWS EC2"],
      liveUrl: "#",
      likes: 956,
      featured: true,
    },
  ],
  education: [
    {
      id: "edu-1",
      type: "education",
      degree: "B.Tech in Computer Science Engineering",
      score: "86.40%",
      year: "2023",
      image: "",
      likes: 312,
    },
  ],
}

export type ResumeData = typeof resumeData
export type Post =
  | (typeof resumeData.projects)[0]
  | (typeof resumeData.experience)[0]
  | (typeof resumeData.education)[0]
