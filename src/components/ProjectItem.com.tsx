import React, { Fragment } from 'react'

type Props = {
    project: any
}

function ProjectItem({ project }: Props) {
    return (
        <div className="grid grid-cols-6 mb-6 bg-medium-blue p-2 rounded">
            <div className="col-span-2 text-[13px] md:text-base pt-1 md:pt-0">
                <span>{project?.time_in}</span>
                {project?.time_out && <span className={project?.time_out === "NOW" ? "text-light-gray" : ""}> - {project?.time_out}</span>}
            </div>
            <div className="col-span-4 ml-2 md:ml-0">
                <h3 className="mb-4">
                    <strong className="text-light-gray text-[16px]">
                        {project?.company_name}
                    </strong>
                    <p className="text-light-green">
                        @ {project?.position}
                    </p>
                </h3>
                <p>
                    <strong className="text-light-gray">Project</strong>: {project?.detail?.project_name}.
                </p>
                <p>
                    <strong className="text-light-gray">Description</strong>: {project?.detail?.project_description}.
                </p>
                {project?.detail?.responsibilities && (
                    <div>
                        <p>
                            <strong className="text-light-gray">
                                Responsibility
                            </strong>:
                        </p>
                        <ul>
                            {project?.detail?.responsibilities.map((res: string, resIndex: number) => (
                                <li key={resIndex} className="relative mb-3 pl-5 text-[14px] skill__item">
                                    {res}.
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <div>
                    {project?.technologies?.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="text-[14px]">
                            <span className="text-light-green capitalize opacity-50">{tech}</span>
                            {project?.technologies?.length != (techIndex + 1) && <> • </>}
                        </span>
                    ))}
                </div>

                {project?.websites && (
                    <div className="mt-4">
                        {project?.websites?.map((web: any, webIndex: number) => (
                            <Fragment key={webIndex}>
                                <a
                                    key={webIndex}
                                    href={web?.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mb-4 hover:text-light-green"
                                >
                                    <span>{web?.name}</span>
                                </a>
                                {project?.websites?.length != (webIndex + 1) && <> • </>}
                            </Fragment>
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}

export default ProjectItem