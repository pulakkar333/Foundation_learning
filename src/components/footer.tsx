import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5FBFC] text-gray-800 p-10 mt-6">
      <div className="container mx-auto lg:grid lg:grid-cols-4 lg:gap-4 text-[12px] ">
        <div className="border-r pr-4">
          <h3
            className="
    font-bold 
    text-left 
    uppercase 
    text-[14px] 
    font-dm-sans 
    text-[rgba(47,88,82,0.60)]
    overflow-hidden 
    text-ellipsis 
    whitespace-nowrap
    mb-[7px]
  "
            style={{
              display: "-webkit-box",
              transform: "rotate(-0.092deg)",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              lineHeight: "normal",
            }}
          >
            SUBJECTS
          </h3>

          <div className="grid grid-cols-2 gap-[40px]">
            <ul className="w-[200px] text-[#2F5852] text-[16px] font-dm-sans font-[16px] leading-normal">
              <li>Math</li>
              <li>Science</li>
              <li>English Language</li>
              <li>Homeschool Support</li>
              <li>Study Skills</li>
            </ul>

            <ul className="w-[200px] text-[#2F5852] text-[16px] font-dm-sans font-[16px] leading-normal">
              <li>Algebra</li>
              <li>Geometry</li>
              <li>Precalculus</li>
              <li>Calculus</li>
              <li>Homework Help</li>
            </ul>
          </div>
        </div>
        <div className="border-r px-4">
          <h3
            className="
    font-bold 
    text-left 
    uppercase 
    text-[14px] 
    font-dm-sans 
    text-[rgba(47,88,82,0.60)]
    overflow-hidden 
    text-ellipsis 
    whitespace-nowrap
    mb-[7px]
  "
            style={{
              display: "-webkit-box",
              transform: "rotate(-0.092deg)",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              lineHeight: "normal",
            }}
          >
            TEST PREP
          </h3>
          <ul className="w-[200px] text-[#2F5852] text-[16px] font-dm-sans font-[16px] leading-normal">
            <li>SAT</li>
            <li>DSAT</li>
            <li>ACT</li>
            <li>SSAT</li>
            <li>ISEE</li>
            <li>HSPT</li>
          </ul>
        </div>
        <div>
          <h3
            className="
    font-bold 
    text-left 
    uppercase 
    text-[14px] 
    font-dm-sans 
    text-[rgba(47,88,82,0.60)]
    overflow-hidden 
    text-ellipsis 
    whitespace-nowrap
    mb-[7px]
  "
            style={{
              display: "-webkit-box",
              transform: "rotate(-0.092deg)",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              lineHeight: "normal",
            }}
          >
            COLLEGE READINESS
          </h3>
          <ul className="w-[200px] text-[#2F5852] text-[16px] font-dm-sans font-[16px] leading-normal">
            <li>AP</li>
            <li>IB</li>
          </ul>
        </div>
        <div>
          <h3
            className="
    font-bold 
    text-left 
    uppercase 
    text-[14px] 
    font-dm-sans 
    text-[rgba(47,88,82,0.60)]
    overflow-hidden 
    text-ellipsis 
    whitespace-nowrap
    mb-[7px]
  "
            style={{
              display: "-webkit-box",
              transform: "rotate(-0.092deg)",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              lineHeight: "normal",
            }}
          >
            ABOUT US
          </h3>
          <ul className="w-[200px] text-[#2F5852] text-[16px] font-dm-sans font-[16px] leading-normal">
            <li>Our Process</li>
            <li>Our Results</li>
            <li>Reviews</li>
            <li>Our Tutors</li>
            <li>Book Free Consultation</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 border-t pt-6 text-center text-sm"></div>

      <div className="container mx-auto grid grid-cols-4 gap-4 text-sm">
        <div className="col-span-1">
          <Image
            className="mr-auto"
            src="/logo/logo.png"
            alt="Foundation Learning"
            width={276.818}
            height={35}
          />
          <div className="mt-6 border-t pt-6 text-center text-sm"></div>
          <p className="mt-2 text-[#2F5852] text-[16px] font-dm-sans font-normal leading-normal">
            Terms and Conditions &bull; Privacy Policy
          </p>

          <p className="mt-2 text-[rgba(47,88,82,0.60)] text-[16px] font-dm-sans font-normal leading-normal">
            &copy; Foundation Learning
          </p>
        </div>

        <div className="col-span-3 mt-6 pt-4 grid grid-cols-3 gap-4 text-left text-sm">
          <div className="border-r pr-4 pl-12 flex items-center space-x-2 mb-16">
            <i className="fas fa-phone-alt fa-flip-horizontal text-orange-600 text-2xl mb-4"></i>
            <div>
              <h3 className="font-weight-bold text-[14px] text-[rgba(47,88,82,0.60)] font-dm-sans font-normal uppercase leading-normal">
                CALL
              </h3>

              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold leading-normal">
                (800) 511-6948
              </p>
            </div>
          </div>

          <div className="border-r px-4  items-start space-x-2">
            <div className="flex items-center space-x-2">
              <i className="fas fa-comment-dots text-orange-600 text-3xl mr-2"></i>
              <h3 className="font-weight-bold text-[14px] text-[rgba(47,88,82,0.60)] font-dm-sans font-normal uppercase leading-normal">
                TEXT OR WHATSAPP
              </h3>
            </div>

            <div className="flex flex-col">
              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold leading-normal ml-10">
                (800) 511-6948
              </p>
              <p className="text-[rgba(47,88,82,0.60)] font-dm-sans text-[12px] font-normal leading-normal w-[291px] mt-2 pl-10">
                By calling or texting (800) 511-6948, customers agree to receive
                text messages. If you no longer wish to receive text messages,
                you may opt out at any time by replying &quot;STOP&quot;.
              </p>
            </div>
          </div>

          <div className="pl-4 flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <svg
                className="w-10 h-10 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C7.03 2 3 6.03 3 11c0 5.97 9 11 9 11s9-5.03 9-11c0-4.97-4.03-9-9-9zm0 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
              </svg>
              <h3 className="font-weight-bold text-[14px] text-[rgba(47,88,82,0.60)] font-dm-sans font-normal uppercase leading-normal">
                ADDRESS
              </h3>
            </div>
            <div className="flex flex-col ml-12">
              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold leading-normal">
                80 Broad Street, New York City
              </p>
              <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold leading-normal">
                10004 NY
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
