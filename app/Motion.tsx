'use client'

import React, { useEffect, useRef } from 'react'

export default function Motion() {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        video.play().catch(() => {})
        const handlePause = () => video.play().catch(() => {})
        video.addEventListener('pause', handlePause)
        return () => video.removeEventListener('pause', handlePause)
    }, [])

    return (
        <div className='w-full grow overflow-hidden'>
            <video
                ref={videoRef}
                src='/img/raw-studio-loop.mp4'
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className='w-full h-full object-cover pointer-events-none select-none'
            />
        </div>
    )
}
