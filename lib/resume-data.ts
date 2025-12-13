// Resume data extracted from Viraj Patil's CV
// Edit this file to update your portfolio content

export const resumeData = {
  profile: {
    name: "Viraj Patil",
    username: "vrajjptl",
    role: "Java Backend Developer",
    location: "Sangli, Maharashtra",
    bio: "Building scalable server-side applications with Spring Boot and SQL. 1.6+ years crafting RESTful APIs, secure auth, and high-performance solutions.",
    avatar: "/images/20251109-132404.jpg",
    stats: {
      projects: 2,
      experience: "1.6+",
      techStacks: 15,
    },
    contact: {
      email: "vrajjptl9891@gmail.com",
      phone: "+91 7414912464",
      portfolio: "https://viraj-patil.dev",
      linkedin: "www.linkedin.com/in/vrajptl",
      github: "https://github.com/vrajjptl",
      hackerrank: "https://hackerrank.com/vrajpatil9891",
    },
  },
  highlights: [
    { id: "java", label: "Java", icon: "☕" },
    { id: "spring", label: "Spring", icon: "🌱" },
    { id: "sql", label: "SQL", icon: "🗄️" },
    { id: "dbms", label: "DBMS", icon: "📊" },
    { id: "data-eng", label: "Data Eng", icon: "⚙️" },
    { id: "python", label: "Python", icon: "🐍" },
    { id: "react", label: "React", icon: "⚛️" },
    { id: "docker", label: "Docker", icon: "🐳" },
  ],
  skills: {
    languages: ["Java (Core & Advanced)", "Python", "SQL", "NoSQL", "HTML", "CSS", "JavaScript"],
    frameworks: ["Spring", "Spring Boot", "FastAPI", "React", "Bootstrap", "Tailwind CSS"],
    tools: ["Linux", "Git", "GitLab", "Docker", "Jenkins"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    dataEngineering: ["ETL Pipelines", "Data Processing", "Database Optimization", "Query Performance Tuning"],
  },
  experience: [
    {
      id: "exp-1",
      type: "experience",
      company: "Thinkitcodeit Pvt Ltd",
      role: "Java Backend Developer",
      location: "Pune",
      period: "August 2024 - Current",
      image: "/modern-office-building-tech-company.jpg",
      description: "Developing high-performance backend systems for production applications.",
      responsibilities: [
        "Developed and optimized high-performance RESTful APIs using Spring Boot with caching and pagination",
        "Designed and normalized SQL and PostgreSQL database schemas with optimal indexing strategies",
        "Built secure authentication and authorization modules using Spring Security (JWT-based)",
        "Implemented exception handling, validation, and logging across microservice layers",
        "Integrated external APIs including payment gateways and AI services",
        "Implemented WebSocket real-time communication with asynchronous processing",
        "Collaborated with frontend (React) and DevOps teams for CI/CD deployment",
        "Developed Python automation scripts and desktop tools for ETL pipelines",
      ],
      techStack: ["Spring Boot", "PostgreSQL", "Spring Security", "Docker", "GitLab", "Python"],
      likes: 847,
    },
    {
      id: "exp-2",
      type: "experience",
      company: "Prudour Pvt Ltd",
      role: "Web Developer Intern",
      location: "Pune",
      period: "April 2023 - September 2023",
      image: "/web-development-workspace-laptop.jpg",
      description: "Built custom WordPress solutions with responsive design.",
      responsibilities: [
        "Designed and developed custom WordPress templates using HTML, Tailwind CSS, JS, and PHP",
        "Ensured responsive design across all devices and browsers",
      ],
      techStack: ["WordPress", "HTML", "Tailwind CSS", "JavaScript", "PHP"],
      likes: 423,
    },
  ],
  projects: [
    {
      id: "proj-1",
      type: "project",
      title: "Smart Panchayat",
      company: "Thinkitcodeit Pvt Ltd",
      image: "/digital-governance-dashboard-india-rural.jpg",
      description:
        "Digital governance system for Gram Panchayats enabling tax collection, QR code payments, digital records, and financial reporting.",
      details:
        "Built backend modules, REST APIs, and caching layers to improve performance and multi-device accessibility. Enables seamless digital transformation for rural governance.",
      techStack: ["Spring Boot", "Spring Security", "Thymeleaf", "Bootstrap", "PostgreSQL", "JPA", "JavaScript"],
      liveUrl: "#",
      likes: 1243,
      featured: true,
    },
    {
      id: "proj-2",
      type: "project",
      title: "GoManage",
      company: "Thinkitcodeit Pvt Ltd",
      image: "/salon-management-booking-app-interface.jpg",
      description:
        "Production-grade salon management platform supporting appointments, payment workflows, and staff scheduling.",
      details:
        "Features VAT-compliant financial reports, Stripe payments, real-time notifications, and package/voucher logic. Built and optimized REST APIs, improved MySQL query performance, and participated in automated CI/CD pipelines via Jenkins.",
      techStack: ["Java", "Spring Boot", "REST APIs", "MySQL", "React", "Stripe", "WebSockets", "Jenkins"],
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
      image: "/university-graduation-cap-books.jpg",
      likes: 312,
    },
  ],
}

export type ResumeData = typeof resumeData
export type Post =
  | (typeof resumeData.projects)[0]
  | (typeof resumeData.experience)[0]
  | (typeof resumeData.education)[0]
