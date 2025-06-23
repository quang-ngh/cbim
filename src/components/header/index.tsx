"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import logo from "@images/logo.png";
import PAGE_ROUTES from "@/utils/consts/routes";
import Image from "next/image";
import openMenu from "@images/shared/menu.svg";
import closeMenu from "@images/shared/close.svg";

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
}: Readonly<{
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex justify-center w-full fixed top-0 left-0 bg-white z-[999] shadow-lg">
      <div
        className="
        xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]
      flex items-center 
      md:justify-start justify-between px-4 md:px-0
      w-full h-[60px]"
      >
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
        {/* Navigators */}
        <div className="hidden items-center justify-start h-full md:flex">
          {PAGE_ROUTES.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              /* TODO: enable after page implemented */
              style={{
                pointerEvents: route.path === "/joining-us" ? "none" : "auto",
              }}
              className="ml-8 text-lg font-bold tracking-wider h-full "
            >
              <div className="relative h-full flex items-center justify-center group">
                <div
                  className={`${
                    pathname === route.path ? " text-primary-red" : ""
                  }`}
                >
                  {route.name}
                </div>

                <div
                  className={`
                ${
                  pathname === route.path
                    ? "w-[70px] text-primary-red"
                    : "w-0 group-hover:w-[70px]"
                }
                transition-all duration-300 ease-in-out
               h-[5px] absolute bottom-0 left-1/2 -translate-x-1/2 bg-primary-red
              `}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        {isMenuOpen ? (
          <button
            className="md:hidden flex items-center cursor-pointer justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src={closeMenu}
              alt="Close Menu"
              width={24}
              height={24}
              className="text-primary-red"
            />
          </button>
        ) : (
          <button
            className="md:hidden flex items-center cursor-pointer justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(true)}
          >
            <Image
              src={openMenu}
              alt="Open Menu"
              width={24}
              height={24}
              className="text-primary-red"
            />
          </button>
        )}
      </div>
    </div>
  );
}
