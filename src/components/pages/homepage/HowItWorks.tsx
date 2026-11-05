
import { Card } from "@heroui/react";
import type { IconType } from "react-icons";
import {
    FaSearch,
    FaFileAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";

type Step = {
    id: number;
    title: string;
    description: string;
    icon: IconType;
};

const steps: Step[] = [
    {
        id: 1,
        title: "আপনার সেবা খুঁজুন",
        description:
            "সার্চ করে অথবা জনপ্রিয় সেবার তালিকা থেকে আপনার প্রয়োজনীয় সরকারি সেবাটি খুঁজে নিন।",
        icon: FaSearch,
    },
    {
        id: 2,
        title: "প্রয়োজনীয় তথ্য জানুন",
        description:
            "সেবার যোগ্যতা, প্রয়োজনীয় কাগজপত্র, আবেদন পদ্ধতি এবং সরকারি ফি সম্পর্কে বিস্তারিত জানুন।",
        icon: FaFileAlt,
    },
    {
        id: 3,
        title: "সরকারি পোর্টালে আবেদন করুন",
        description:
            "সকল তথ্য বুঝে সরাসরি সংশ্লিষ্ট সরকারি ওয়েবসাইটে গিয়ে আপনার আবেদন সম্পন্ন করুন।",
        icon: FaExternalLinkAlt,
    },
];

const HowItWorks = () => {
    return (
        <section className="bg-[#F7FAF9] py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4">

                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="rounded-full bg-[#E8F5F0] px-4 py-2 text-sm font-medium text-[#006A4E]">
                        সব সেবা ব্যবহারের নিয়ম
                    </span>

                    <h2 className="mt-5 text-2xl font-bold text-[#243A34] md:text-3xl">
                        মাত্র ৩টি ধাপে সেবা গ্রহণের প্রস্তুতি
                    </h2>

                    <p className="mt-4 leading-7 text-gray-600">
                        আপনার প্রয়োজনীয় সরকারি সেবা সম্পর্কে জানুন এবং সহজেই
                        সঠিক আবেদন প্রক্রিয়া অনুসরণ করুন।
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <Card
                                key={step.id}
                                className="border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <Card.Content className="flex flex-col items-center text-center">
                                    <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5F0] text-2xl text-[#006A4E]">
                                        <Icon />

                                        <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#006A4E] text-xs font-semibold text-white">
                                            {step.id}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-[#243A34]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-600">
                                        {step.description}
                                    </p>
                                </Card.Content>
                            </Card>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
