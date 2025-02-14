import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5FBFC] text-gray-800 p-10 mt-6">
      <div className="container mx-auto lg:grid lg:grid-cols-4 lg:gap-4 text-[12px] ">
        <div className="border-r pr-4">
          <h3 className="font-bold">SUBJECTS</h3>
          <div className="grid grid-cols-2 gap-2">
            <ul>
              <li>Math</li>
              <li>Science</li>
              <li>English Language</li>
              <li>Homeschool Support</li>
              <li>Study Skills</li>
            </ul>
            <ul>
              <li>Algebra</li>
              <li>Geometry</li>
              <li>Precalculus</li>
              <li>Calculus</li>
              <li>Homework Help</li>
            </ul>
          </div>
        </div>
        <div className="border-r px-4">
          <h3 className="font-bold">TEST PREP</h3>
          <ul>
            <li>SAT</li>
            <li>DSAT</li>
            <li>ACT</li>
            <li>SSAT</li>
            <li>ISEE</li>
            <li>HSPT</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">COLLEGE READINESS</h3>
          <ul>
            <li>AP</li>
            <li>IB</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">ABOUT US</h3>
          <ul>
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
            width={300}
            height={40}
          />
          <div className="mt-6 border-t pt-6 text-center text-sm"></div>
          <p className="mt-2">Terms and Conditions &bull; Privacy Policy</p>
          <p className="mt-2">&copy; Foundation Learning</p>
        </div>

        <div className="col-span-3 mt-6 pt-4 grid grid-cols-3 gap-4 text-left text-sm">
          <div className="border-r pr-4 pl-12 flex items-center space-x-2 mb-16">
            <svg
              className="w-8 h-8 text-orange-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 2h18a1 1 0 011 1v18a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1zm17 2H4v16h16V4zm-5 12a1 1 0 110 2H9a1 1 0 110-2h6zM8 6h8v2H8V6zm0 4h8v2H8v-2z" />
            </svg>
            <div>
              <h3 className="font-bold">CALL</h3>
              <p className="text-blue-600 font-semibold">(800) 511-6948</p>
            </div>
          </div>

          <div className="border-r px-4  items-start space-x-2">
            <div className="flex items-center space-x-2">
              <svg
                className="w-10 h-10 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.7-1.5A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm4.3-5.8c-.2-.1-1.5-.7-1.7-.8-.2-.1-.3-.1-.4.1-.1.2-.4.8-.5 1-.1.2-.2.2-.4.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.2.1 0 .2 0 .3.1.1.1.3.2.4.3.1.1.2.2.2.3.1.1.1.2 0 .3-.1.1-.2.3-.4.5-.2.2-.3.4-.5.5-.1.1-.1.2 0 .3.1.1.5.8 1.1 1.2.7.4 1.2.6 1.3.6.1 0 .2 0 .3-.1.1-.1.4-.5.5-.7.1-.2.1-.4 0-.5-.1-.1-.3-.2-.4-.2z" />
              </svg>
              <h3 className="font-bold">TEXT OR WHATSAPP</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-blue-600 font-semibold pl-10">
                (800) 511-6948
              </p>
              <p className="text-gray-600 mt-2 text-xs pl-10">
                By calling or texting (800) 511-6948, customers agree to receive
                text messages. If you no longer wish to receive text messages,
                you may opt-out at any time by replying "STOP."
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
              <h3 className="font-bold">ADDRESS</h3>
            </div>
            <div className="flex flex-col">
              <p className="text-blue-600 font-semibold pl-12">
                80 Broad Street, New York City
              </p>
              <p className="text-blue-600 font-semibold pl-12">10004 NY</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
