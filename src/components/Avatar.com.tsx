import React from 'react'
import { IMAGE_PATHS } from '../consts'

function Avatar() {
    return (
        <div className="flex">
            {/* eslint-disable @next/next/no-img-element */}
            <img
                className="max-w-[6.25rem] h-auto rounded-full grayscale hover:grayscale-0"
                src={IMAGE_PATHS.PROFILE_RANDOM}
                alt="Large avatar" />
        </div>
    )
}

export default Avatar