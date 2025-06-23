import Image from "next/image";

interface Person {
  id: number;
  name: string;
  personalPageUrl: string;
  position:
    | "Faculty"
    | "PhD Students"
    | "MS Students"
    | "Alumni"
  enrollYear: number;
  interest: string;
  profileImage: string;
}

interface ProfileCardProps {
  readonly person: Person;
}

// Helper function to determine if the image is a URL or local path
const getImageSrc = (imagePath: string) => {
  // Check if it's a URL (starts with http/https)
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // Check if it's a Google Drive link
  if (imagePath.includes("drive.google.com")) {
    return imagePath;
  }

  // For local paths, remove 'src/utils/mock-data/' prefix if present and add leading slash
  const cleanPath = imagePath.replace(/^src\/utils\/mock-data\//, "");
  return cleanPath.startsWith("/") ? cleanPath : `/${cleanPath}`;
};

export default function ProfileCard({ person }: ProfileCardProps) {
  const imageSrc = getImageSrc(person.profileImage);
  console.log("Image source:", imageSrc);
  return (
    <div
      className="hover:shadow-2xl 
    w-fit hover:scale-105 transition-all duration-300 ease-in-out hover:z-30 group
    bg-white relative profile-container"
    >
      {/* Main card */}
      <div className="flex flex-col items-center text-center z-10 overflow-hidden">
        {/* Profile image */}
        <div className="relative w-[220px] h-[260px] cursor-pointer">
          <Image
            src={person.profileImage}
            alt={`${person.name} profile picture`}
            fill
            className="object-cover
            transition-all duration-500 ease-in-out
             "
          />

          {/* Darken overlay */}
          <div
            className="w-full h-full absolute top-0 left-0 z-10 
          opacity-100 transition-all duration-100 ease-in-out
          bg-[url('/images/shared/nnnoise.svg')] 
          "
          ></div>

          {/* Link to personal page */}
          {/* <div
            className="rounded-full size-16 bg-white absolute z-[99] top-[140px] left-[150px]
          group-hover:size-[72px] transition-all duration-300 ease-in-out
          flex items-center justify-center hover:shadow-lg
          "
          >
            <Link
              href={person.personalPageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={arrowIcon}
                alt="Arrow Icon"
                width={40}
                height={40}
                className="-ml-1 group-hover:ml-1 transition-all duration-300 ease-in-out"
              />
            </Link>
          </div> */}

          {/* Profile info */}
          <div
            className="absolute w-full bottom-0 left-0 sm:pl-2 flex flex-col items-start text-left z-[99] py-2 bg-white
        "
          >
            {/* Name */}
            <h3
              className="text-lg font-semibold text-gray-900 mb-2 leading-none 
          "
            >
              {person.name}
            </h3>
            {/* Position */}
            {person.interest && (
              <div
                className="text-sm text-gray-600 mb-1 leading-none overflow-hidden transition-all duration-300 ease-in-out
               line-clamp-2 h-0 group-hover:h-[30px] 
           "
              >
                {person.interest}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
