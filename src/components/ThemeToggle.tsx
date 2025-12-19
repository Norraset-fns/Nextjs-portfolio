"use client"

import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const ThemeToggle = () => {
    // 1. เริ่มต้นด้วยค่าคงที่เสมอ เพื่อให้ Server และ Client ตรงกันในตอนแรก
    const [theme, setTheme] = useState("dark")

    // 2. สร้างตัวแปรเช็คว่าโหลดเข้า Browser หรือยัง
    const [mounted, setMounted] = useState(false)

    const pathname = usePathname()

    // 3. useEffect นี้ทำงานเฉพาะตอนโหลดเสร็จแล้ว (Client Side Only)
    useEffect(() => {
        setMounted(true)

        const storedTheme = localStorage.getItem("theme")

        if (storedTheme) {
            // 3.1 ถ้าเคยเลือกเองและบันทึกไว้ ให้ใช้ค่านั้น
            setTheme(storedTheme)
        } else {
            // 3.2 ถ้าไม่เคยบันทึก (เข้าเว็บครั้งแรก) ให้เช็คจากคอมพิวเตอร์
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setTheme("dark")
            } else {
                setTheme("light")
            }
        }
    }, [])

    // 4. Update Class และ Storage เมื่อค่า theme เปลี่ยน
    useEffect(() => {
        // ต้องเช็ค mounted ก่อน เพื่อไม่ให้รันตอน Server Render
        if (mounted) {
            const root = window.document.documentElement
            root.classList.remove("light", "dark")
            root.classList.add(theme)
            localStorage.setItem("theme", theme)
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
    }

    // 5. ถ้ายังไม่ Mounted ให้ return null หรือ placeholder ว่างๆ 
    // เพื่อป้องกัน Icon กระพริบผิดอัน หรือ Hydration Error
    if (!mounted) {
        return <div className="w-9 h-9" /> // จองพื้นที่ไว้ขนาดเท่าปุ่มจริง เพื่อกัน Layout Shift
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 text-foreground hover:opacity-80 transition-opacity"
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    )
}

export default ThemeToggle