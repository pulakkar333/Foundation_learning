import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-[#F5FBFC] text-gray-800 xl:px-[50px] xl:py-[0px] md:px-[50px] md:py-[25px] xl:w-auto"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="container md:flex md:flex-row xl:text-[12px] xl:space-x-[20px] xl:justify-center xl:border-b xl:pb-[30px] md:pb-[30px]">
        {/* Subjects Section */}
        <div className="ssm:mt-[24px] xl:mt-[24px] ssm:pl-[16px]">
          <h3 className="font-normal text-left uppercase text-[14px] font-dm text-[rgba(47,88,82,0.60)] mb-[7px]">
            SUBJECTS
          </h3>
          <div className="flex flex-row items-start xl:gap-x-[10px] md:flex-col xl:flex-row md:gap-y-4 xl:w-auto ssm:gap-x-[40px]">
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
        <div className="ssm:border-t ssm:mt-[24px] ssm:ml-[20px] ssm:mr-[20px] md:ml-0 md:mr-0"></div>
        {/* Test Prep Section */}
        <div className="ssm:flex ssm:flex-row ssm:gap-x-[50px] ssm:mt-[24px] ssm:pl-[16px] md:flex-block">
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
        <div className="ssm:border-t ssm:mt-[24px] ssm:ml-[20px] ssm:mr-[20px] md:ml-0 md:mr-0"></div>
        {/* About Us Section */}
        <div className="xl:border-l md:border-l xl:px-[44px] md:px-[44px] ssm:mt-[24px] ssm:pl-[16px] ssm:border-l-0">
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
      <div className="xl:mt-[10px] md:mt-[0px] xl:mb-[0px] md:mb-[0px]"></div>
      {/* Footer Bottom Section */}

      <div className="container mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="order-2 ssm:order-2 md:order-2 xl:order-1 flex ssm:flex-col xl:flex-col md:flex-row items-center md:items-start md:gap-[100px] xl:gap-0 md:border-r xl:border-0 ssm:ml-10 ssm:border-t md:border-t-0">
          <Image
            className="xl:border-b ssm:mr-10 mt-[24px]"
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

        <div className="order-1 ssm:order-1 md:order-1 xl:order-2 flex justify-end space-x-12 col-span-3 md:border-b md:border-t xl:border-b-0 xl:border-t-0 md:py-4" >
          <div className="  items-start xl:space-x-4 md:space-x-4 md:whitespace-nowrap ssm:hidden xl:block md:block">
            <Image
              src="/logo/phone.png"
              alt="Foundation Learning"
              width={18}
              height={18}
              className=""
            />
            <div className="">
              <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">
                CALL
              </h3>
              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold">
                (800) 511-6948
              </p>
            </div>
          </div>

          <div className=" space-y-2 border-r border-l px-6 ssm:hidden xl:block md:block">
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

        <div className=" xl:hidden md:hidden second-footer">
          <div className="flex ssm:flex-row ssm:ml-6 ssm:border-t ssm:mt-[24px] ssm:border-b ">
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

            <div className="md:whitespace-nowrap ssm:border-l ssm:ml-6 ssm:mt-[24px] ssm:mb-[24px]">
              <div className="flex items-center xl:space-x-2 md:space-x-2 ssm:ml-6">
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
              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[30px]">
                80 Broad Street,
                <br />
                New York City <br />
                NY 10004
              </p>
            </div>
          </div>

          <div className="space-y-2 px-6 mt-4 ssm:mt-[40px]">
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
