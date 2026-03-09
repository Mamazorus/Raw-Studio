'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function Motion() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [posX, setPosX] = useState(50)
    const [isPaused, setIsPaused] = useState(true)
    const dragStart = useRef<{ x: number; startPos: number } | null>(null)
    const overflow = useRef(0)
    const isMobile = useRef(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const tryPlay = () => video.play().catch(() => {})

        video.play().catch(() => { setIsPaused(true) })

        const handlePause = () => {
            setIsPaused(true)
            video.play().catch(() => {})
        }
        const handlePlay = () => setIsPaused(false)
        const handleVisibility = () => { if (!document.hidden) tryPlay() }

        video.addEventListener('pause', handlePause)
        video.addEventListener('play', handlePlay)
        document.addEventListener('visibilitychange', handleVisibility)

        return () => {
            video.removeEventListener('pause', handlePause)
            video.removeEventListener('play', handlePlay)
            document.removeEventListener('visibilitychange', handleVisibility)
        }
    }, [])

    useEffect(() => {
        const computeOverflow = () => {
            const container = containerRef.current
            const video = videoRef.current
            if (!container || !video) return

            isMobile.current = window.innerWidth < 768
            if (!isMobile.current) { overflow.current = 0; return }

            const ratio = video.videoWidth && video.videoHeight
                ? video.videoWidth / video.videoHeight
                : 16 / 9
            const renderedWidth = container.clientHeight * ratio
            overflow.current = Math.max(0, renderedWidth - container.clientWidth)
        }

        let raf = requestAnimationFrame(computeOverflow)
        const video = videoRef.current
        const onMeta = () => { raf = requestAnimationFrame(computeOverflow) }
        video?.addEventListener('loadedmetadata', onMeta)
        window.addEventListener('resize', computeOverflow)
        return () => {
            cancelAnimationFrame(raf)
            video?.removeEventListener('loadedmetadata', onMeta)
            window.removeEventListener('resize', computeOverflow)
        }
    }, [])

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile.current) return
        dragStart.current = { x: e.touches[0].clientX, startPos: posX }
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!dragStart.current || !isMobile.current || overflow.current === 0) return
        const delta = e.touches[0].clientX - dragStart.current.x
        const next = dragStart.current.startPos - (delta / overflow.current) * 100
        setPosX(Math.min(100, Math.max(0, next)))
    }

    const handleTouchEnd = () => { dragStart.current = null }

    const handleTap = () => {
        const video = videoRef.current
        if (!video) return
        video.play().catch(() => {})
    }

    return (
        <div
            ref={containerRef}
            className='w-full grow overflow-hidden relative'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={handleTap}
        >
            <video
                ref={videoRef}
                src='/img/raw-studio-loop.mp4'
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className='w-full h-full object-cover pointer-events-none select-none'
                style={{ objectPosition: `${posX}% 50%` }}
            />
            {isPaused && (
                <div className='absolute inset-0 flex items-center justify-center'>
                    <p className='text-white text-[10px] tracking-widest opacity-60'>TAP TO PLAY</p>
                </div>
            )}
        </div>
    )
}
