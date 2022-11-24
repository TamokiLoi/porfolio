import React from 'react'

function Skill() {
    const SKILLS = [
        "Javascript (ES6+)",
        "Angular",
        "Typescript",
        "React",
        "Nextjs",
        "Vuejs",
        "Nuxtjs",
        "Nodejs",
    ]
    return (
        <>
            <h2 className="title__panel">Skills</h2>
            <p>
                Here are a few <strong className="text-light-green">technologies</strong> {"I've"} been working with recently:
            </p>
            <div>
                <ul className="grid gap-2 grid-cols-2 p-0 mt-5 list-none overflow-hidden">
                    {SKILLS.map((item, index) => (
                        <li key={index} className="relative mb-3 pl-5 text-[14px] skill__item">{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Skill