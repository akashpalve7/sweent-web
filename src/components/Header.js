"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Site Logo"
              width={120}
              height={120}
              priority
              className="cursor-pointer"
            />
          </Link>
          {/* <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
            ND
          </div> */}
          {/* <div>
            <div style={{ fontSize: "40px", color: "#000" }} className="">
              Sweent
            </div>
          </div> */}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-md hover:text-indigo-600">
            Home
          </Link>

          <Link href="/about" className="text-md hover:text-indigo-600">
            About
          </Link>
          <Link href="/blog" className="text-md hover:text-indigo-600">
            Blog
          </Link>
          <Link href="/contact" className="text-md hover:text-indigo-600">
            Contact
          </Link>
          <Link
            href="/contact"
            className="ml-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md text-md"
          >
            Get Started
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}
