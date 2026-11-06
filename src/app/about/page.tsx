
import { Card } from "@heroui/react";
import {
    FaBullseye,
    FaEye,
    FaHeart,
    FaCheckCircle,
    FaInfoCircle,
} from "react-icons/fa";

type Feature = {
    id: number;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        id: 1,
        title: "সেবার যোগ্যতা",
        description: "কোন সরকারি সেবা কারা গ্রহণ করতে পারবেন, তা সহজভাবে জানুন।",
    },
    {
        id: 2,
        title: "প্রয়োজনীয় কাগজপত্র",
        description: "আবেদনের জন্য কী কী ডকুমেন্ট প্রয়োজন, তার তালিকা দেখুন।",
    },
    {
        id: 3,
        title: "আবেদন প্রক্রিয়া",
        description: "ধাপে ধাপে আবেদন করার নিয়ম ও প্রয়োজনীয় নির্দেশনা জানুন।",
    },
    {
        id: 4,
        title: "সরকারি ওয়েবসাইট",
        description: "সরাসরি সংশ্লিষ্ট সরকারি পোর্টালে যাওয়ার লিংক পান।",
    },
];

const AboutPage = () => {
    return (
        <main >
            <section className="px-4 py-16 md:py-20">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="rounded-full bg-[#E8F5F0] px-4 py-2 text-sm font-medium text-[#006A4E]">
                        আমাদের সম্পর্কে
                    </span>

                    <h1 className="mt-6 text-3xl font-bold text-[#243A34] md:text-5xl">
                        সরকারি সেবার তথ্য এখন
                        <span className="text-[#006A4E]"> আরও সহজে</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600">
                        সব সেবা একটি তথ্যভিত্তিক প্ল্যাটফর্ম, যেখানে বাংলাদেশের
                        বিভিন্ন সরকারি সেবা সম্পর্কে প্রয়োজনীয় তথ্য সহজ
                        বাংলায় উপস্থাপন করা হয়। আমাদের লক্ষ্য হলো নাগরিকদের
                        সঠিক তথ্য খুঁজে পেতে সহায়তা করা।
                    </p>
                </div>
            </section>

            <section className="px-4 pb-16">
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                    <Card className="border border-gray-100 bg-white p-6 shadow-sm">
                        <Card.Content className="flex flex-col gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5F0] text-xl text-[#006A4E]">
                                <FaBullseye />
                            </div>

                            <h2 className="text-xl font-semibold text-[#243A34]">
                                আমাদের লক্ষ্য
                            </h2>

                            <p className="leading-7 text-gray-600">
                                সরকারি সেবার জটিল তথ্যগুলো সহজ বাংলায় তুলে
                                ধরা, যেন নাগরিকরা প্রয়োজনীয় তথ্য বুঝে সঠিক
                                নিয়মে আবেদন করতে পারেন।
                            </p>
                        </Card.Content>
                    </Card>

                    <Card className="border border-gray-100 bg-white p-6 shadow-sm">
                        <Card.Content className="flex flex-col gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5F0] text-xl text-[#006A4E]">
                                <FaEye />
                            </div>

                            <h2 className="text-xl font-semibold text-[#243A34]">
                                আমাদের উদ্দেশ্য
                            </h2>

                            <p className="leading-7 text-gray-600">
                                সরকারি সেবার যোগ্যতা, প্রয়োজনীয় কাগজপত্র,
                                আবেদন পদ্ধতি এবং ফি সম্পর্কে তথ্য এক জায়গায়
                                সহজে পৌঁছে দেওয়া।
                            </p>
                        </Card.Content>
                    </Card>
                </div>
            </section>

            <section className="bg-white px-4 py-16">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-2xl font-bold text-[#243A34] md:text-3xl">
                            আমাদের প্ল্যাটফর্মে যা পাবেন
                        </h2>
                        <p className="mt-3 text-gray-600">
                            প্রয়োজনীয় সরকারি সেবার তথ্য এক জায়গায়।
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex gap-4 rounded-xl border border-gray-100 bg-[#F7FAF9] p-5"
                            >
                                <FaCheckCircle className="mt-1 shrink-0 text-lg text-[#006A4E]" />

                                <div>
                                    <h3 className="font-semibold text-[#243A34]">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 py-16">
                <div className="mx-auto max-w-4xl rounded-2xl bg-[#006A4E] px-6 py-10 text-center text-white md:px-12">
                    <FaHeart className="mx-auto text-3xl" />

                    <h2 className="mt-5 text-2xl font-bold md:text-3xl">
                        নাগরিক সেবার তথ্য হোক সবার জন্য সহজ
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/85">
                        সব সেবা আপনাকে প্রয়োজনীয় তথ্য বুঝতে এবং সংশ্লিষ্ট
                        সরকারি ওয়েবসাইটে পৌঁছাতে সহায়তা করে।
                    </p>
                </div>
            </section>

            <section className="px-4 pb-16">
                <div className="mx-auto flex max-w-4xl gap-3 rounded-xl border border-[#E8F5F0] bg-white p-5">
                    <FaInfoCircle className="mt-1 shrink-0 text-lg text-[#006A4E]" />

                    <p className="text-sm leading-7 text-gray-600">
                        <strong className="text-[#243A34]">বিশেষ দ্রষ্টব্য:</strong>{" "}
                        সব সেবা কোনো সরকারি প্রতিষ্ঠান নয়। এখানে দেওয়া তথ্য
                        নাগরিকদের সহায়তার জন্য। আবেদন, ফি এবং সর্বশেষ নিয়ম
                        সম্পর্কে নিশ্চিত হতে সংশ্লিষ্ট সরকারি ওয়েবসাইট
                        অনুসরণ করুন।
                    </p>
                </div>
            </section>
        </main>
    );
};

export default AboutPage;
