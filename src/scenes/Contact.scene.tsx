import { ICON_PATHS } from 'consts'
import React from 'react'

function Contact() {

    const contacts = [
        {
            name: 'github',
            src: ICON_PATHS.GITHUB,
            link: "https://github.com/TamokiLoi",
        },
        {
            name: 'linkedin',
            src: ICON_PATHS.LINKEDIN,
            link: "https://www.linkedin.com/in/nguyen-lam-thanh-loi-858416141/",
        },
        {
            name: 'facebook',
            src: ICON_PATHS.FACEBOOK,
            link: "https://www.facebook.com/loitamoki",
        },
        {
            name: 'email',
            src: ICON_PATHS.EMAIL,
            link: "mailto:loinguyenlamthanh@gmail.com",
        },
        {
            name: 'phone',
            src: ICON_PATHS.PHONE,
            link: "tel:+84938947221",
        },
    ]

    return (
        <div className="flex justify-center gap-7">
            {contacts.map((social, index) =>
                <a
                    key={index}
                    className="hover:opacity-50 transition duration-500"
                    href={social?.link}
                    target={social?.name === 'email' || social?.name === 'phone' ? '_self' : '_blank'}
                    rel="noreferrer"
                >
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                        width={30}
                        height={30}
                        src={social?.src}
                        alt={`${social?.name}-link`}
                    />
                </a>
            )}
        </div>
    )
}

export default Contact