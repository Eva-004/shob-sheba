import { Button } from "@heroui/react";
import { FaArrowRight, FaSearch } from "react-icons/fa";

interface SearchServiceProps {
  search?: string;
}

const SearchService = ({ search = "" }: SearchServiceProps) => {
  return (
    <form
      action="/services"
      method="GET"
      className="flex w-full max-w-2xl items-center gap-2 rounded-full border border-[#E5EEE8] bg-white p-2 shadow-lg shadow-[#26704F]/10"
    >
      <FaSearch className="ml-4 shrink-0 text-xl text-[#26704F]" />

      <input
        type="text"
        name="search"
        defaultValue={search}
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
  );
};

export default SearchService;