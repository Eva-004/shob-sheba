import ServiceCard from "@/components/pages/ServiceCard";
import { Button } from "@heroui/react";
import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import services from "@/data/services.json";
import SearchService from "@/components/pages/SearchService";
import Link from "next/link";

interface ServicesPageProps {
    searchParams: Promise<{
        search?: string;
    }>;
}


const ServicesPage = async ({ searchParams }: ServicesPageProps) => {
    const { search = "" } = await searchParams;

    const query = search.trim().toLocaleLowerCase();

    const filteredServices = services.filter((service) => {
        const titleMatch = service.title.toLocaleLowerCase().includes(query);

        const keywordMatch = service.keywords.some((keyword) =>
            keyword.toLocaleLowerCase().includes(query)
        );

        return titleMatch || keywordMatch;
    });
    return (
        <div className="min-h-screen bg-[#E8F5E9] px-4 py-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-[#26704F] sm:text-4xl">
                        সকল সেবার তথ্য এক জায়গায়
                    </h1>
                    <p className="mt-3 text-gray-600">
                        প্রয়োজনীয় সরকারি ও বেসরকারি সেবার তথ্য খুঁজুন সহজেই।
                        আপনার প্রয়োজন অনুযায়ী সেবা নির্বাচন করুন।
                    </p>
                </div>

                <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <div className="w-full sm:max-w-md">
                        <SearchService />
                    </div>

                    <div className="w-full sm:w-56">
                        <select
                            defaultValue=""
                            className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-600 outline-none focus:border-[#26704F]">
                            <option value="" disabled>ক্যাটাগরি নির্বাচন করুন</option>
                            <option value="নাগরিক সেবা">নাগরিক সেবা</option>
                            <option value="শিক্ষা">শিক্ষা</option>
                            <option value="স্বাস্থ্য">স্বাস্থ্য</option>
                            <option value="যানবাহন ও পরিবহন">যানবাহন ও পরিবহন</option>
                            <option value="ভ্রমণ ও পরিচয়">ভ্রমণ ও পরিচয়</option>
                        </select>
                    </div>
                </div>

                <div className="mb-5">
                    <p className="text-sm text-gray-600">
                        {query ? `"${search}" এর জন্য ${filteredServices.length}টি সেবা পাওয়া গেছে` : `মোট ${filteredServices.length}টি সেবা`}
                    </p>
                </div>
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl bg-white px-4 py-12 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">
                            কোনো সেবা পাওয়া যায়নি!
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            অন্য কোনো নাম বা keyword দিয়ে খুঁজে দেখুন।
                        </p>
                        <Link
                            href="/services"
                            className="mt-5 inline-flex rounded-full bg-[#26704F] px-6 py-3 font-medium text-white transition hover:bg-[#1d5a3e]"  >
                            সকল সেবা দেখুন
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ServicesPage;