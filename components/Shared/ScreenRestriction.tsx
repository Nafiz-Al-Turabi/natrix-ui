
"use client";

import { BiDesktop,} from "react-icons/bi";
import { BsFillTabletFill } from "react-icons/bs";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function ScreenRestriction() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090b09] px-5 py-12 text-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-400/9 blur-[120px]" />
        <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-emerald-500/8 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 mx-auto w-full max-w-2xl text-center">
        {/* Brand */}
        <div className="mb-12 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-lime-300/20 bg-lime-300/10 text-lg font-black text-lime-300">
            N
          </div>
          <span className="text-lg font-bold tracking-tight">
            Natrix <span className="text-lime-300">UI</span>
          </span>
        </div>

        {/* Status badge */}
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/9 bg-white/4 px-4 py-2 shadow-lg shadow-black/10 backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
            Designed for bigger screens
          </span>
        </div>

        {/* Device illustration */}
        <div className="relative mx-auto my-12 flex h-52 max-w-sm items-center justify-center">
          <div className="absolute h-40 w-64 rounded-full bg-lime-400/[0.07] blur-3xl" />

          {/* Desktop monitor */}
          <div className="relative z-10 w-60">
            <div className="rounded-2xl border border-white/20 bg-linear-to-br from-white/12 to-white/2.5 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="flex aspect-16/10 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-[#111511]">
                <div className="relative flex h-full w-full items-center justify-center">
                  <div className="absolute h-24 w-24 rounded-full bg-lime-400/10 blur-2xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-lime-300/20 bg-lime-300/[0.07] shadow-[0_0_45px_rgba(163,230,53,0.08)]">
                    <HiOutlineSparkles className="text-4xl text-lime-300" />
                  </div>

                  <div className="absolute bottom-3 left-3 flex gap-1.5">
                    <span className="h-1 w-7 rounded-full bg-lime-300/60" />
                    <span className="h-1 w-4 rounded-full bg-white/15" />
                    <span className="h-1 w-5 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto h-5 w-12 border-x border-white/10 bg-linear-to-b from-white/15 to-white/5" />
            <div className="mx-auto h-1.5 w-24 rounded-full bg-white/20" />
          </div>

          {/* Floating tablet */}
          <div className="absolute bottom-4 right-0 z-20 w-25 -rotate-6 sm:right-2">
            <div className="rounded-xl border border-lime-200/30 bg-linear-to-br from-[#343c30] to-[#111511] p-1.5 shadow-2xl shadow-black/50">
              <div className="flex aspect-3/4 items-center justify-center rounded-lg border border-white/10 bg-[#151a14]">
                <BsFillTabletFill className="text-4xl text-lime-300/80" />
              </div>
            </div>
          </div>

          {/* Decorative sparkle */}
          <HiOutlineSparkles className="absolute left-4 top-8 animate-pulse text-xl text-lime-300/70" />
          <span className="absolute right-12 top-5 h-1.5 w-1.5 rounded-full bg-lime-200/70" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-6xl">
          A bigger canvas
          <br />
          <span className="bg-linear-to-r from-lime-200 via-lime-400 to-emerald-400 bg-clip-text text-transparent">
            awaits you.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-white/50 sm:text-base">
          Natrix UI is designed for a more spacious experience.
          Open this application on a tablet or desktop to explore
          every detail the way it was meant to be seen.
        </p>

        {/* Supported devices */}
        <div className="mx-auto mt-9 flex max-w-sm items-center justify-center gap-3">
          <div className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-lime-300/20 bg-lime-300/6 px-3 py-3.5">
            <BsFillTabletFill className="text-xl text-lime-300" />
            <span className="text-xs font-medium text-white/80">
              Tablet
            </span>
          </div>

          <div className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-lime-300/20 bg-lime-300/6 px-3 py-3.5">
            <BiDesktop className="text-xl text-lime-300" />
            <span className="text-xs font-medium text-white/80">
              Desktop
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-white/8 pt-6">
          <p className="text-xs text-white/30">
            Crafted with intention by{" "}
            <span className="font-medium text-white/60">
              Natrix UI
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
