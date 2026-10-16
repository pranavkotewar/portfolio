const SITE = {

  /* ── 1. BROWSER TAB / SEO ───────────────────────────────────────── */
  meta: {
    title: "Pranav Kotewar — Portfolio",
    description: "Pranav Kotewar — Computer Engineering student and full stack developer building web apps with Python and automation tools."
  },

  /* ── 2. BASIC INFO ──────────────────────────────────────────────── */
  name: "Pranav Kotewar",          // First letter is big in hero, leftover accent is in color.
  logo: "PK",                      // Navbar's small logo
  availability: "Available for internships & projects",   // Small tag above hero
  roles: [                         // Typing effect in hero
    "DevOps Enthusiast",
    "DevOps Support Engineer",
    "Cloud/Devops Trainee"
  ],
  intro: "Aspiring DevOps Engineer passionate about automation, CI/CD pipelines, Linux, and containerization..",

  resumeUrl: "file:///C:/Users/Shwet/Downloads/Pranav_Sanjay_Kotewar_FlowCV_Resume_2026-10-02%20(1).pdf",                   // Resume PDF path url

  /* ── 3. LINKS ───────────────────────────────────────────────────── */
  social: {
    email:     "kotewarpranav@gmail.com",
    github:    "https://github.com/pranavkotewar",
    linkedin:  "https://www.linkedin.com/in/pranav-kotewar-0978b0290/",
    twitter:   "",                 
    instagram: ""
  },

  /* ── 4. ABOUT ───────────────────────────────────────────────────── */
  about: {
    heading: "Who Am I?",
  
    paragraphs: [
      "Hey! I'm <strong>Pranav Kotewar</strong>, a Final Year B.Tech Student persuing <strong>Computer Engineering</strong>. working and building hands-on experience with devops tools.",
      "I enjoy <strong>Automation, Deployment, </strong> with Scripting, CICD and sharpening problem solving skills. I am looking for an opportunity where I can apply my skills, learn from real-world projects. "
    ],
    photo: "assets/photo.jpg",     // photo with assets name
    initials: "PK",

    stats: [
      { value: "2",  label: "Projects Built" },
      { value: "1+", label: "Years Learning" },
      
      
    ],
    
    facts: [
      { label: "Location", value: "Maharashtra, India" },
      { label: "Studying", value: "B.Tech Computer Engineering" },
      { label: "Focus",    value: "Software Engineering · DevOps" }
    ]
  },

  /* ── 5. SKILLS ──────────────────────────────────────────────────── */
 
  skills: [
    { category: "WebDev",      items: ["HTML5", "CSS3", "JavaScript (basic)"] },
    { category: "Programming",       items: ["Python", "Java (basic)"] },
    { category: "DevOps & Cloud", items: ["Git", "Linux", "CI/CD", "Docker", "Monitoring"] },
    { category: "Scriptin & languages", items: ["Python", "Shell Script", "Bash", "Yaml"] },
    { category: "Tools",         items: ["VS Code", "VirtualBox", "GitHub", "Splunk"] }
  ],

  /* ── 6. PROJECTS ────────────────────────────────────────────────── */
  
  projects: [
    {
      title: "Personal Portfolio Website",
      tagline: "Fast, responsive and fully content-driven portfolio",
      description: "A modern, responsive portfolio website showcasing my technical skills, projects, and journey as an aspiring DevOps Engineer. Built to highlight my hands-on experience, key projects, and passion for development and automation",
      features: [
        "Responsive layout for mobile, tablet and desktop",
        "Dark / light theme toggle with saved preference",
        "All content editable from one file (content.js)"
      ],
      tech: ["HTML", "CSS", "JavaScript"],
      pipeline: [],                              // Is project me pipeline diagram nahi chahiye
      github: "https://github.com/pranavkotewar/portfolio",   // Repo ka link daalo
      demo: ""                                   // Live site link daalo
    },
    {
      title: "Automated Deployment System with Self-healing and Rollback",
      tagline: "Push code, get it built, tested and deployed automatically",
      description: "A web-based Deployment Automation Platform that simplifies application deployment using Jenkins, Docker, and Linux virtual machines. It features a Flask dashboard, CI/CD integration, passwordless SSH communication, and support for deploying Node.js, Flask, and static web applications across a multi-VM environment.",
      features: [
        "Deploy applications through an integrated Jenkins pipeline.",
        "Integrated Pre-validation before deployment, Self-Healing and HealthCheck Rollback",
        "View build results and deployment status.",
        "Pubically accessible Dashboard over the internet."
      ],
      tech: ["Git", "GitHub", "Linux", "CI/CD", "Docker"],
      // Ye stages diagram me arrows ke saath dikhenge. Apne actual stages se badlo.
      pipeline: ["Code Push", "Build", "Test", "Package", "Deploy", "Live"],
      github: "https://github.com/pranavkotewar/deployment_platform_project",
      demo: "https://deployforge.tailadcab9.ts.net"
    }
  ],

  /* ── 7. EDUCATION / TIMELINE (optional) ─────────────────────────── */
  
  education: [
     { title: "B.Tech Computer Engineering", place: "RTMNU University, Nagpur", period: "2023 – 2027"}
  ],

  /* ── 8. CONTACT ─────────────────────────────────────────────────── */
  contact: {
    heading: "Let's Work Together",
    text: "Have an opportunity, a project idea or just want to say hi? My inbox is open."
  },

  footer: "© 2026 Pranav Kotewar"
};
