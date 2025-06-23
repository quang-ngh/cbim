import Image from "next/image";
import backgroundImage from "@images/home/bg.png";
import PiInfo from "./pi-info";
import News from "./news";

export default function Home() {
  return (
    <main className="w-full bg-white relative">
      <div className="w-full flex flex-col items-center">
        <div className="w-full relative h-[500px]">
          {/* Thumbnail image */}
          <Image
            src={backgroundImage}
            alt="Rutgers AI Lab Background"
            className="object-cover object-left "
            fill
          />

          {/* <div className="absolute top-0 left-0 xl:w-[24%] w-[16%] h-full z-30 bg-primary-red"></div> */}

          <div className="flex items-center justify-start w-full h-full relative z-30">
            <div className=" w-[3%] h-full z-30 bg-primary-red"></div>
          </div>

          <div className="w-full h-full absolute top-0 left-0 z-10 bg-[#003153]/30"></div>

          <div
            className=" font-bold font-pt-serif w-full
          xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white
          "
          >
            <div
              className="md:w-[65%] w-full flex flex-col gap-4
            md:px-0 px-6
            "
            >
              <div className="2xl:text-8xl xl:text-7xl lg:text-6xl text-4xl">
                {" "}
                CBIM
              </div>

              <div>
                The Center for Computational Biomedicine Imaging and Modeling
                (CBIM) at Rutgers University is a premier research center
                focused on biomedicine, computer vision, and AI. CBIM drives
                innovation through interdisciplinary collaboration and is
                supported by major federal agencies and leading academic and
                industry partners.
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div
          className="w-full 
          xl:max-w-[1140px] 2xl:max-w-[1320px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px]
          pt-8 md:px-3 px-4 
        "
        >
          {/* Lab info */}
          <h2 className="xl:text-3xl text-xl font-bold tracking-wide font-pt-serif">
            Computational Biomedicine Imaging and Modeling (CBIM)
          </h2>
          <div className="py-5 w-full mb-10">
            <div className="mt-4 tracking-wide text-secondary-text">
              The Center for Computational Biomedicine Imaging and Modeling
              (CBIM) was founded by Professor Dimitris Metaxas in 2001 to serve
              as an environment for conducting novel research in the areas of
              Computational Biomedicine, Computer Vision, Computer Graphics,
              Scientific Computations, Learning and Robotics. CBIM has 10
              faculty members and around 30 graduate students. It is located in
              a space comprising of almost 11,000 square feet which includes a
              separate space for human motion capture experiments. Funding for
              CBIM is provided by all major Government agencies such as NIH,
              NASA, NSF, ARO, ONR and AFOSR. CBIM has several collaborative
              projects with research and faculty from other major Universities
              and research labs such as Boston Univ. UPENN, Columbia, NYU
              Medical School, MIT, Stanford, Brookhaven National Laboratory,
              Siemens Healthcare and Adobe Systems.
            </div>
          </div>

          {/* Pi info */}
          <PiInfo />

          {/* News */}
          <News />

          {/* All stuffs */}
          {/* <AllStuffs /> */}
        </div>
      </div>
    </main>
  );
}
