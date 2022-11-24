import { ProjectItem } from 'components'
import { TECHNOLOGIES } from 'consts'

function SideProject() {

    const projects = [
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
            ]
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
            ]
        },
    ]

    return (
        <>
            <h2 className="title__panel">Side Projects</h2>
            {projects.reverse().map((item, index) => (
                <ProjectItem key={index} project={item} />
            ))}
        </>
    )
}

export default SideProject