
"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CategoryFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const category = searchParams.get("category") || "";

    const handleCategoryChange = (value: string) => {
        const params = new URLSearchParams();

        if (value) {
            params.set("category", value);
        }

        router.push(`/services?${params.toString()}`);
    };

    return (
        <select
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-600 outline-none focus:border-[#26704F]"
        >
            <option value="">সকল ক্যাটাগরি</option>
            <option value="নাগরিক সেবা">নাগরিক সেবা</option>
            <option value="শিক্ষা">শিক্ষা</option>
            <option value="স্বাস্থ্য">স্বাস্থ্য</option>
            <option value="যানবাহন ও পরিবহন">যানবাহন ও পরিবহন</option>
            <option value="ভ্রমণ ও পরিচয়">ভ্রমণ ও পরিচয়</option>
        </select>
    );
};

export default CategoryFilter;
