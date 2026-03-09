import Link from 'next/link'
import Button from './Button'

export default function Footer({ className = '' }) {
  return (
    <div className={`text-white text-[10px] tracking-widest bg-black flex justify-center items-center px-6 py-3 w-full ${className}`}>
      <Button href="https://www.instagram.com/rawstudio.inc/" target="_blank">Instagram</Button>
    </div>
  )
}
