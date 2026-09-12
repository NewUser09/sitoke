import Link from "next/link";
import { SearchBarDesktop } from "../common/SearchBar";
import CategoryDropdownDesktop from "../common/FilterDropdown";
import SwitchUserButton from "../ui/SwitchUserButton";

export default function Navbar() {
    return (
        <header className="bg-blue-400 sticky top-0 z-50">
            <div className="max-w-5xl mx-auto w-full flex items-center justify-between px-8 py-4 md:px-10 md:py-5">
                <Link href="/" className="text-2xl font-extrabold text-white tracking-tight md:text-3xl">
                    SITOKE
                </Link>

                <div className="flex-1 max-w-2xl mx-4 md:mx-8 hidden sm:flex items-center gap-3">
                    <div className="flex-1">
                        <SearchBarDesktop/>
                    </div>

                    <CategoryDropdownDesktop/>
                </div>

                <SwitchUserButton/>
            </div>
        </header>
    );
}