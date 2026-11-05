import React from "react";

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

        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="w-full sm:max-w-md">
            <input
              type="text"
              placeholder="সেবার তথ্য খুঁজুন..."
              className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 outline-none focus:border-[#26704F]"
            />
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