import React from 'react'

export default function Motion() {
    return (
        <div className='w-full grow overflow-hidden'>
            <video
                src='/img/raw-studio-loop.mp4'
                autoPlay
                loop
                muted
                playsInline
                className='w-full h-full object-cover'
            />
        </div>
    )
}
