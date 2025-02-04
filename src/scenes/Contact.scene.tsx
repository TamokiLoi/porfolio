import { CONTACTS } from 'data'

function Contact() {
    return (
        <div className="flex justify-center gap-7">
            {CONTACTS.map((item, index) =>
                <a
                    key={index}
                    className="hover:opacity-50 transition duration-500"
                    href={item?.link}
                    target={item?.name === 'email' || item?.name === 'phone' ? '_self' : '_blank'}
                    rel="noreferrer"
                >
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                        width={30}
                        height={30}
                        src={item?.src}
                        alt={`${item?.name}-link`}
                    />
                </a>
            )}
        </div>
    )
}

export default Contact