import Head from "next/head";
import Navigation from "../src/components/navigiation";
import HeroSection from "../src/components/heroSection";
import Footer from "../src/components/footer";

export default function Home() {
  // const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Foundation Learning</title>
        <meta name="description" content="An interactive learning dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <HeroSection />
      <Footer />

    </div>
  );
}
