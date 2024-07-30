import chatdocprojectimage from "@/../public/chatdocproject.png"
import chatdoclogo from "@/../public/chatdoclogo.png"
import layerui from "@/../public/layerui.png"
import Wecode from "@/../public/we_code logo.jpeg"
import Freelance from "@/../public/freelance.jpg"
import courselogo from "@/../public/100xdevs.jpg"
import spactoprojectimage from "@/../public/specto.png"
import spectologo from "@/../public/spectologo.png"

export const Projectdata = [
    {
        title: "Chatdoc",
        discription: "Developed an AI-driven document chat system,enabling users to upload documents and receive context-aware responses based on the provided content.",
        technology: ["Typescript", "Nextjs", "React", "Prisma", "Trpc", "Aws(s3)", "Openai", "Turborepo", "Tailwindcss", "Langchain", "PostgreeeSql"],
        sourcecode: "https://github.com/Maheshwarreddy970/chatdoc",
        preview: "https://chatdoc-fawn.vercel.app/",
        logo: chatdoclogo,
        image: chatdocprojectimage
    },
    {
        title: "SPECTO",
        discription: "Specto transforms agency management with its comprehensive suite of tools,facilitating goal setting, progress tracking, and web design—all in one platform.",
        technology: ["Typescript", "Nextjs", "React", "Prisma", "Trpc", "Aws(s3)", "Openai", "Turborepo", "Tailwindcss", "Langchain", "PostgreeeSql"],
        sourcecode: "https://github.com/Maheshwarreddy970/chatdoc",
        preview: "https://chatdoc-fawn.vercel.app/",
        logo: spectologo,
        image: spactoprojectimage
    },
]

export const Expriencedata = [
    {
        name: "LAYERUI",
        discription: [
            "Established and led the development of a comprehensive animated UI components library, facilitating streamlined and efficient development processes",
        ],
        logo: layerui,
        time: "Part time",
        title: "Founder | Full-Stack Developer",
        period: "may 2024 - present"
    },
    {
        name: "FREELANCEDEVELOPER",
        discription: [
            "Developed end-to-end web and native applications using React, Next.js, Prisma, Firebase, React Native, Supabase, SQL, and Tailwind CSS based on client requirements.", ""
        ],
        logo: Freelance,
        time: "Full time",
        title: "Full-Stack Developer",
        period: "Jan2024 – May2024"
    },
    {
        name: "WeCode",
        discription: [
            "Enhanced UI forimproved student interaction with the website. ",
            "Optimized backend performance, increasing website speed and efficiency"
        ],
        logo: Wecode,
        time: "Full time",
        title: "WebDevelopmentIntern",
        period: "Jan 2023 – April 2023"
    },
]

export const Coursedata = [
    {
        name: "100XDEVS",
        discription: "Completed 100xdevs course, gaining expertise in MERN stack development, basic DevOps principles, version control with Git, backend fundamentals, and WebRTC technology forreal-time communication applications.",
        technology: ["Typescript", "Nextjs", "React", "Prisma", "Trpc", "Aws(Ec2)", "Docker", "Turborepo", "Tailwindcss", "CI/CD", "Sql", "costum hooks", "graph.ql", "redis"],
        logo: courselogo,
        time: "",
        title: "Student",
        period: "Jun 2023 - Dec 2023"
    },
]