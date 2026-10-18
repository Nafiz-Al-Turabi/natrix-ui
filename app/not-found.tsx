"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">404 – Page Not Found</h1>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
      >
        Go Home
      </Link>
    </div>
  );
}

