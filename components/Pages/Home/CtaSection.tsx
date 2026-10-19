import Container from "@/components/Layouts/Container";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function CtaSection() {
  return (
    <div className="border-y border-(--border) my-3">
      <Container>
        <div className="py-20 flex flex-col items-center text-center gap-6">
          {/* Decorative badge */}
          <span className="inline-block rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-lime-600">
            Open Source · Free Forever
          </span>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold max-w-2xl">
            Start building{" "}
            <span className="text-lime-500">something great</span> today
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-md">
            Browse the full component library, copy what you need, and ship
            faster — no sign-up required.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <Link href="/ui">
              <button className="flex items-center gap-2 rounded-lg bg-lime-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-lime-600 transition group">
                Browse Components
                <IoArrowForward
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-(--border) px-6 py-2.5 text-sm font-semibold hover:border-lime-400 transition"
            >
              <FaGithub size={16} />
              View on GitHub
            </a>
          </div>

          {/* Social proof note */}
          <p className="text-xs text-muted-foreground mt-2">
            Built with Next.js &amp; Tailwind CSS · MIT Licensed
          </p>
        </div>
      </Container>
    </div>
  );
}

