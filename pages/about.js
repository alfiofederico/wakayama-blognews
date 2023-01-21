import React from 'react';
import Layout from "@/components/Layout";


export default function AboutPage() {
  return (
    <Layout title="About Wakayama BlogNews">
      <h1 className="text-5xl ml-3 border-b-4 pb-5 font-bold">About</h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5">Wakayama BlogNews</h3>

        <p>A place where you can share anything related to Wakayama!</p>
        <p>
          Interested in writing an article? Feel free to{" "}
          <a className='underline' href="mailto: fefferico81@gmail.com">contact me!</a>
        </p>

        <p className="mb-3 italic">Built with Next.js, Markdown and Tailwind</p>

        <p>
          <span className="font-bold">Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  );
}
