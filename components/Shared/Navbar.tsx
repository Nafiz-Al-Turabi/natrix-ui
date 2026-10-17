import React from "react";
import Container from "../Layouts/Container";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    
  return (
    <nav className="border-b border-(--border)">
      <Container>
        <div className="py-3 flex justify-between">
          <Link href="/" className="flex  items-end font-bold text-lg">
            <img src="/n-logo.png" alt="Natrix Logo" className="w-12" />
            <span className="mb-2">Natrix</span>
          </Link>
          <div className="flex gap-4 items-center">
            <button className="bg-grad px-3 py-1 rounded-md font-lg text-black/80 font-bold ">
              Get Started
            </button>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
