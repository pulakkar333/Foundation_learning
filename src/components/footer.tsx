import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5FBFC] text-gray-800 xl:px-[68px] xl:py-[44px]">
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-[12px]">
        {/* Subjects Section */}
        <div className="border-r md:border-r pr-4">
          <h3 className="font-bold text-left uppercase text-[14px] font-dm text-[rgba(47,88,82,0.60)] mb-[7px]">
            SUBJECTS
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal">
              <li>Math</li>
              <li>Science</li>
              <li>English Language</li>
              <li>Homeschool Support</li>
              <li>Study Skills</li>
            </ul>
            <ul className="text-[#2F5852] text-[16px] font-dm leading-normal">
              <li>Algebra</li>
              <li>Geometry</li>
              <li>Precalculus</li>
              <li>Calculus</li>
              <li>Homework Help</li>
            </ul>
          </div>
        </div>

        {/* Test Prep Section */}
        <div className="border-r md:border-r-0 px-4">
          <h3 className="font-bold text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
            TEST PREP
          </h3>
          <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal">
            <li>SAT</li>
            <li>DSAT</li>
            <li>ACT</li>
            <li>SSAT</li>
            <li>ISEE</li>
            <li>HSPT</li>
          </ul>
        </div>

        {/* College Readiness Section */}
        <div className="border-l px-4">
          <h3 className="font-bold text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
            COLLEGE READINESS
          </h3>
          <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal">
            <li>AP</li>
            <li>IB</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="border-l px-4">
          <h3 className="font-bold text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
            ABOUT US
          </h3>
          <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal">
            <li>Our Process</li>
            <li>Our Results</li>
            <li>Reviews</li>
            <li>Our Tutors</li>
            <li>Book Free Consultation</li>
          </ul>
        </div>
      </div>

      <div className="xl:mt-[36px] border-t xl:mb-[50px]"></div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* Logo and Legal */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            className="border-b"
            src="/logo/logo.png"
            alt="Foundation Learning"
            width={276.818}
            height={35}
          />
          <p className="mt-2 text-[#2F5852] text-[16px] font-dm-sans">
            Terms and Conditions &bull; Privacy Policy
          </p>
          <p className="mt-2 text-[rgba(47,88,82,0.60)] text-[16px] font-dm-sans">
            &copy; Foundation Learning
          </p>
        </div>

        {/* Call Section */}
        <div className="xl:flex xl:items-center xl:justify-end space-x-4 border-r xl:pr-[20px]">
          <Image
            src="/logo/phone.png"
            alt="Foundation Learning"
            width={18}
            height={18}
          />
          <div className="text-left">
            <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">
              CALL
            </h3>
            <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold">
              (800) 511-6948
            </p>
          </div>
        </div>

        {/* Text/WhatsApp Section */}
        <div className="flex flex-col space-y-2 border-r px-4">
          <div className="flex items-center space-x-2">
            <Image
              className=""
              src="/logo/message.png"
              alt="Foundation Learning"
              width={18}
              height={18}
            />
            <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">
              TEXT OR WHATSAPP
            </h3>
          </div>
          <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[20px]">
            (800) 511-6948
          </p>
          <p className="text-[rgba(47,88,82,0.60)] text-[12px] font-dm-sans ml-[20px]">
            By calling or texting (800) 511-6948, customers agree to receive
            text messages. Reply &quot;STOP&quot; to opt out.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col space-y-2 pl-4">
          <div className="flex items-center space-x-2">
            <Image
              className=""
              src="/logo/map.png"
              alt="Foundation Learning"
              width={21}
              height={18}
            />
            <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">
              ADDRESS
            </h3>
          </div>
          <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[30px]">
            80 Broad Street, New York City
          </p>
          <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[30px]">
            10004 NY
          </p>
        </div>
      </div>
    </footer>
  );
}
