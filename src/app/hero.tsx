"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Media Bridge <br /> 
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
          "News You Can Trust, Stories That Matter"
            </Typography>
            {/* <Typography className="mb-4" color="white" variant="h6"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Get the app
            </Typography> */}
            {/* <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                  Coming Soon
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/play-store-logo.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                   Coming Soon
              </Button>
            </div> */}
          </div>
          <Image
            width={470}
            height={250}
            src="/image/M.jpg"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-1" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
          Welcome to Media Bridge
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-black-500 lg:w-5/12 mb-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}         >
           Your Personalized Newspaper Advertising Partner!

          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-600 lg:w-5/12 text-justify"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
           Media Bridge is a one-stop platform connecting businesses and individuals with top newspaper publishers to get your ads in print—quickly, easily, and effectively. Whether you're promoting your brand, making public announcements, or sharing personal milestones, Media Bridge ensures your message reaches the right audience through trusted newspapers.


          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
