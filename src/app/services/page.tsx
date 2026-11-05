import { Button } from "@heroui/react";
import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

const ServicesPage = () => {
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
            <form action="/services" method="GET" className=" flex max-w-2xl items-center gap-2 rounded-full border border-[#E5EEE8] bg-white p-2 shadow-lg shadow-[#26704F]/10">
                <FaSearch className="ml-4 shrink-0 text-xl text-[#26704F]" />
                <input
                    type="text"
                    name="search"
                    placeholder="কোন সেবার তথ্য খুঁজছেন?"
                    className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />
                <Button
                    type="submit"
                    className="rounded-full bg-gradient-to-r from-[#26704F] to-[#A64B45] px-7 font-semibold text-white"
                    
                >
                    খুঁজুন <FaArrowRight />
                </Button>
            </form>
          </div>

          <div className="w-full sm:w-56">
            <select
              defaultValue=""
              className="w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-600 outline-none focus:border-[#26704F]"
            >
              <option value="" disabled>ক্যাটাগরি নির্বাচন করুন</option>
              <option value="education">শিক্ষা</option>
              <option value="health">স্বাস্থ্য</option>
              <option value="government">সরকারি সেবা</option>
              <option value="technology">প্রযুক্তি</option>
            </select>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ServicesPage;