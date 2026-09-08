"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold transition-colors"
        >
            <ChevronLeft size={22}/>
            Kembali
        </button>
    );
}