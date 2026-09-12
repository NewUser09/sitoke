import { Filter } from "lucide-react";

export default function CategoryDropdownDesktop() {
    return(
        <div className="relative w-full md:w-auto">
            <select className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 font-semibold cursor-pointer text-sm transition-all hover:bg-gray-50 w-45 lg:w-50 truncate">
                <option value="">Semua Kategori</option>
                <option value="Kabel">Kabel</option>
            </select>

            <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none size-4 md:size-5"/>
        </div>
    )
}