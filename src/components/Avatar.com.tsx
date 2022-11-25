import React from 'react'
import { IMAGE_PATHS } from '../consts'

function Avatar() {
    return (
        <div className="flex">
            {/* eslint-disable @next/next/no-img-element */}
            <img
                className="max-w-[6.25rem] max-h-[6.25rem] w-[6.25rem] h-auto rounded-full grayscale hover:grayscale-0 object-cover"
                src={IMAGE_PATHS.AVATAR}
                alt="Large avatar" />
        </div>
    )
}

export default Avatar