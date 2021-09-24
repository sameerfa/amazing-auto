import Head from "next/head";
import NextLink from "next/link";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Layout({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Amazing Auto` : "Amazing Auto - Chennai's HiTech Auto Rickshaw"}
        </title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon"></link>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
