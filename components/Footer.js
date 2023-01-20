import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 shadow w-full text-center lg:text-left">
      <div className="text-gray-100 text-center p-4 mx-1">
        © 2023
        <a
          className="text-gray-100 text-decoration-line: underline ml-1"
          href="https://alfiofedericodp.netlify.app/"
          target="_blank"
        >
          Federico
        </a>
      </div>
    </footer>
  );
}
