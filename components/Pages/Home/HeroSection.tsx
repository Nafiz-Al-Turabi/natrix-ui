import Container from "@/components/Layouts/Container";
import React from "react";
import Name from "./Name";
import { IoArrowForward } from "react-icons/io5";
import InstallCommand from "@/components/Shared/InstallCommand";

export default function HeroSection() {
  return (
    <div className="my-4 border-y border-(--border)">
      <Container>
        <div className="py-3 relative">
          <Name />
          <div className="absolute bottom-12 lg:bottom-14 bg-linear-to-b to-background from-0%  w-full h-40 " />
        </div>
        <div>
          <h1 className="text-4xl lg:text-6xl font-bold text-center lg:w-[20ch] mx-auto -m-10">
            For High-Speed Web Development
          </h1>
          <p className="text-sm lg:text-lg text-center text-muted-foreground max-w-xl mx-auto mt-10">
            Build high-performance web applications with our collection of
            modular React UI components.
          </p>
        </div>
        <div className="flex justify-center my-4">
          <button className="flex items-center gap-2 border border-(--border) px-6 py-2 rounded-md group">
            Get Started{" "}
            <IoArrowForward
              size={18}
              className="group-hover:translate-x-1.5 duration-300"
            />
          </button>
        </div>
        <div className="mx-auto max-w-xl">
          <InstallCommand packages={["react-nat-otp", "react-nat-modal"]} />
        </div>
      </Container>
    </div>
  );
}
