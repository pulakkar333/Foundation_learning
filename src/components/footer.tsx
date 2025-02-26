import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5FBFC] text-gray-800 p-6 md:p-10 mt-6">
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-[12px]">
        {/* Subjects Section */}
        <div className="border-r md:border-r pr-4">
          <h3 className="font-bold text-left uppercase text-[14px] font-dm-sans text-[rgba(47,88,82,0.60)] mb-[7px]">
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
            <ul className="text-[#2F5852] text-[16px] font-dm-sans leading-normal">
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

      <div className="mt-[50px] border-t ml-[35px] mb-[40px]"></div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
        {/* Logo and Legal */}
        <div className="flex flex-col items-center md:items-start">
          <Image className="border-b" src="/logo/logo.png" alt="Foundation Learning" width={276.818} height={35} />
          <p className="mt-2 text-[#2F5852] text-[16px] font-dm-sans">Terms and Conditions &bull; Privacy Policy</p>
          <p className="mt-2 text-[rgba(47,88,82,0.60)] text-[16px] font-dm-sans">&copy; Foundation Learning</p>
        </div>

        {/* Call Section */}
        <div className="flex items-center md:justify-start space-x-4 border-r pr-4">
          <i className="fas fa-phone-alt fa-flip-horizontal text-orange-600 text-2xl"></i>
          <div>
            <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">CALL</h3>
            <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold">(800) 511-6948</p>
          </div>
        </div>

        {/* Text/WhatsApp Section */}
        <div className="flex flex-col space-y-2 border-r px-4">
          <div className="flex items-center space-x-2">
            <i className="fas fa-comment-dots text-orange-600 text-2xl"></i>
            <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">TEXT OR WHATSAPP</h3>
          </div>
          <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[30px]">(800) 511-6948</p>
          <p className="text-[rgba(47,88,82,0.60)] text-[12px] font-dm-sans ml-[30px]">
            By calling or texting (800) 511-6948, customers agree to receive text messages.
            Reply "STOP" to opt out.
          </p>
        </div>

        {/* Address Section */}
        <div className="flex flex-col space-y-2 pl-4">
          <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C7.03 2 3 6.03 3 11c0 5.97 9 11 9 11s9-5.03 9-11c0-4.97-4.03-9-9-9zm0 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
            </svg>
            <h3 className="text-[14px] text-[rgba(47,88,82,0.60)] uppercase font-dm-sans">ADDRESS</h3>
          </div>
          <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[40px]">80 Broad Street, New York City</p>
          <p className="text-[#2F5852] font-dm-sans text-[16px] font-bold ml-[40px]">10004 NY</p>
        </div>
      </div>
    </footer>
  );
}
