import { ProjectItem } from "components";
import { PROJECTS } from "data";

function WorkExperience() {
    return (
        <>
            <h2 className="title__panel">Work Experience</h2>
            {PROJECTS.map((item, index) => (
                <ProjectItem key={index} project={item} />
            ))}
        </>
    );
}

export default WorkExperience;
