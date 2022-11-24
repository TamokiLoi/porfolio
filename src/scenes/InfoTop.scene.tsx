import Avatar from "components/Avatar.com";

export default function InfoTop() {
    return (
        <div className="flex items-center justify-center md:justify-start">
            <Avatar />
            <div className="ml-8 border-gray-200">
                <h1 className="font-opensans font-normal text-2xl text-light-gray">
                    Tamoki Loi
                </h1>
                <div>Frontend Developer</div>
                <a
                    href="http://example.com/files/myfile.pdf"
                    className="hover:text-light-green"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>
            </div>
        </div>
    )
}