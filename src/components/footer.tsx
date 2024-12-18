"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

// const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    
    <footer className="bg-gray-700 px-8 pt-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-1"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              Stylehaws
            </Typography>
            <Typography color="white" className="mb-12 font-normal"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            Where Global Design Meets Your Unique Style
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              <a href="/deleteaccount" className="!text-gray-200 font-medium underline">Need to delete your account?</a>
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Comming Soon
              </Button>
              <Button
                color="white"
                className="flex items-center justify-center" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/play-store-logo.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Comming Soon
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">

          <div className="flex gap-2">
            <IconButton variant="text" color="white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <i className="fa-brands fa-tiktok text-2xl not-italic opacity-75" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
