import React from "react";
import Container from "../Layouts/Container";
import Link from "next/link";
import { MdWbSunny } from "react-icons/md";

export default function Navbar() {
    
  return (
    <nav className="border-b border-white/20">
      <Container>
        <div className="py-3 flex justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Natrix Logo" className="w-32" />
          </Link>
          <div className="flex gap-4 items-center">
            <button className="bg-grad px-3 py-1 rounded-md font-lg text-black/80 font-bold ">
              Get Started
            </button>
            <button className="p-1 border border-white/20 rounded-md"><MdWbSunny size={18} /></button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
