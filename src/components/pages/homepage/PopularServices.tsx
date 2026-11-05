import { Card } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight, FaRegFolderOpen } from "react-icons/fa";
import services from "@/data/services.json";

interface Service {
    id: number;
    slug: string;
    title: string;
    category: string;
    description: string;
}

const PopularServices = () => {
    const popularServices: Service[] = services.slice(0, 4);

    return (
        <section className="bg-[#E8F5E9] px-4 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col items-center text-center">
                    <span className="mb-3 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#26704F]">
                        <FaRegFolderOpen />
                        জনপ্রিয় সেবাসমূহ
                    </span>
                    <h2 className="text-3xl font-bold text-[#26704F] sm:text-4xl">
                        প্রয়োজনীয় সেবাগুলো
                    </h2>
                    <p className="mt-3 max-w-xl text-gray-600">
                        নাগরিক জীবনের গুরুত্বপূর্ণ সেবাগুলোর আবেদন প্রক্রিয়া,
                        প্রয়োজনীয় তথ্য ও নির্দেশনা সহজেই জেনে নিন।
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {popularServices.map((service) => (
                        <Card
                            key={service.id}
                            className="group rounded-xl border border-[#E5EEE8] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#26704F]/30 hover:shadow-md"
                        >
                            <div className="flex flex-col">
                                <span className="mb-3 w-fit rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-medium text-[#26704F]">
                                    {service.category}
                                </span>
                                <h3 className="text-base font-bold text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                                    {service.description}
                                </p>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#26704F] transition group-hover:gap-3"
                                >
                                    বিস্তারিত দেখুন
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/services"
                        className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#26704F] to-[#A64B45] px-7 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
                    >
                        সকল সেবা দেখুন
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularServices;