import { Filter } from "lucide-react"

export default function FilterButton() {
    return (
        <button className="p-2.5 rounded-full border border-gray-300 bg-white text-gray-500 hover:text-white hover:bg-blue-600 transition-colors">
            <Filter className="size-5"/>
        </button>
    );
}