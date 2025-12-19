import { Terminal } from "lucide-react"
const Footer = () => {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Terminal className="w-5 h-5" />
                        <span>© {new Date().getFullYear()} Norrasart. All rights reserved.</span>
                    </div>

                    <div className="text-muted-foreground text-sm">
                        <span className="text-primary">[</span>
                        Built with passion and lots of cookies
                        <span className="text-primary">]</span>
                    </div>
                </div>

                <div className="mt-4 text-center text-muted-foreground text-xs">
                    <span className="text-primary">$</span> echo "สวัสดีครับ"
                    <span className="cursor-blink ml-1">█</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer