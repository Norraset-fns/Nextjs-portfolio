"use client";

import { useTypingEffect } from "@/hooks/useTypingEffect";
import Image from "next/image";
import Link from "next/link"
import { ChevronDown } from "lucide-react";

const Herosection = () => {
    const roles = [
        'Frontend Developer',
        'PHP & MySQL Developer',
        'Computer Engineer',
        'Web Developer',
    ];
    const typedText = useTypingEffect(roles);
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
            <div className="container mx-auto px-4 text-center">
                <div className="terminal-window max-w-3xl mx-auto">
                    <div className="terminal-header">
                        <div className="terminal-dot bg-destructive" />
                        <div className="terminal-dot bg-yellow-500" />
                        <div className="terminal-dot bg-primary" />
                        <span className="ml-4 text-muted-foreground text-sm">cmd.exe - whoami</span>
                    </div>
                    <div className="p-6 md:p-8 text-left relative">
                        {/* Avatar - positioned on the right */}
                        <div className="flex justify-center mb-6 md:mb-0 md:absolute md:top-8 md:right-8 md:z-10">
                            <div className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary overflow-hidden bg-card avatar-glow">
                                <div className="grid-overlay">
                                    <Image width={100} height={100} alt="Avatar" src="/myprofile.png"
                                        className="w-full h-full object-cover object-[center_35%]" />
                                    <div className="glitch-overlay-1"></div>
                                    <div className="glitch-overlay-2 hue-overlay"></div>
                                </div>
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-2">
                            <span className="text-primary">C:\Users\Guest&gt;</span>:<span className="text-accent">~</span> whoami
                        </p>
                        <h1 className="text-3xl md:text-6xl font-bold mb-4 glow-text animate-flicker">
                            Norrasart Somman
                        </h1>
                        <p className="text-muted-foreground mb-4">
                            <span className="text-primary">C:\Users\Guest&gt;</span>:<span className="text-accent">~</span> type role.txt
                        </p>
                        <div className="text-xl md:text-2xl text-accent mb-6 h-8">
                            <span className="glow-text-accent">{typedText}</span>
                            <span className="cursor-blink">█</span>
                        </div>

                        <p className="text-muted-foreground mb-4">
                            <span className="text-primary">C:\Users\Guest&gt;</span>:<span className="text-accent">~</span> type bio.txt
                        </p>

                        <p className="text-foreground/80 max-w-xl text-sm md:text-base">
                            &gt; Computer Engineering graduate from RMUTL Tak.<br />
                            &gt; Skilled in PHP, HTML, CSS, JS with a focus on problem-solving.<br />
                            &gt; Eager to learn, ready to adapt, and responsible.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold hover:animate-pulse-glow transition-all"
                            >
                                view_projects.bat
                            </Link>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary/10 transition-all border-glow"
                            >
                                contact_me.bat
                            </a>
                        </div>
                    </div>
                </div>
                <a
                    href="#about"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
                >
                    <ChevronDown className="w-8 h-8" />
                </a>
            </div>
        </section>
    )
}
export default Herosection