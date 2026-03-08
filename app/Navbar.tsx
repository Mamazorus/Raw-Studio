'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateCountdown = () => {
      const targetDate = new Date('2026-03-15T23:59:59').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateCountdown()
    const timer = setInterval(calculateCountdown, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-black text-white px-6 pt-6 pb-3">
      <div className="flex flex-col items-center gap-3">
        <Link href="./"><Image src="/img/rawsport_logo_blanc.svg" alt="logo Raw Studio" width={44} height={44} /></Link>
        <div className="flex text-[10px] tracking-widest items-center justify-center gap-3">
            <div className="flex flex-col items-center gap-0.5">
              <p>{countdown.days}</p>
              <p className="opacity-50">DAYS</p>
            </div>
            <p className="opacity-30 mb-3">:</p>
            <div className="flex flex-col items-center gap-0.5">
              <p>{String(countdown.hours).padStart(2, '0')}</p>
              <p className="opacity-50">HOURS</p>
            </div>
            <p className="opacity-30 mb-3">:</p>
            <div className="flex flex-col items-center gap-0.5">
              <p>{String(countdown.minutes).padStart(2, '0')}</p>
              <p className="opacity-50">MINS</p>
            </div>
            <p className="opacity-30 mb-3">:</p>
            <div className="flex flex-col items-center gap-0.5">
              <p>{String(countdown.seconds).padStart(2, '0')}</p>
              <p className="opacity-50">SECS</p>
            </div>
          </div>
      </div>
    </div>
  )
}
