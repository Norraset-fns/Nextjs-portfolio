"use client";

import Link from "next/link"
import { Terminal, Menu, X } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
const navItems = [
    { href: "#home", name: "Home" },
    { href: "#about", name: "About" },
    { href: "#skills", name: "Skills" },
    { href: "#projects", name: "Projects" },
    { href: "#contact", name: "Contact" },
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="#home" className="flex items-center gap-2 glow-text">
                        <span className="text-lg font-bold">~/portfolio</span>
                        <Terminal className="w-6 h-6" />
                    </Link>
                    {/* desktop navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href}
                                className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:glow-text">
                                <span className="text-primary">$</span> {item.name.toLowerCase()}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </div>
                    {/* mobile navigation */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground cursor-pointer">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-border py-4">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}
                                className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                                <span className="text-primary">$</span> {item.name.toLowerCase()}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
export default Navbar