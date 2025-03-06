import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5FBFC] text-gray-800 xl:px-[100px] xl:py-[44px] xl:w-auto">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 xl:text-[12px] xl:space-x-[100px]">
        {/* Subjects Section */}
        <div className="pr-10">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm text-[rgba(47,88,82,0.60)] mb-[7px]">
            SUBJECTS
          </h3>
          <div className="flex flex-row items-start xl:gap-x-[100px]">
            {/* First UL */}
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal xl:w-[220px] xl:h-[145px] space-y-2">
              <li className="whitespace-nowrap">Math</li>
              <li className="whitespace-nowrap">Science</li>
              <li className="whitespace-nowrap">English Language</li>
              <li className="whitespace-nowrap">Homeschool Support</li>
              <li className="whitespace-nowrap">Study Skills</li>
            </ul>

            {/* Second UL */}
            <ul className="text-[#2F5852] xl:text-[16px] font-dm leading-normal xl:w-[200px] xl:h-[145px] space-y-2">
              <li className="whitespace-nowrap">Algebra</li>
              <li className="whitespace-nowrap">Geometry</li>
              <li className="whitespace-nowrap">Precalculus</li>
              <li className="whitespace-nowrap">Calculus</li>
              <li className="whitespace-nowrap">Homework Help</li>
            </ul>
          </div>
        </div>

        {/* Test Prep Section */}
        <div className="xl:px-[44px] border-l md:border-l xl:border-l">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
            TEST PREP
          </h3>
          <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal space-y-2">
            <li>SAT</li>
            <li>DSAT</li>
            <li>ACT</li>
            <li>SSAT</li>
            <li>ISEE</li>
            <li>HSPT</li>
          </ul>
        </div>

        {/* College Readiness Section */}
        <div className="border-l xl:px-[44px]">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px] whitespace-nowrap">
            COLLEGE READINESS
          </h3>
          <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal">
            <li>AP</li>
            <li>IB</li>
          </ul>
        </div>

        {/* About Us Section */}
        <div className="border-l xl:px-[44px]">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
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
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo & Copyright Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            className="border-b"
            src="/logo/logo.png"
            alt="Foundation Learning"
            width={276.818}
            height={35}
          />
          <p className="mt-[10px] text-[#2F5852] text-[16px] font-dm-sans">
            Terms and Conditions &bull; Privacy Policy
          </p>
          <p className="mt-[10px] text-[rgba(47,88,82,0.60)] text-[16px] font-dm-sans">
            &copy;Copyright {new Date().getFullYear()} Foundation Learning
          </p>
        </div>

        {/* Contact Information Wrapper */}
        <div className="flex justify-end items-start space-x-12 col-span-3">
          {/* Call Section */}
          <div className="flex items-start space-x-4">
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
          <div className="flex flex-col space-y-2 border-r border-l px-6">
            <div className="flex items-center space-x-2">
              <Image
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
            <p className="text-[rgba(47,88,82,0.60)] text-[12px] font-dm-sans ml-[20px] xl:w-[291px] xl:h-[64px]">
              By calling or texting (800) 511-6948, customers agree to receive
              text messages. If you no longer wish to receive text messages, you
              may opt-out at any time by replying &quot;STOP&quot;
            </p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Image
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
              80 Broad Street,
              <br />
              New York City <br />
              NY 10004
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
