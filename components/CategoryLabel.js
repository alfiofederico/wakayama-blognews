import React from 'react'
import Link from "next/link";

export default function CategoryLabel({children}) {

  const colorKey = {
    Travel: "yellow",
    Events: "blue",
    Family: "green",
    News: "purple",
    Cooking: "red",
  }
  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link legacyBehavior href={`/blog/category/${children.toLowerCase()}`}>
        {children}
      </Link>
    </div>
  );
}
