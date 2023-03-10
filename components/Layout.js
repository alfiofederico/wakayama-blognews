import React from 'react'
import Head from 'next/head'
import Header from './Header'

export default function Layout({title, keywords, description, children}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
{/*         <a
          href="https://www.flaticon.com/free-icons/japanese"
          title="japanese icons"
        >
          Japanese icons created by Freepik - Flaticon
        </a> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to Wakayama BlogNews',
  keywords: 'wakayama, blog, news, english, wakayamainternational',
  description: 'Info about Wakayama'
}
