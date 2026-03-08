import Link from 'next/link'

export default function Footer({ className = '' }) {
  return (
    <div className={`text-white text-[10px] tracking-widest bg-black flex justify-center items-center px-6 py-3 w-full ${className}`}>
      <Link href="https://www.instagram.com/rawstudio.inc/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">INSTAGRAM</Link>
    </div>
  )
}
