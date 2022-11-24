import { ProjectItem } from 'components'
import { TECHNOLOGIES } from 'consts'

function WorkExperience() {

    const projects = [
        {
            id: 1,
            company_name: "Luat Van Tin Law Firm",
            position: "SEO & Content MANAGER",
            detail: {
                project_name: "Luat Van Tin Website",
                project_description: "Manager content, SEO for website of company",
                responsibilities: [
                    "Develop a framework and reports to systematically track and improve SEO performance",
                    "Develop, manage and provide SEO-related reporting for management teams.",
                    "Develop a content marketing strategy across all websites."
                ],
            },
            time_in: "01/2016",
            time_out: "08/2017",
            technologies: [
                TECHNOLOGIES.WORDPRESS,
                TECHNOLOGIES.GOOGLE_ADS,
                TECHNOLOGIES.FACEBOOK_ADS,
            ]
        },
        {
            id: 2,
            company_name: "FPT SOFTWARE HCM",
            position: "Frontend Developer",
            detail: {
                project_name: "Kaitori",
                project_description: "Manager system old book store in japan",
            },
            time_in: "01/2018",
            time_out: "12/2018",
            technologies: [
                TECHNOLOGIES.TYPESCRIPT,
                `${TECHNOLOGIES.ANGULAR} 4`,
                TECHNOLOGIES.PRIMENG,
            ]
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
            technologies: [
                TECHNOLOGIES.TYPESCRIPT,
                `${TECHNOLOGIES.ANGULAR} 7`,
                TECHNOLOGIES.NG_BOOTSTRAP,
            ]
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
            time_out: "NOW",
            technologies: [
                TECHNOLOGIES.TYPESCRIPT,
                `${TECHNOLOGIES.ANGULAR} 2+`,
                TECHNOLOGIES.NG_BOOTSTRAP,
            ]
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
                    "Support integration data from api with team Backend"
                ],
            },
            time_in: "01/2022",
            time_out: "NOW",
            technologies: [
                TECHNOLOGIES.TYPESCRIPT,
                TECHNOLOGIES.REACT,
                TECHNOLOGIES.NEXTJS,
                TECHNOLOGIES.REDUX,
                TECHNOLOGIES.TAILWINDCSS,
                TECHNOLOGIES.TWILIO_VIDEO,
            ]
        }
    ]

    return (
        <>
            <h2 className="title__panel">
                Work Experience
            </h2>
            {projects.reverse().map((item, index) => (
                <ProjectItem key={index} project={item} />
            ))}
        </>
    )
}

export default WorkExperience