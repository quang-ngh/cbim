import Link from "next/link";
import Image from "next/image";
import mockPiData from "@/utils/mock-data/pi";
import redArrow from "@images/shared/red-arrow.svg";

export default function PiInfo() {
  return (
    <div
      className="w-full flex items-center justify-start xl:gap-20 lg:gap-10 gap-6 my-10
      lg:flex-row flex-col lg:items-start

    "
    >
      {/* Pi profile image */}
      <div
        className="hover:shadow-md transition-shadow duration-200 
    w-fit bg-white relative profile-container"
      >
        <div className="flex flex-col items-center text-center group relative z-10 overflow-hidden">
          <div className="relative w-[320px] h-[380px] cursor-pointer">
            <Image
              src={mockPiData.profileImage}
              alt={`${mockPiData.name} profile picture`}
              fill
              className="object-cover
            transition-all duration-500 ease-in-out
            pi-image-group "
            />

            {/* Darken overlay */}
            <div
              className="w-full h-full absolute top-0 left-0 z-10 
            group-hover:opacity-100 opacity-0 duration-100 ease-in-out
              bg-gradient-to-t
          from-[#003153]/80 via-transparent to-transparent
          "
            ></div>
          </div>

          {/* Profile info */}
          <div
            className="absolute -bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-start justify-end z-[99] 
        group-hover:scale-105 group-hover:bottom-4 transition-all duration-300 ease-in-out
        
        "
          >
            {/* Name */}
            <h3
              className="text-lg font-semibold text-gray-900 mb-2 leading-none text-nowrap
          group-hover:text-white group-hover:text-xl transition-all duration-300 ease-in-out
          "
            >
              {mockPiData.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Pi info */}
      <div>
        <div className="px-3 py-1.5 mb-4 border-2 border-primary-red w-fit text-xl font-bold tracking-wide font-pt-serif">
          Founder
        </div>

        {/* Name */}
        <h2
          className="text-3xl font-pt-serif font-semibold text-gray-900 mb-2 leading-none text-nowrap
          transition-all duration-300 ease-in-out
          "
        >
          {mockPiData.name}
        </h2>
        {/* Position */}
        <div
          className="text-sm text-gray-600 leading-none italic mb-2
          group-hover:text-gray-100 group-hover:text-lg transition-all duration-300 ease-in-out"
        >
          {mockPiData.position}
        </div>

        <div className="w-full h-[1px] bg-gray-300 my-4"></div>

        <p className="mt-2 text-secondary-text">{mockPiData.description}</p>

        <div className="mt-8">
          <Link
            href={mockPiData.personalPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-red font-semibold hover:underline group flex items-center justify-start"
          >
            <div className="group-hover:ml-2 transition-all duration-300 ease-in-out">
              Visit {mockPiData.name}&apos;s Personal Page
            </div>
            <Image
              src={redArrow}
              alt="redarrow"
              className="w-0 h-5 group-hover:w-[20px] transition-all duration-300 ease-in-out
            group-hover:ml-2 ml-0 
            "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
