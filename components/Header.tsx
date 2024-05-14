import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0">
            <div className="h-20 flex items-center border-b bg-background px-4 md:px-6">
                <nav>
                    <ul className="hidden flex-col gap-6 text-base font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                        <li><Link className="text-muted-foreground transition-colors hover:text-foreground"
                                  href="/">Dashboard</Link></li>

                        <li><Link className="text-muted-foreground transition-colors hover:text-foreground" href="/">Quản
                            lý Khoá
                            học</Link></li>

                        <li><Link className="text-muted-foreground transition-colors hover:text-foreground" href="/">Khoá
                            học</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="border-b h-12 px-4 md:px-6 flex items-center">1</div>
        </header>
    )
}