"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

export function Footer() {
  // Define empty handler functions
  const handlePointerEvent = () => {};
  const handleResize = () => {};

  return (
    <footer className="bg-gray-700 px-8 pt-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="#"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-1"
              onPointerEnterCapture={handlePointerEvent}
              onPointerLeaveCapture={handlePointerEvent}
              onResize={handleResize}
              onResizeCapture={handleResize}
            >
              Media Bridge
            </Typography>
            <Typography 
              color="white" 
              className="mb-12 font-normal"
              onPointerEnterCapture={handlePointerEvent}
              onPointerLeaveCapture={handlePointerEvent}
              onResize={handleResize}
              onResizeCapture={handleResize}
            >
              News You Can Trust, Stories That Matter
            </Typography>
            {/* ...existing code for ul... */}
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography 
              variant="h6" 
              color="white" 
              className="mb-3"
              onPointerEnterCapture={handlePointerEvent}
              onPointerLeaveCapture={handlePointerEvent}
              onResize={handleResize}
              onResizeCapture={handleResize}
            >
              Contact
            </Typography>
            <div className="flex flex-col gap-2">
              <Typography
                color="white"
                className="flex items-center justify-center"
                onPointerEnterCapture={handlePointerEvent}
                onPointerLeaveCapture={handlePointerEvent}
                onResize={handleResize}
                onResizeCapture={handleResize}
              >
                PH +92 42 3 5023505,
                Cell: +92 300 4302322,
                +92 323 4302322,
                +92 334 8114663,
              </Typography>
              <Typography
                color="white"
                className="flex items-center justify-center"
                onPointerEnterCapture={handlePointerEvent}
                onPointerLeaveCapture={handlePointerEvent}
                onResize={handleResize}
                onResizeCapture={handleResize}
              >
                E-mail: mediabridgeall@yahoo.com www.mediabridgepk.com
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="flex gap-2">
            <IconButton 
              variant="text" 
              color="white"
            >
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton 
              variant="text" 
              color="white"
            >
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;