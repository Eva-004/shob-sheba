
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import servicesData from "@/data/services.json";
import {
    FaArrowLeft,
    FaCheckCircle,
    FaExternalLinkAlt,
    FaClock,
    FaFileAlt,
    FaUserCheck,
    FaMoneyBillWave,
    FaGlobe,
    FaInfoCircle,
} from "react-icons/fa";

interface ServiceDocument {
    name: string;
    note?: string;
    required: boolean;
}

interface ServiceStep {
    title: string;
    description?: string;
}

interface ServiceFee {
    amount: number | null;
    label?: string;
    note?: string;
}

interface Service {
    slug: string;
    title: string;
    category?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    processingTime?: string;
    overview?: string;
    eligibility?: string[];
    documents?: ServiceDocument[];
    steps?: ServiceStep[];
    fee?: ServiceFee;
    officialUrl?: string;
}

interface ServiceDetailsPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const services: Service[] = servicesData;

const ServiceDetailsPage = async ({ params }: ServiceDetailsPageProps) => {
    const { slug } = await params;
    const service = services.find((item) => item.slug === slug);

    if (!service) notFound();

    return (
       <main className="min-h-screen py-10">
    <div className="mx-auto max-w-6xl px-4">
        <Link
            href="/services"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#006A4E] hover:underline"
        >
            <FaArrowLeft />
            সকল সেবা
        </Link>

        <Card className="overflow-hidden">
            <div className="grid items-center md:grid-cols-2">
                <div className="p-6 md:p-10">
                    {service.category && (
                        <span className="rounded-full bg-[#E8F5F0] px-4 py-2 text-sm font-medium text-[#006A4E]">
                            {service.category}
                        </span>
                    )}

                    <h1 className="mt-6 text-3xl font-bold text-[#243A34] md:text-4xl">
                        {service.title}
                    </h1>

                    {service.description && (
                        <p className="mt-4 leading-8 text-gray-600">
                            {service.description}
                        </p>
                    )}

                    {service.processingTime && (
                        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                            <FaClock className="text-[#008B72]" />
                            {service.processingTime}
                        </div>
                    )}

                    {service.officialUrl && (
                        <Link
                            href={service.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#006A4E] px-6 py-3 font-medium text-[#006A4E] transition-colors hover:bg-[#006A4E] hover:text-white"
                        >
                            সরকারি ওয়েবসাইটে আবেদন করুন
                            <FaExternalLinkAlt className="text-sm" />
                        </Link>
                    )}
                </div>

                {service.image && (
                    <div className="relative h-64 bg-[#E8F5F0] md:h-full md:min-h-[400px]">
                        <Image
                            src={service.image}
                            alt={service.imageAlt || service.title}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </Card>

        {service.overview && (
            <Card className="mt-8 p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                    <FaInfoCircle className="text-xl text-[#008B72]" />
                    <h2 className="text-xl font-bold text-[#243A34]">
                        সেবা সম্পর্কে
                    </h2>
                </div>
                <p className="leading-8 text-gray-600">
                    {service.overview}
                </p>
            </Card>
        )}

        {service.eligibility?.length ? (
            <Card className="mt-6 p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                    <FaUserCheck className="text-xl text-[#008B72]" />
                    <h2 className="text-xl font-bold text-[#243A34]">
                        কারা এই সেবা নিতে পারবেন?
                    </h2>
                </div>
                <ul className="space-y-4">
                    {service.eligibility.map((item, index) => (
                        <li key={index} className="flex gap-3 text-gray-600">
                            <FaCheckCircle className="mt-1 shrink-0 text-[#008B72]" />
                            <span className="leading-7">{item}</span>
                        </li>
                    ))}
                </ul>
            </Card>
        ) : null}

        {service.documents?.length ? (
            <Card className="mt-6 p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                    <FaFileAlt className="text-xl text-[#008B72]" />
                    <h2 className="text-xl font-bold text-[#243A34]">
                        কী কী কাগজপত্র লাগবে?
                    </h2>
                </div>
                <div className="space-y-4">
                    {service.documents.map((document, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between gap-3 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center"
                        >
                            <div>
                                <h3 className="font-semibold text-[#243A34]">
                                    {document.name}
                                </h3>
                                {document.note && (
                                    <p className="mt-1 text-sm leading-6 text-gray-500">
                                        {document.note}
                                    </p>
                                )}
                            </div>
                            <span
                                className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                                    document.required
                                        ? "bg-red-50 text-red-600"
                                        : "bg-gray-100 text-gray-600"
                                }`}
                            >
                                {document.required
                                    ? "আবশ্যক"
                                    : "প্রযোজ্য ক্ষেত্রে"}
                            </span>
                        </div>
                    ))}
                </div>
            </Card>
        ) : null}

        {service.steps?.length ? (
            <Card className="mt-6 p-6 md:p-8">
                <h2 className="mb-7 text-xl font-bold text-[#243A34]">
                    কীভাবে আবেদন করবেন?
                </h2>
                <div className="space-y-7">
                    {service.steps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8F5F0] font-bold text-[#006A4E]">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#243A34]">
                                    {step.title}
                                </h3>
                                {step.description && (
                                    <p className="mt-2 leading-7 text-gray-600">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        ) : null}

        {service.fee && (
            <Card className="mt-6 p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                    <FaMoneyBillWave className="text-xl text-[#008B72]" />
                    <h2 className="text-xl font-bold text-[#243A34]">
                        সরকারি ফি কত?
                    </h2>
                </div>
                <div className="rounded-xl bg-[#E8F5F0] p-5">
                    <h3 className="text-lg font-semibold text-[#006A4E]">
                        {service.fee.amount != null
                            ? `৳ ${service.fee.amount}`
                            : "ফি নির্ভরশীল"}
                    </h3>
                    {service.fee.label && (
                        <p className="mt-2 leading-7 text-gray-700">
                            {service.fee.label}
                        </p>
                    )}
                    {service.fee.note && (
                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            {service.fee.note}
                        </p>
                    )}
                </div>
            </Card>
        )}

        {service.officialUrl && (
            <Card className="mt-6 border border-[#D5EDE4] p-6 md:p-8">
                <div className="flex items-start gap-3">
                    <FaGlobe className="mt-1 text-xl text-[#008B72]" />
                    <div className="min-w-0">
                        <h2 className="text-xl font-bold text-[#243A34]">
                            আসল সরকারি ওয়েবসাইট কোনটি?
                        </h2>
                        <p className="mt-2 leading-7 text-gray-600">
                            আবেদন বা বিস্তারিত তথ্যের জন্য নিচের সরকারি ওয়েবসাইটটি ব্যবহার করুন।
                        </p>
                        <Link
                            href={service.officialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#006A4E] px-5 py-3 font-medium text-white transition hover:bg-[#00543E]"
                        >
                            সরকারি পোর্টালে যান
                            <FaExternalLinkAlt />
                        </Link>
                    </div>
                </div>
            </Card>
        )}

        <p className="mt-8 text-center text-sm leading-7 text-gray-500">
            <FaInfoCircle className="mr-1 inline" />
            এখানে দেওয়া তথ্য সাধারণ নির্দেশনা হিসেবে দেওয়া হয়েছে।
            আবেদন করার আগে সংশ্লিষ্ট সরকারি ওয়েবসাইট থেকে সর্বশেষ তথ্য যাচাই করুন।
        </p>
    </div>
</main>
    );
};

export default ServiceDetailsPage;
