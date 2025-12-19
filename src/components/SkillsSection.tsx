
const SkillsSection = () => {
    const skills = [
        { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
        { category: 'Backend', items: ['PHP', 'MySQL', 'Database Design'] },
        { category: 'Tools', items: ['MS Word', 'MS Excel', 'PowerPoint', 'Basic Graphic Design'] },
        { category: 'SoftSkills', items: ['Problem-solving', 'Self-learning', 'Responsibility'] },
        { category: 'Languages', items: ['Thai (Native)', 'English (Intermediate)'] },
        { category: 'CareerFocus', items: ['Web Development', 'Frontend Developer', 'Junior Developer', 'Full Stack Learning'] },
    ]

    return (
        <section id="skills" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold glow-text">
                        <span className="text-muted-foreground">$ </span>C:\Users\Guest &gt; dir /skills
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={skillGroup.category}
                            className="terminal-window opacity-0 animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="terminal-header">
                                <div className="terminal-dot bg-destructive" />
                                <div className="terminal-dot bg-yellow-500" />
                                <div className="terminal-dot bg-primary" />
                                <span className="ml-4 text-muted-foreground text-sm">
                                    {skillGroup.category.toLowerCase()}/
                                </span>
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-bold text-accent mb-3 glow-text-accent">
                                    ./{skillGroup.category}
                                </h3>
                                <ul className="space-y-2">
                                    {skillGroup.items.map((skill) => (
                                        <li key={skill} className="flex items-center gap-2 text-foreground/80">
                                            <span className="text-primary">├──</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SkillsSection