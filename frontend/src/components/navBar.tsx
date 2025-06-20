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
          <a href="/"><Image src="/logo.png" alt="logo" width={160} height={80} /></a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-8">
          <li><a href="/" className="hover:text-orange-600">Home</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
          <li><a href="#about" className="hover:text-orange-600">About</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
        </ul>
      </div>

      {/* Menu - Mobile */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4">
          <li><a href="/" className="hover:text-orange-600">Home</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
          <li><a href="#About" className="hover:text-orange-600">About</a></li>
          <li><a href="#services" className="hover:text-orange-600">Services</a></li>
        </ul>
      )}
    </nav>
  )
}
