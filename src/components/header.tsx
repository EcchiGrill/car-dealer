"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground p-4 px-5">
      <div className="flex justify-start items-center">
        <Link className="text-3xl font-bold" href="/">
          Car Dealer
        </Link>
      </div>
    </header>
  );
}
