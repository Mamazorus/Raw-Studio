import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="bg-black text-white px-6 pt-6 pb-3">
      <div className="flex flex-col items-center gap-3">
        <Link href="./"><Image src="/img/rawsport_logo_blanc.svg" alt="logo Raw Studio" width={44} height={44} /></Link>
        <p className="text-[10px] tracking-widest">
          <span className="fade-pulse">XX</span>-04-2026
        </p>
      </div>
    </div>
  )
}
