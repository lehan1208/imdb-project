"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import {Suspense} from "react";

export default function Navbar() {
  return (
    <Suspense>
      <div className="navbar-component flex gap-6 dark:bg-gray-600 bg-amber-50 p-4 justify-center lg:text-lg">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}

export function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="navbar-item">
      <Link
        className={`hover:text-amber-600 font-semibold
        ${
          genre === param
            ? "underline underline-offset-8 decoration-amber-500 rounded-lg decoration-4"
            : ""
        }
      `}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
