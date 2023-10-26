import Script from "next/script";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

export default function Layout({children}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Buzz Quiz Soundboard</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            </Head>
            <main>
                <Header />

                {children}

                <Footer />

                <Script src="/js/bootstrap.bundle.min.js" />
            </main>
        </>
    );
}