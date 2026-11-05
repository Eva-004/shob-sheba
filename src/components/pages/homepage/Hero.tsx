 import { Button } from "@heroui/react";
    import { FaSearch, FaArrowRight, FaBolt, FaShieldAlt, FaUsers } from "react-icons/fa";
import SearchService from "../SearchService";

    const features = [
        {
            icon: FaBolt,
            title: "দ্রুত ও সহজ",
            description: "কয়েক ক্লিকেই সেবা পান",
        },
        {
            icon: FaShieldAlt,
            title: "নিরাপদ ও নির্ভরযোগ্য",
            description: "আপনার তথ্য সুরক্ষিত",
        },
        {
            icon: FaUsers,
            title: "সবার জন্য",
            description: "সকল নাগরিকের জন্য উন্মুক্ত",
        },
    ];

const Hero = () => {
   
    return (
        <section className="relative flex min-h-[650px] items-center">
            <div className="absolute inset-0 " />

            <div className="relative z-10 w-11/12 mx-auto py-20">
                <div className="max-w-2xl">

                    <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#164F3B]">
                        সব সরকারি সেবার তথ্য
                        <br />
                        এখন <span className="text-[#B65A4B]">এক জায়গায়</span>
                    </h1>

                    <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-gray-600">
                        নাগরিক জীবনের প্রয়োজনীয় সকল সেবা এখন এক জায়গায়।
                        সহজেই খুঁজুন, জানুন এবং প্রয়োজনীয় সেবা গ্রহণ করুন।
                    </p>

                    <div className="mt-8">
                        <SearchService />
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6 rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm backdrop-blur-md sm:gap-8">
                        {features.map((feature) => (
                            <div key={feature.title} className="flex items-center gap-3">
                                <feature.icon className="shrink-0 text-2xl text-[#26704F]" />
                                <div>
                                    <h3 className="text-sm font-bold text-gray-800">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;