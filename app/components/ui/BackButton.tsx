"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
    const router = useRouter();

    return (
        <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-600 font-semibold transition-colors md:text-lg"
        >
            <ChevronLeft className="size-5 md:size-6"/>
            Kembali
        </button>
    );
}