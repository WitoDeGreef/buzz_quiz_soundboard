import Script from "next/script";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

const config = require('../next.config');

export default function Layout({children}) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <title>Buzz Quiz Soundboard</title>
                <link rel="icon" type="image/x-icon" href={config.basePath + "/favicon.ico"} />
            </Head>
            <main>
                <Header />

                {children}

                <Footer />

                <Script src={config.basePath + "/js/bootstrap.bundle.min.js"} />
            </main>
        </>
    );
}