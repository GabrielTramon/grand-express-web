import Image from "next/image"
import logo from "../assets/logo.png"
import Link from 'next/link'

export default function NavBar(){
    return(
        <>
            <nav className="flex bg-white shadow-2xs w-full h-20 items-center">
                <div className="ml-26 mt-3">
                    <Image src={logo} alt="logo" width={160}></Image>
                </div>
                    <ul className="flex gap-8 ml-auto mr-26">
                        <li>
                        <link href="/" className="hover:text-orange-600">Home</link>
                        </li>
                        <li>
                        <link href="contact" className="hover:text-orange-600">Contact</link>
                        </li>
                        <li>
                        <link href="about" className="hover:text-orange-600">About</link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}