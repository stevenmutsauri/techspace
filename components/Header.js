import { useState } from 'react'
import Link from 'next/link'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold no-underline bg-red-500 text-zinc-50 rounded-lg hover:text-zinc-50" href="/">TECHSPACE</a>
            </div>
            <div className="flex flex-col ">
                <a className=" no-underline text-xl font-medium my-4 hover:text-indigo-600  font-serif text-brand-darkblue  active:text-indigo-600 mx-4 cursor-pointer" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Services
                </a>
                <a className="no-underline text-xl font-normal my-4 hover:text-indigo-600  font-serif text-brand-darkblue  active:text-indigo-600 mx-4 cursor-pointer" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                <a className=" no-underline text-xl font-normal my-4 hover:text-indigo-600  font-serif text-brand-darkblue  active:text-indigo-600 mx-4 cursor-pointer" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold no-underline bg-red-500 text-zinc-50 rounded-lg hover:text-zinc-50" href="/">TECHSPACE</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex text-black-800 mr-40 text-xl space-x-10 no-underline"  >
                 
                    <a href="/" className ="cursor-pointer no-underline text-black hover:text-blue-500" >
                        Home
                    </a>
                   
                
                <a href="/"className =" mx-4 cursor-pointer no-underline text-black hover:text-blue-500" >
                        Services
                    </a>
                    <a href="/contact" className =" mx-4 cursor-pointer no-underline bg-red-500 text-zinc-50 rounded-lg hover:text-zinc-50 ">
                        Contact Us
                    </a>
                    <a href="/about" className ="mx-4 cursor-pointer no-underline text-black hover:text-blue-500">
                        About
                    </a>
                </div>
            </div>
        </nav>
    )
}