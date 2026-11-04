import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { name: "হোম", href: "/" },
  { name: "সেবাসমূহ", href: "/services" },
  { name: "আমাদের সম্পর্কে", href: "/about" },
  { name: "লগইন", href: "/login" },
];

const Footer = () => {
  return (
    <footer className="bg-white shadow-md mt-2 px-4 pt-12 pb-6">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-[#26704F]/15">
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-extrabold text-[#26704F]">
              সব সেবা
            </Link>
            <p className="text-sm text-gray-600 mt-3 max-w-sm leading-7">
              নাগরিক জীবনের প্রয়োজনীয় সকল সেবা এখন এক জায়গায়।
              সহজেই খুঁজুন, জানুন এবং প্রয়োজনীয় সেবা গ্রহণ করুন।
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <Link href="#" className="text-[#26704F] hover:text-[#A64B45] transition-colors">
                <FaFacebookF size={19} />
              </Link>
              <Link href="#" className="text-[#26704F] hover:text-[#A64B45] transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-[#26704F] hover:text-[#A64B45] transition-colors">
                <FaYoutube size={21} />
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <h3 className="font-bold text-[#26704F] mb-3">দ্রুত লিংক</h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-[#26704F] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-5 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} সব সেবা। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>সবার জন্য সহজ নাগরিক সেবা।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;