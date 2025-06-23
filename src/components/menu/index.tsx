"use client";

import { usePathname, useRouter } from "next/navigation";
import PAGE_ROUTES from "@/utils/consts/routes";

export default function Menu({
  isMenuOpen,
  setIsMenuOpen,
}: Readonly<{
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}>) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`bg-white fixed top-[60px]
      ${
        isMenuOpen
          ? "h-[calc(100vh-60px)] py-10 px-[8%] opacity-100"
          : "h-0 opacity-0"
      } 
      transition-all duration-300 ease-in-out overflow-y-hidden
      w-full z-[999] 
    `}
    >
      {/* Navigators */}
      <div className="flex-col flex items-start w-full">
        {PAGE_ROUTES.map((route) => (
          <button
            key={route.name}
            /* TODO: enable after page implemented */
            style={{
              pointerEvents: route.path === "/joining-us" ? "none" : "auto",
            }}
            onClick={() => {
              router.push(route.path);
              setIsMenuOpen(false);
            }}
            className="ml-8 text-xl font-bold tracking-wider h-full "
          >
            <div className="relative h-full flex gap-4 items-center justify-center group py-[13px]">
              <div
                className={`
                ${
                  pathname === route.path
                    ? "h-[20px] text-primary-red"
                    : "w-0 group-hover:h-0"
                }
                transition-all duration-300 ease-in-out
               w-[3px]   bg-primary-red
              `}
              ></div>
              <div
                className={`${
                  pathname === route.path ? " text-primary-red" : ""
                }`}
              >
                {route.name}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
