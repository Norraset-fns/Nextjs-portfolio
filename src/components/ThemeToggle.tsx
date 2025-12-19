"use client"

import { Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ThemeToggle = () => {
    // ใช้ useTheme แทนการเขียน logic เอง
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-9 h-9" />
    }

    // ฟังก์ชันสลับ Theme
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-foreground hover:opacity-80 transition-opacity"
            aria-label="Toggle Theme"
        >
            {/* เช็ค theme เพื่อโชว์ Icon (รองรับ system theme ด้วยการเช็ค resolvedTheme ถ้าต้องการ) */}
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

export default ThemeToggle