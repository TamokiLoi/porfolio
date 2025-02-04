import { ProjectItem } from 'components'
import { SIDE_PROJECTS } from 'data'

function SideProject() {
    return (
        <>
            <h2 className="title__panel">Side Projects</h2>
            {SIDE_PROJECTS.map((item, index) => (
                <ProjectItem key={index} project={item} />
            ))}
        </>
    )
}

export default SideProject