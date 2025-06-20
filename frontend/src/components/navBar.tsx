'use client'

import Image from "next/image"
import Link from 'next/link'
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-2xs w-full">
      <div className="flex items-center justify-between h-20 px-4 md:px-10">
        <div className="mt-3 w-full flex justify-center md:justify-start">
          <Link href="/"><Image src="/logo.png" alt="logo" width={160} height={80} /></Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-8">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="#contact" className="hover:text-orange-600">Contact</Link></li>
          <li><Link href="#about" className="hover:text-orange-600">About</Link></li>
          <li><Link href="#services" className="hover:text-orange-600">Services</Link></li>
        </ul>
      </div>

      {/* Menu - Mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4">
          <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
          <li><Link href="#contact" className="hover:text-orange-600">Contact</Link></li>
          <li><Link href="#About" className="hover:text-orange-600">About</Link></li>
          <li><Link href="#services" className="hover:text-orange-600">Services</Link></li>
        </ul>
      )}
    </nav>
  )
}
