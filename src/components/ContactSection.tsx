import { Linkedin, Facebook, Github, Mail } from "lucide-react";

function ContactSection() {
    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/Norraset-fns' },
        { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/norrasart/' },
        { icon: Mail, label: 'Email:First15449@gmail.com', href: 'mailto:first15449@gmail.com' },
    ];
    return (
        <section id="contact" className="py-20 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold glow-text">
                        <span className="text-muted-foreground">$ </span>./Contact
                    </h2>
                </div>
                <div className="max-w-xl mx-auto grid md:grid-cols-1 gap-8">
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <div className="terminal-dot bg-destructive" />
                            <div className="terminal-dot bg-yellow-500" />
                            <div className="terminal-dot bg-primary" />
                            <span className="ml-4 text-muted-foreground text-sm">social_links.txt</span>
                        </div>
                        <div className="p-6">
                            <p className="text-muted-foreground mb-6">
                                <span className="text-primary">&gt;</span> Feel free to reach out through any of these channels:
                            </p>
                            <div className="space-y-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 border border-border hover:border-primary hover:bg-secondary/20 transition-all group"
                                    >
                                        <link.icon className="w-6 h-6 text-primary group-hover:glow-text transition-all" />
                                        <span className="text-foreground group-hover:glow-text transition-all">
                                            {link.label}
                                        </span>
                                        <span className="ml-auto text-muted-foreground text-sm">
                                            [CONNECT]
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <div className="mt-8 p-4 border border-border bg-background/50">
                                <p className="text-muted-foreground text-sm">
                                    <span className="text-primary">$</span> echo "Response time: Unknown"<br />
                                    <span className="text-accent">&gt;</span> Response time: Unknown
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection