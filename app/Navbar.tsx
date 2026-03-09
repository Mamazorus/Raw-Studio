import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="bg-black text-white px-6 pt-6 pb-3">
      <div className="flex flex-col items-center gap-3">
        <Link href="./"><Image src="/img/rawsport_logo_blanc.svg" alt="logo Raw Studio" width={44} height={44} /></Link>
        <div className="flex text-[12px] tracking-widest items-center justify-center gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <p className="fade-pulse">XX</p>
            <p className="opacity-50">DAY</p>
          </div>
          <p className="opacity-30 mb-3">—</p>
          <div className="flex flex-col items-center gap-0.5">
            <p>04</p>
            <p className="opacity-50">MONTH</p>
          </div>
          <p className="opacity-30 mb-3">—</p>
          <div className="flex flex-col items-center gap-0.5">
            <p>2026</p>
            <p className="opacity-50">YEAR</p>
          </div>
        </div>
      </div>
    </div>
  )
}
