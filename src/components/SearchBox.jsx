"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${keyword}`)
  };

  return (
    <form
      className="search-box-component flex justify-between px-5 max-x-6xl mx-auto"
      onSubmit={(e) => handleSubmit(e)}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-14 placeholder-gray-500 outline-none bg-transparent flex-1"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="submit"
        className="text-amber-600 text-2xl disabled:text-gray-400"
        disabled={keyword.length == 0}
      >
        <IoSearch />
      </button>
    </form>
  );
}
