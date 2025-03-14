import Head from "next/head";
import Navigation from "../components/navigiation";
import HeroSection from "../components/heroSection";
import AllClasses from "../components/allClasses";
import BookGrid from "../components/bookGrid";
import PersonalizedTutoring from "../components/personalizedTutoring";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div className="bg-white w-auto h-auto min-h-screen flex flex-col">
      <Head>
        <title>Foundation Learning</title>
        <meta name="description" content="An interactive learning dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <main className="flex flex-col flex-wrap h-auto xl:flex-grow">
        <HeroSection />
        <AllClasses />
      </main>
      <BookGrid />
      <main className="ssm:px-[10px] ssm:py-[40px] md:px-[42px] md:py-[60px] xl:px-[80px] xl:py-[60px]">
        <PersonalizedTutoring />
      </main>
      <Footer />

      <div
        className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
        style={{
          marginRight: "20px",
        }}
      >
        {/* <button
          className="relative flex items-center justify-center w-[124px] h-[40px] flex-shrink-0 rounded-[100px] border border-[#FFCFA4] bg-[#FDF0E4] text-sm font-medium"
          style={{
            boxShadow: "0px -10px 30px -10px rgba(237, 128, 31, 0.70)",
          }}
        >
          <span
            className="text-[#ED801F]"
            style={{
              fontFamily: '"Cormorant Garamond"',
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
              letterSpacing: "-0.9px",
            }}
          >
            AI Guru
          </span>
          <span
            className="absolute right-0 translate-x-1/3 bg-white rounded-full flex items-center justify-center shadow-md border border-[#D6EFF2] w-[40px] h-[40px]"
            style={{
              background:
                "radial-gradient(60.92% 60.92% at 20.83% 20.83%, #FFCFA4 0%, #ED801F 100%)",
              boxShadow: "inset 0px 4px 10px 0px rgba(255, 244, 143, 0.70)",
              filter: "drop-shadow(0px 10px 30px rgba(237, 128, 31, 0.70))",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                fill: "#FFF48F",
                filter: "blur(3.5px)",
                backgroundColor: "#FFF48F",
              }}
            ></span>
          </span>
        </button> */}
      </div>
    </div>
  );
}
