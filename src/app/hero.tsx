"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography as="h1" className="mb-4 text-white" {...({} as any)}>
              Media Bridge <br /> 
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
              {...({} as any)}
            >
              "News You Can Trust, Stories That Matter"
            </Typography>
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
          <Typography variant="h3" className="mb-1 text-blue-gray-900" {...({} as any)}>
            Welcome to Media Bridge
          </Typography>
          <Typography
            variant="lead"
            className="font-normal !text-black-500 lg:w-5/12 mb-3"
            {...({} as any)}
          >
            Your Personalized Newspaper Advertising Partner!
          </Typography>
          <Typography
            variant="lead"
            className="font-normal !text-gray-600 lg:w-5/12 text-justify"
            {...({} as any)}
          >
            Media Bridge is a one-stop platform connecting businesses and individuals with top newspaper publishers to get your ads in print—quickly, easily, and effectively. Whether you're promoting your brand, making public announcements, or sharing personal milestones, Media Bridge ensures your message reaches the right audience through trusted newspapers.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
