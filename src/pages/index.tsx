import { Meta } from "components";
import { About, Contact, InfoTop, SideProject, Skill, WorkExperience } from "scenes";

export default function Home() {
    return (
        <>
            <Meta />
            <div>
                {/* info-top */}
                <div className="mb-8">
                    <InfoTop />
                </div>

                {/* about-me */}
                <div className="mb-8">
                    <About />
                </div>

                {/* skills */}
                <div className="mb-8">
                    <Skill />
                </div>

                {/* work-experience */}
                <div className="mb-8">
                    <WorkExperience />
                </div>

                {/* side-proiects */}
                <div className="mb-8">
                    <SideProject />
                </div>

                {/* contact */}
                <div className="mb-3">
                    <Contact />
                </div>
            </div>
        </>
    )
}
