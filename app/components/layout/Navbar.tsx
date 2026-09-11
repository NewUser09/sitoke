import Link from "next/link";
import { User } from "lucide-react";

export default function Navbar() {
    return (
        <header className="bg-blue-400 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-8 py-4 md:px-10 md:py-5">
                <Link href="/" className="text-2xl font-extrabold text-white tracking-tight md:text-3xl">
                    SITOKE
                </Link>

                <div>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-gray-500 hover:text-white hover:bg-blue-600 transition-colors md:w-11 md:h-11">
                        <User className="size-6 md:size-7" />
                    </button>
                </div>
            </div>
        </header>
    )
}