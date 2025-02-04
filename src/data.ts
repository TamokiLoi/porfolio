import { ICON_PATHS, TECHNOLOGIES } from "consts";

export const SKILLS = ["Javascript (ES6+)", "Angular", "Typescript", "React", "Nextjs", "Vuejs", "Nuxtjs", "Nodejs"];

export const PROJECTS = [
    {
        id: 6,
        company_name: "FPT Software",
        position: "Tech Lead Frontend Developer",
        detail: {
            project_name: "ARAP/FA",
            project_description:
                "Fixed Asset System is the management of Fixed/Lease asset in company and is key system for Family Mart Company ERP system",
            responsibilities: [
                "Lead the Frontend team and manage development tasks.",
                "Define source code structure, architecture, and best practices.",
                "Review code, optimize performance, and ensure UI/UX quality.",
                "Support team members in resolving tasks and technical issues. ",
                "Collaborate with designers, backend teams, and product managers.",
                "Mentor developers and guide the team’s technical growth.",
            ],
        },
        time_in: "06/2023",
        time_out: "NOW",
        technologies: [TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.REACT, TECHNOLOGIES.PRIME_REACT],
    },
    {
        id: 5,
        company_name: "StageIT",
        position: "Frontend Developer",
        detail: {
            project_name: "Intercom",
            project_description: "Manage driving, visitor, deliver in-out, call video in condominium in Singapore",
            responsibilities: [
                "Build source code structure Nextjs",
                "Design layout from figma",
                "Support integration data from api with team Backend",
            ],
        },
        time_in: "01/2022",
        time_out: "05/2023",
        technologies: [
            TECHNOLOGIES.TYPESCRIPT,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.REDUX,
            TECHNOLOGIES.TAILWINDCSS,
            TECHNOLOGIES.TWILIO_VIDEO,
        ],
    },
    {
        id: 4,
        company_name: "StageIT",
        position: "Frontend Developer",
        detail: {
            project_name: "ICondo, VMS",
            project_description: "Manage condominium systems in Singapore",
        },
        time_in: "05/2020",
        time_out: "05/2023",
        technologies: [TECHNOLOGIES.TYPESCRIPT, `${TECHNOLOGIES.ANGULAR} 2+`, TECHNOLOGIES.NG_BOOTSTRAP],
    },
    {
        id: 3,
        company_name: "Seldat Inc Vietnam",
        position: "Frontend Developer",
        detail: {
            project_name: "LTS, Talron",
            project_description: "Warehouse Management System",
        },
        time_in: "01/2019",
        time_out: "04/2020",
        technologies: [TECHNOLOGIES.TYPESCRIPT, `${TECHNOLOGIES.ANGULAR} 7`, TECHNOLOGIES.NG_BOOTSTRAP],
    },
    {
        id: 2,
        company_name: "FPT SOFTWARE",
        position: "Frontend Developer",
        detail: {
            project_name: "Kaitori",
            project_description: "Manager system old book store in japan",
        },
        time_in: "01/2018",
        time_out: "12/2018",
        technologies: [TECHNOLOGIES.TYPESCRIPT, `${TECHNOLOGIES.ANGULAR} 4`, TECHNOLOGIES.PRIMENG],
    },
    {
        id: 1,
        company_name: "Luat Van Tin Law Firm",
        position: "SEO & Content Manager",
        detail: {
            project_name: "Luat Van Tin Website",
            project_description: "Manager content, SEO for website of company",
            responsibilities: [
                "Develop a framework and reports to systematically track and improve SEO performance",
                "Develop, manage and provide SEO-related reporting for management teams.",
                "Develop a content marketing strategy across all websites.",
            ],
        },
        time_in: "01/2016",
        time_out: "08/2017",
        technologies: [TECHNOLOGIES.WORDPRESS, TECHNOLOGIES.GOOGLE_ADS, TECHNOLOGIES.FACEBOOK_ADS],
    },
];

export const SIDE_PROJECTS = [
    {
        id: 3,
        company_name: "Evisairport Firm",
        position: "Frontend Developer (Freelancer)",
        detail: {
            project_name: "Evisairport",
            project_description: "Design & developer advertisement website for client",
        },
        time_in: "2023",
        technologies: [
            TECHNOLOGIES.TYPESCRIPT,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.REDUX,
            TECHNOLOGIES.ANT_DESIGN,
            TECHNOLOGIES.TAILWINDCSS,
        ],
        websites: [
            { name: "evisairport", link: "https://evisairport.com/" },
        ],
    },
    {
        id: 2,
        company_name: "Luat Van Tin Law Firm",
        position: "Frontend Developer (Freelancer)",
        detail: {
            project_name: "Luat Van Tin, Van Tin Office",
            project_description: "Design & developer advertisement website for client",
        },
        time_in: "2022",
        technologies: [
            TECHNOLOGIES.TYPESCRIPT,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.NEXTJS,
            TECHNOLOGIES.REDUX,
            TECHNOLOGIES.ANT_DESIGN,
            TECHNOLOGIES.TAILWINDCSS,
        ],
        websites: [
            { name: "luatvantin", link: "https://luatvantin.com.vn/" },
            { name: "vantinoffice", link: "http://vantinoffice.vn/" },
        ],
    },
    {
        id: 1,
        company_name: "Personal Project",
        position: "Frontend Developer",
        detail: {
            project_name: "Read Manga Online",
            project_description: "This app provides an online comic reading feature",
        },
        time_in: "2020",
        technologies: [
            TECHNOLOGIES.TYPESCRIPT,
            TECHNOLOGIES.REACT,
            TECHNOLOGIES.REDUX,
            `${TECHNOLOGIES.REACTSTRAP} (Admin)`,
            `${TECHNOLOGIES.ANT_DESIGN} (Client)`,
            TECHNOLOGIES.NEXTJS,
        ],
    },
];

export const CONTACTS = [
    {
        name: "github",
        src: ICON_PATHS.GITHUB,
        link: "https://github.com/TamokiLoi",
    },
    {
        name: "linkedin",
        src: ICON_PATHS.LINKEDIN,
        link: "https://www.linkedin.com/in/nguyen-lam-thanh-loi-858416141/",
    },
    {
        name: "facebook",
        src: ICON_PATHS.FACEBOOK,
        link: "https://www.facebook.com/loitamoki",
    },
    {
        name: "email",
        src: ICON_PATHS.EMAIL,
        link: "mailto:loinguyenlamthanh@gmail.com",
    },
    {
        name: "phone",
        src: ICON_PATHS.PHONE,
        link: "tel:+84938947221",
    },
];
