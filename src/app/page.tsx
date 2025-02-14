import Head from "next/head";
import Navigation from "../components/navigiation";
import HeroSection from "../components/heroSection";
import AllClasses from "../components/allClasses";
import PersonalizedTutoring from "../components/personalizedTutoring";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Head>
        <title>Foundation Learning</title>
        <meta name="description" content="An interactive learning dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className="flex-grow">
        <HeroSection />
        <AllClasses />
      </main>
      <main style={{ paddingLeft: "70px", paddingRight: "80px" }}>
        <PersonalizedTutoring />
      </main>
      <Footer />
    </div>
  );
}
