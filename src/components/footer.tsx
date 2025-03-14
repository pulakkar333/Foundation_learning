import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#F5FBFC] text-gray-800 xl:w-auto md:px-[40px]"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="container md:flex md:flex-row xl:text-[12px] xl:border-b md:gap-[15px]">
        <div className="ssm:flex ssm:justify-center">
          <div className="ssm:mb-[24px] ssm:mt-[24px] ssm:pl-[10px] md:mt-[24px] xl:mt-[24px]">
            <h3 className="font-normal text-left uppercase text-[14px] font-dm text-[rgba(47,88,82,0.60)] mb-[5px]">
              SUBJECTS
            </h3>
            <div className="flex flex-row items-start xl:gap-x-[10px] md:flex-col xl:flex-row md:gap-y-4 xl:w-auto ssm:gap-x-[40px]">
              <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal xl:w-[220px] xl:h-[145px] space-y-2 md:w-full">
                <li className="">Math</li>
                <li className="">Science</li>
                <li className="">English Language</li>
                <li className="">Homeschool Support</li>
                <li className="">Study Skills</li>
              </ul>

              <ul className="text-[#2F5852] xl:text-[16px] font-dm xl:w-[200px] xl:h-[145px] space-y-2 md:w-full">
                <li className="">Algebra</li>
                <li className="">Geometry</li>
                <li className="">Precalculus</li>
                <li className="">Calculus</li>
                <li className="">Homework Help</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ssm:border-t ssm:ml-[20px] ssm:mr-[20px] md:ml-0 md:mr-0"></div>
        {/* Test Prep Section */}
        <div className="ssm:flex ssm:flex-row ssm:justify-center ssm:pl-[16px] ssm:py-[24px] md:flex-block xl:gap-0">
          {/* Test Prep Section */}
          <div className="md:px-[40px] xl:pl-[44px] xl:pr-[180px] md:border-l xl:border-l ssm:pr-[80px] ssm:border-r">
            <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[5px] whitespace-nowrap">
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
          <div className=" md:border-r xl:border-r md:px-[40px] xl:pl-[44px] xl:pr-[100px] ssm:pl-[20px]">
            <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[5px] xl:whitespace-nowrap md:whitespace-nowrap ">
              COLLEGE READINESS
            </h3>
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal md:w-full md:flex-col">
              <li>AP</li>
              <li>IB</li>
            </ul>
          </div>
        </div>
        <div className="ssm:border-t ssm:ml-[20px] ssm:mr-[20px] md:ml-0 md:mr-0"></div>
        {/* About Us Section */}
        <div className="ssm:pl-[30px] xl:pl-0 md:pl-0 ssm:mt-[24px] ssm:border-l-0">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[5px]">
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
      {/* <div className="xl:mt-[10px] md:mt-[0px] xl:mb-[0px] md:mb-[0px]"></div> */}
      {/* Footer Bottom Section */}

      <div className="container mx-auto grid md:mb-[24px] md:mt-[24px] xl:grid-cols-4 xl:mb-[24px] xl:mt-[24px] ">
        <div className="order-2 ssm:order-2 md:order-2 xl:order-1 flex ssm:flex-col xl:flex-col md:flex-row ssm:items-center md:ml-[50px] text-center ssm:border-t md:border-t-0 xl:border-t-0">
          {/* Logo Section */}
          <Image
            className="xl:border-b ssm:mr-0 md:mr-0 md:w-[275px] md:h-[35px] xl:mt-2"
            src="/logo/logo3.png"
            alt="Foundation Learning"
            width={276}
            height={35}
          />

          {/* Middle Border in md screen */}
          <div className=" md:mx-[40px]"></div>

          {/* Text Section */}
          <div className="flex flex-col items-center justify-center text-center md:flex-col ssm:flex md:pl-0 xl:border-0 xl:pl-0 ssm:mb-[24px] ssm:mt-[15px]">
            <p className="text-[#2F5852] text-[16px] font-dm-sans md:whitespace-nowrap ssm:whitespace-nowrap">
              Terms and Conditions &bull; Privacy Policy
            </p>
            <p className="md:mt-0 text-[rgba(47,88,82,0.60)] text-[16px] font-dm-sans md:whitespace-nowrap ssm:whitespace-nowrap">
              &copy;Copyright {new Date().getFullYear()} Foundation Learning
            </p>
          </div>
        </div>

        <div className="order-1 ssm:order-1 md:order-1 xl:order-2 flex space-x-12 col-span-3 md:border-b md:border-t xl:border-b-0 xl:border-t-0 md:py-[16px] xl:ml-[200px] md:justify-center">
          <div className=" space-y-2 ssm:hidden xl:block md:block">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo/phone.png"
                alt="Foundation Learning"
                width={18}
                height={18}
              />
              <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">
                CALL
              </h3>
            </div>
            <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[20px] md:whitespace-nowrap">
              (800) 511-6948
            </p>
          </div>

          <div className="space-y-2 border-l border-r px-[24px] ssm:hidden xl:block md:block md:border-0 xl:border-l xl:border-r">
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
            <p className="text-[rgba(47,88,82,0.60)] text-[12px] font-dm-sans ml-[20px] md:w-[264px] md:h-[64px] xl:w-[291px] xl:h-[64px]">
              By calling or texting (800) 511-6948, customers agree to receive
              text messages. If you no longer wish to receive text messages, you
              may opt-out at any time by replying &quot;STOP&quot;
            </p>
          </div>

          <div className=" space-y-2 md:whitespace-nowrap ssm:hidden xl:block md:block">
            <div className="flex items-center xl:space-x-2 md:space-x-2">
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

        <div className=" xl:hidden md:hidden">
          <div className="flex ssm:flex-row ssm:ml-6 ssm:mr-6 ssm:border-t ssm:mt-[24px] ssm:border-b ssm:justify-center">
            <div className="ssm:whitespace-nowrap ssm:mt-[24px] ssm:mb-[24px]">
              <div className="flex items-center xl:space-x-2 md:space-x-2 ssm:gap-2">
                <Image
                  src="/logo/phone.png"
                  alt="Foundation Learning"
                  width={21}
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
            </div>

            <div className="md:whitespace-nowrap ssm:ml-6 ssm:mt-[24px] ssm:mb-[24px]">
              <div className="flex items-center xl:space-x-2 md:space-x-2">
                <Image
                  src="/logo/map.png"
                  alt="Foundation Learning"
                  width={21}
                  height={18}
                />
                <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans ssm:ml-4">
                  ADDRESS
                </h3>
              </div>
              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ssm:ml-[20px] ssm:whitespace-nowrap">
                80 Broad Street,
                <br />
                New York City <br />
                NY 10004
              </p>
            </div>
          </div>

          <div className="ssm:space-y-2 ssm:px-[24px] ssm:py-[24px] ">
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
        </div>
      </div>
    </footer>
  );
}
