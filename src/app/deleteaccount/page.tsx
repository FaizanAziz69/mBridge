"use client";
import { Footer, Navbar } from "@/components";
import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const Deleteaccount = () => {
  const IMAGES_WITH_DESCRIPTIONS = [
    {
      src: "/image/deleteaccount.png",
      alt: "Delete Account",
      title: "Need to delete your account ?",
      description:
        "Follow these simple steps to permanently delete your account and all associated data",
      steps: [
        {
          steps: "Sign in to your account using the app",
        },
        {
          steps: "Go to the Settings screen from the bottom menu",
        },
        {
          steps: "Select Delete Account and confirm your choice",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      <Navbar />
      <section className="py-20 px-8 mt-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {IMAGES_WITH_DESCRIPTIONS.map(
            ({ src, alt, title, description, steps }, index) => (
              <div
                key={src}
                className={`flex flex-col-reverse lg:flex-row ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                } items-center gap-8 ${
                  index % 2 === 0 ? "bg-gray-400" : "bg-gray-100"
                } p-6 rounded-lg`}
              >
                {/* Text Section */}
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h4 className="mb-6 text-black font-bold">
                    {title}
                  </h4>
                  <p className="text-black text-lg">
                    {description}
                  </p>
                  <ul className=" list-decimal ml-4 mt-1">
                    {steps.map((items, i) => {
                      return (
                        <li key={i} className="text-gray-700">
                          {items.steps}
                        </li>
                      );
                    })}
                  </ul>
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
            )
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Deleteaccount;
