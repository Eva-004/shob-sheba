"use client";

import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

interface Service {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-[#E8F5E9] px-3 py-1 text-xs font-medium text-[#26704F]">
          {service.category}
        </span>

        <h2 className="text-lg font-bold text-gray-800">
          {service.title}
        </h2>

        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {service.description}
        </p>

        <Link href={`/services/${service.slug}`} className="mt-2">
          <Button
            className="w-full rounded-full bg-[#26704F] text-white"
            size="md"
          >
            বিস্তারিত দেখুন
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;