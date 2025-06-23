import Image from "next/image";
import backgroundImage from "@images/home/bg.png";
import ProfileCard from "./member-card";
import { mockPeople, groupPeopleByPosition } from "@/utils/mock-data/members";

export default function Members() {
  const groupedPeople = groupPeopleByPosition(mockPeople);
  return (
    <main className="w-full bg-white relative">
      <div className="w-full flex flex-col items-center">
        {/* Thumbnail image */}
        <Image
          src={backgroundImage}
          alt="Rutgers AI Lab Background"
          className="object-cover w-full h-[360px]"
        />
        {/* Main content */}
        <div
          className="w-full 
          xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]
          pt-8 px-3 
        "
        >
          {/* Section title */}
          <div className="py-5 w-full">
            <h2 className="xl:text-5xl text-3xl font-bold tracking-wide font-pt-serif">
              Members
            </h2>
          </div>

          {/* Members by position */}
          <div className="space-y-12 pb-20">
            {groupedPeople.map((group) => (
              <div key={group.position} className="space-y-6">
                {/* Position Header */}
                <div
                  className="border-b border-gray-200 flex md:flex-row flex-col justify-start
                items-start md:items-center
                md:gap-4 gap-1"
                >
                  <h3 className="text-2xl font-semibold font-pt-serif ">
                    {group.position}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 font-semibold tracking-wide">
                    {group.people.length} Member
                    {group.people.length !== 1 ? "s" : ""}
                  </p>
                </div>

                {/* Profile Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                  {group.people.map((person) => (
                    <ProfileCard key={person.id} person={person} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
