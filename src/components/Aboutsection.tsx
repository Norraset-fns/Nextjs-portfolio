import { Code2, Shield, Cpu, Globe } from 'lucide-react'
function Aboutsection() {
    const stats = [
        { icon: Code2, label: 'Core Technologies', value: '5+' },
        { icon: Cpu, label: 'GPA', value: '3.04' },
        { icon: Globe, label: 'Languages', value: 'TH / EN' },
        { icon: Shield, label: 'Soft Skills', value: '100%' },
    ];
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="terminal-window max-w-4xl mx-auto">
                    <div className="terminal-header">
                        <div className="terminal-dot bg-destructive" />
                        <div className="terminal-dot bg-yellow-500" />
                        <div className="terminal-dot bg-primary" />
                        <span className="ml-4 text-muted-foreground text-sm">C:\Users\Guest&gt; type about.txt</span>
                    </div>

                    <div className="p-8">
                        <h2 className="text-3xl font-bold mb-6 glow-text">
                            <span className="text-muted-foreground"># </span>About Me
                        </h2>
                        <div className="space-y-4 text-foreground/80 mb-8">
                            <p>
                                <span className="text-primary">&gt;</span> Hello! I am Norrasart Somman. I recently graduated from Rajamangala University of Technology Lanna Tak with a degree in Computer Engineering.
                            </p>
                            <p>
                                <span className="text-primary">&gt;</span> My focus is on Web Development. I have hands-on skills in PHP, HTML, CSS, JavaScript, and MySQL, and I am eager to build responsive and functional websites.
                            </p>
                            <p>
                                <span className="text-primary">&gt;</span> Beyond coding, I am a strong believer in Self-learning and Problem-solving. I am highly responsible and ready to start my journey as a professional Developer.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="p-4 border border-border hover:border-primary transition-colors group"
                                >
                                    <stat.icon className="w-8 h-8 text-primary mb-2 group-hover:glow-text transition-all" />
                                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Aboutsection