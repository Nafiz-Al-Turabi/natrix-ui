import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "../Layouts/Container";

export default function Footer() {
  return (
    <footer className="border-t border-(--border) ">
      <Container>
        {" "}
        <div className="px-4 grid grid-cols-1 gap-8 md:grid-cols-3  py-10">
          {/* Brand & description */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Natrix UI</h2>
            <p className="text-sm ">
              A modern UI kit built with Next.js 16 and Tailwind. Seamless
              light/dark mode.
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            <a href="/" className="block hover:underline">
              Home
            </a>
            <a href="/about" className="block hover:underline">
              About
            </a>
            <a href="/blog" className="block hover:underline">
              Blog
            </a>
            <a href="/contact" className="block hover:underline">
              Contact
            </a>
          </nav>

          {/* Social icons & copyright */}
          <div className="space-y-4">
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="text-sm opacity-70">
              © {new Date().getFullYear()} Natrix UI. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
