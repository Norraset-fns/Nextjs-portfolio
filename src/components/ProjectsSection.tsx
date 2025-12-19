import { Github, ExternalLink, Star } from "lucide-react"
interface Project {
    title: string;
    description: string;
    tags: string[];
    stars: number;
    link: string;
    github: string;
    note?: string;
}
const projects: Project[] = [
    {
        title: '1stReact-portfolio',
        description: 'โปรเจกต์แรกในการเรียนรู้ React และการทำ Portfolio',
        tags: ['React', 'JavaScript'],
        stars: 0,
        link: '#',
        github: 'https://github.com/Norraset-fns/1stReact-portfolio',
    },
    {
        title: 'game-review',
        description: 'เว็บรีวิวเกมแบบ Static',
        tags: ['HTML', 'CSS'],
        stars: 0,
        link: 'https://norraset-fns.github.io/profile.github.io/',
        github: 'https://github.com/Norraset-fns/profile.github.io',
        note: 'ข้อมูลและแนวคิดอ้างอิงจากเว็บอื่น ใช้เพื่อการเรียนรู้'
    },
    {
        title: 'learn-react',
        description: 'โปรเจกต์ฝึกและทดลองใช้งาน React',
        tags: ['React', 'Learning'],
        stars: 0,
        link: 'https://norraset-fns.github.io/learn-react/',
        github: 'https://github.com/Norraset-fns/learn-react',
    },

]
const ProjectsSection = () => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold glow-text">
                        <span className="text-muted-foreground">$ </span>./projects/
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="terminal-window group hover:border-primary transition-all duration-300 opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="terminal-header">
                                <div className="terminal-dot bg-destructive" />
                                <div className="terminal-dot bg-yellow-500" />
                                <div className="terminal-dot bg-primary" />
                                <span className="ml-4 text-muted-foreground text-sm">
                                    {project.title.toLowerCase()}.exe
                                </span>
                                <div className="ml-auto flex items-center gap-1 text-muted-foreground">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm">{project.stars}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:glow-text transition-all">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4">{project.description}</p>
                                {project.note && (
                                    <p className="text-xs text-muted-foreground mb-4 italic">
                                        <span className="opacity-70">หมายเหตุ:</span> {project.note}
                                    </p>
                                )}

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs bg-secondary text-secondary-foreground border border-border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {/* ถ้า link ไม่ว่าง และไม่ใช่ '#' ให้แสดงปุ่ม */}
                                    {project.link && project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            className="flex items-center gap-1 text-accent hover:glow-text-accent transition-all"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                    <a
                                        href={project.github}
                                        className="flex items-center gap-1 text-foreground hover:glow-text transition-all"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Source</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default ProjectsSection