"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const IMAGES_WITH_DESCRIPTIONS = [
  {
    src: "/image/signup-portrait.png",
    alt: "Sign Up",
    title: "Sign Up",
    description:
      "Join StyleHaws as a customer or designer and connect with a global creative network. Start showcasing your talent or discovering unique designs today.",
  },
  {
    src: "/image/home-page.png",
    alt: "Home Screen",
    title: "Home Screen",
    description:
      "Explore designers and unique products from around the world, all at your fingertips. Find inspiration and exclusive creations in every category.",
  },
  {
    src: "/image/Chats-portrait.png",
    alt: "Chat",
    title: "Chat",
    description:
      "Connect with designers and customers worldwide through real-time, language-free communication. Build meaningful collaborations and partnerships effortlessly.",
  },
  {
    src: "/image/custom-order-portrait.png",
    alt: "Custom Orders",
    title: "Custom Orders",
    description:
      "Place custom orders that reflect your unique style, crafted to meet your requirements. Get designs tailored exclusively to your vision.",
  },
  {
    src: "/image/AI-screen-portrait.png",
    alt: "AI Designs",
    title: "AI Designs",
    description:
      "Design like a pro by turning your ideas into reality with the power of AI. Unleash your creativity without any technical expertise.",
  },
  {
    src: "/image/language-portrait.png",
    alt: "Multiple Language Support",
    title: "Multiple Language Support",
    description:
      "Experience the platform seamlessly in your preferred language, wherever you are. Bridge cultural gaps and communicate effortlessly across the globe.",
  },
];

export function MobileConvenience() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {IMAGES_WITH_DESCRIPTIONS.map(({ src, alt, title, description }, index) => (
          <div
            key={src}
            className={`flex flex-col-reverse lg:flex-row ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            } items-center gap-8 ${index % 2 === 0 ? "bg-gray-400" : "bg-gray-100"} p-6 rounded-lg`}
          >
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <Typography
                variant="h4"
                className="mb-2 text-black font-bold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                {title}
              </Typography>
              <Typography className="text-black text-lg"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                {description}
              </Typography>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2">
              <Image
                width={250}
                height={250}
                src={src}
                alt={alt}
                className="w-auto h-auto mx-auto rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MobileConvenience;
