export const profile = {
  name: "Edwin Anderson",
  role: "Frontend Developer",
  year: 2025,
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Hi, I am Edwin Anderson Frontend Developer",
  description:
    "Bridging creativity and functionality to deliver stunning, user-friendly web applications",
  cta: "Hire me",
  rating: { score: "5.0", caption: "Many Client Trust with me" },
};

export const services = {
  label: "Service",
  title: "My Service Expertise",
  description:
    "Creating modern, intuitive, and visually consistent web experiences that align with industry trends and user expectations.",
  items: [
    {
      title: "Custom Website Development",
      description:
        "Building responsive, fast, and scalable websites tailored to your needs.",
    },
    {
      title: "Web Performance Optimization",
      description:
        "Enhancing website speed, SEO, and overall performance for better user experience.",
    },
    {
      title: "Website Maintenance & Debugging",
      description:
        "Fixing bugs, improving UI, and ensuring smooth performance over time.",
    },
  ],
};

export const about = {
  label: "About me",
  titleLines: [
    { text: "Crafting seamless", highlight: false },
    { text: "high-performance web", highlight: true },
    { text: "experiences", highlight: false },
  ],
  description:
    "I love turning designs into interactive, high-performance websites. With a keen eye for detail and a deep understanding of frontend technologies, I create smooth and visually appealing user experiences.",
};

export const skills = {
  label: "Skills",
  title: "Skills that bring ideas to life",
  bars: [
    { name: "React JS", value: 50 },
    { name: "HTML", value: 80 },
    { name: "Tailwind CSS", value: 90 },
    { name: "HTML", value: 100 },
    { name: "Docker", value: 70 },
    { name: "Javascript", value: 90 },
  ],
  icons: [
    { name: "JavaScript", src: "/icons/skills/javascript.svg" },
    { name: "CSS3", src: "/icons/skills/css.svg" },
    { name: "HTML5", src: "/icons/skills/html.svg" },
    { name: "Express", src: "/icons/skills/express.svg" },
    { name: "MongoDB", src: "/icons/skills/mongodb.svg" },
    { name: "React", src: "/icons/skills/react.svg" },
    { name: "TypeScript", src: "/icons/skills/typescript.svg" },
    { name: "Docker", src: "/icons/skills/docker.svg" },
  ],
};

export const whyMe = {
  label: "Working",
  title: "Why choose me?",
  cta: "Hire me",
  me: {
    heading: "Working with me",
    items: [
      "React Expert",
      "Precise Website Implementation",
      "TypeScript Proficiency",
      "Clean, Maintainable Code",
      "Responsive Website Development",
      "UI Design Proficiency (Figma)",
    ],
  },
  others: {
    heading: "Another Talent",
    items: [
      "Basic React Knowledge",
      "Inconsistent Design Translation",
      "Little to No TypeScript Knowledge",
      "Unstructured Code",
      "Inconsistent Responsiveness",
      "No Design Skills",
    ],
  },
};

const experienceText =
  "Builds responsive and high-performance web applications with clean, maintainable code. Expert in translating UI/UX designs into pixel-perfect interfaces using modern frameworks. Focused on optimizing performance, accessibility, and seamless user experiences.";

export const work = {
  label: "Experience",
  title: "Profesional Work",
  items: [
    { period: "2020 - 2022", role: "Frontend Developer", company: "upwork", description: experienceText },
    { period: "2020 - 2022", role: "Frontend Developer", company: "trello", description: experienceText },
    { period: "2020 - 2022", role: "Frontend Developer", company: "zoom", description: experienceText },
    { period: "2020 - 2022", role: "Frontend Developer", company: "zapier", description: experienceText },
  ],
} as const;

export const portfolio = {
  label: "Portfolio",
  title: "Selected Work",
  cta: "Visit",
  items: [1, 2, 3, 4, 5, 6].map((n) => ({
    title: "Dashboard SaaS Task Management",
    description: "Lorem ipsum dolor sit amet consectetur. Aenean sed commodo aenean nunc lobortis.",
    image: `/images/project-${n}.png`,
    href: "#",
  })),
};

export const testimonials = {
  label: "Testimonials",
  title: "People says about me",
  items: [
    {
      name: "Thom Haye",
      role: "Project Manager",
      company: "upwork",
      quote:
        "“Highly skilled frontend developer with an eye for design. Transformed our wireframes into a seamless and responsive web experience. Highly recommended!”",
    },
    {
      name: "Emily Carter",
      role: "Head of Product",
      company: "trello",
      quote:
        "“An absolute pleasure to work with! Delivered a stunning, high-performance website that exceeded expectations. Attention to detail and problem-solving skills are top-notch!”",
    },
    {
      name: "Sarah Lee",
      role: "Engineering Manager",
      company: "zapier",
      quote:
        "“An exceptional frontend developer with a deep understanding of UI/UX principles. The ability to translate design into pixel-perfect code is truly impressive. A valuable asset to any team!”",
    },
    {
      name: "Michael Brown",
      role: "Lead Developer",
      company: "zoom",
      quote:
        "A pleasure to collaborate with! Writes clean, maintainable code while effectively working with designers and backend engineers. Outstanding work!",
    },
  ],
} as const;

export const faq = {
  label: "FAQ",
  title: "Frequently Asked Questions",
  items: [
    {
      q: "What technologies do you specialize in?",
      a: "I specialize in React.js, Next.js, Vue.js, Tailwind CSS, and TypeScript, ensuring high-performance, scalable, and maintainable web applications.",
    },
    {
      q: "Do you work on both design and development?",
      a: "I focus primarily on frontend development, translating UI/UX designs into responsive and interactive web experiences. However, I collaborate closely with designers to ensure a seamless user experience.",
    },
    {
      q: "Can you optimize an existing website for better performance?",
      a: "Yes! I can analyze, debug, and optimize websites to improve speed, accessibility, and SEO, using best practices like lazy loading, code splitting, and performance monitoring.",
    },
    {
      q: "Do you take freelance or contract-based projects?",
      a: "Yes! I am open to freelance, contract, and full-time opportunities, depending on the project scope and requirements. Feel free to reach out!",
    },
    {
      q: "How do you approach a new project?",
      a: "I start by understanding the project goals and requirements, followed by wireframing or UI implementation, then development, testing, and deployment—ensuring a smooth and efficient workflow.",
    },
    {
      q: "How can we collaborate?",
      a: "You can contact me via email, LinkedIn, or GitHub. I usually begin with a consultation to discuss your needs, then propose a plan to bring your vision to life. Let’s create something awesome together!",
    },
  ],
};

export const contact = {
  label: "Contact",
  title: "Let’s get in touch",
  fields: { name: "Name", email: "Email", message: "Message" },
  submit: "Send Message",
  sending: "Sending...",
  status: "Available for Work",
  socials: [
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  success: {
    title: "Message Sent Successfully!",
    description: "Thank you for reaching out. I’ll get back to you as soon as possible",
    action: "Back to home",
  },
  error: {
    title: "Message not sent!",
    description: "Something went wrong on our end. Please try again in a moment",
    action: "Try again",
  },
};

export const footer = {
  text: `© ${profile.year} ${profile.name}. All rights reserved.`,
};
