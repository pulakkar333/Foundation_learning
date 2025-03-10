import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#F5FBFC] text-gray-800 xl:px-[50px] xl:py-[44px] md:px-[50px] md:py-[25px] xl:w-auto"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="container md:flex md:flex-row xl:text-[12px] xl:space-x-[100px] xl:justify-center">
        {/* Subjects Section */}
        <div className="ssm:mt-[40px] ssm:pl-[16px]">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm text-[rgba(47,88,82,0.60)] mb-[7px]">
            SUBJECTS
          </h3>
          <div className="flex flex-row items-start xl:gap-x-[100px] md:flex-col xl:flex-row md:gap-y-4 xl:w-auto ssm:gap-x-[40px]">
            {/* First UL */}
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal xl:w-[220px] xl:h-[145px] space-y-2 md:w-full">
              <li className="whitespace-nowrap">Math</li>
              <li className="whitespace-nowrap">Science</li>
              <li className="whitespace-nowrap">English Language</li>
              <li className="whitespace-nowrap">Homeschool Support</li>
              <li className="whitespace-nowrap">Study Skills</li>
            </ul>

            {/* Second UL */}
            <ul className="text-[#2F5852] xl:text-[16px] font-dm leading-normal xl:w-[200px] xl:h-[145px] space-y-2 md:w-full">
              <li className="whitespace-nowrap">Algebra</li>
              <li className="whitespace-nowrap">Geometry</li>
              <li className="whitespace-nowrap">Precalculus</li>
              <li className="whitespace-nowrap">Calculus</li>
              <li className="whitespace-nowrap">Homework Help</li>
            </ul>
          </div>
        </div>

        {/* Test Prep Section */}
        <div className="ssm:flex ssm:flex-row ssm:gap-x-[50px] ssm:mt-[40px] ssm:pl-[16px] md:flex-block">
          {/* Test Prep Section */}
          <div className="xl:px-[44px] md:px-[44px] border-l ssm:border-l-0 md:border-l xl:border-l">
            <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
              TEST PREP
            </h3>
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal space-y-2 md:w-full md:flex-col">
              <li>SAT</li>
              <li>DSAT</li>
              <li>ACT</li>
              <li>SSAT</li>
              <li>ISEE</li>
              <li>HSPT</li>
            </ul>
          </div>

          {/* College Readiness Section */}
          <div className="border-l xl:px-[44px] md:px-[44px] ssm:pl-[20px]">
            <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px] xl:whitespace-nowrap ">
              COLLEGE READINESS
            </h3>
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal md:w-full md:flex-col">
              <li>AP</li>
              <li>IB</li>
            </ul>
          </div>
        </div>

        {/* About Us Section */}
        <div className="border-l xl:px-[44px] md:px-[44px] ssm:mt-[40px] ssm:pl-[16px] ssm:border-l-0">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
            ABOUT US
          </h3>
          <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal md:w-full md:flex-col">
            <li>Our Process</li>
            <li>Our Results</li>
            <li>Reviews</li>
            <li>Our Tutors</li>
            <li>Book Free Consultation</li>
          </ul>
        </div>
      </div>

      <div className="xl:mt-[36px] md:mt-[25px] border-t xl:mb-[50px] md:mb-[25px]"></div>

      {/* Footer Bottom Section */}

      <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="order-2 ssm:order-2 md:order-2 xl:order-1 flex ssm:flex-col xl:flex-col md:flex-row items-center md:items-start md:gap-[100px] xl:gap-0 md:border-r xl:border-0">
          <Image
            className="xl:border-b"
            src="/logo/logo.png"
            alt="Foundation Learning"
            width={276.818}
            height={35}
          />
          <div className="mt-[10px] flex flex-col md:flex-col ssm:flex">
            <p className="text-[#2F5852] text-[16px] font-dm-sans md:whitespace-nowrap ssm:whitespace-nowrap">
              Terms and Conditions &bull; Privacy Policy
            </p>
            <p className="mt-[10px] md:mt-0 text-[rgba(47,88,82,0.60)] text-[16px] font-dm-sans md:whitespace-nowrap ssm:whitespace-nowrap">
              &copy;Copyright {new Date().getFullYear()} Foundation Learning
            </p>
          </div>
        </div>

        <div className="order-1 ssm:order-1 md:order-1 xl:order-2 flex justify-end space-x-12 col-span-3 md:border-b md:border-t xl:border-b-0 xl:border-t-0 md:py-4 ">
          <div className="flex items-start xl:space-x-4 md:space-x-4 md:whitespace-nowrap">
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

          <div className="flex flex-col space-y-2 md:whitespace-nowrap">
            <div className="flex items-center xl:space-x-2 md:space-x-2">
              <Image
                src="/logo/map.png"
                alt="Foundation Learning"
                width={21}
                height={18}
              />
              <h3 className="text-[14px] ssm:text-[10px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">
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
