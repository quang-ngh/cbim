import Image from "next/image";
import logo from "@images/logo.png";

export default function Footer() {
  return (
    <div
      className="w-full relative flex justify-center
  "
    >
      <div
        className=" w-full
        xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]
        px-4 md:px-0 relative
    "
      >
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>

        <div className="mb-10">
          {/* Lab name */}
          <div className="flex items-end justify-start gap-2">
            <Image
              src={logo}
              alt="CBIM Logo"
              width={40}
              height={40}
              className=""
            />

            <div className="border-l-2 pl-2  text-3xl font-bold leading-none">
              CBIM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
