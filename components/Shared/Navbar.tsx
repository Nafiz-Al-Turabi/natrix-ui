import React from "react";
import Container from "../Layouts/Container";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { IoArrowForward } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="border-b border-(--border)">
      <Container>
        <div className="py-3 flex justify-between">
          <Link href="/" className="flex  items-end font-bold text-lg">
            <img src="/n-logo.png" alt="Natrix Logo" className="w-12" />
            <span className="mb-2">
              Natrix <sup className="text-xs text-[#27C059]">UI</sup>
            </span>
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/ui">
              <button className="flex items-center gap-2 border border-(--border) px-3 py-1 rounded-md group">
                Get Started{" "}
                <IoArrowForward
                  size={18}
                  className="group-hover:translate-x-1.5 duration-300"
                />
              </button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
