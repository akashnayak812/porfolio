import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    luxe,
    kiraanam,
    agro360,
    bank,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Aspiring Software Engineer",
        company_name: "Open for Opportunities",
        icon: web, // Using 'web' as a generic icon since 'work' might not be imported or valid
        iconBg: "#383E56",
        date: "Present",
        points: [
            "Currently seeking internships and full-time job opportunities.",
            "Eager to apply skills in Full Stack Development, AI, and 3D Web Technologies.",
            "Open to collaborations and new challenges.",
        ],
    },
];
const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Agro360",
        description:
            "Developed an AI-driven smart farming platform with an immersive 3D interface, enabling real-time soil analysis, crop disease detection, and personalized multilingual farming insights.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: agro360,
        source_code_link: "https://github.com/akashnayak812/Agro360",
    },
    {
        name: "Java Based Online Banking",
        description:
            "Developed a secure full-stack banking system with features like authentication, fund transfers, and transaction ,Implemented MVC architecture, SHA-256 password hashing, session management, and transactional DBoperations, deployed on Apache Tomcat.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: bank,
        source_code_link: "https://github.com/akashnayak812/Bank",
    },
    {
        name: "Luxe Cars Rental",
        description:
            "A premium car rental platform that allows users to browse and book luxury vehicles. Features a modern, responsive interface with detailed car listings and easy booking management.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "postgresql",
                color: "green-text-gradient",
            },
        ],
        image: luxe,
        source_code_link: "https://github.com/akashnayak812/Luxe-cars-rental",
    },
    {
        name: "Kiraanam",
        description:
            "A comprehensive 3D General Store Management system tailored for small businesses. Features include Inventory Management, Point of Sale (POS), and Debt Account tracking with a 3D immersive UI.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "prisma",
                color: "pink-text-gradient",
            },
            {
                name: "threejs",
                color: "green-text-gradient",
            },
        ],
        image: kiraanam, // Using a placeholder for now, assuming user will update or we use existing
        source_code_link: "https://github.com/akashnayak812/Kiraanam",
    },
];

export { services, technologies, experiences, testimonials, projects };
