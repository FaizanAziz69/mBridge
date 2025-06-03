"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const IMAGES_WITH_DESCRIPTIONS = [
  {
    src: "/image/vision.png",
    alt: "Sign Up",
    title: "Vision",
    description:
      "MEDIA BRIDGE becomes an indispensable advertising source of its clientele.",
  },
  {
    src: "/image/mission.jpg",
    alt: "Home Screen",
    title: "MISSION",
    description:
      "Working with clients as a community. Necessitating Mutual Conviviality, generating ideas that build Leadership Brands through imagination and a deep sensitive understanding of human behaviour.",
  },
  {
    src: "/image/stra.png",
    alt: "Chat",
    title: "THE ADVERTISING STRATEGY",
    description:
      "Advertising Strategies are based on creative Ideas. Our basic purpose is to promote and execute the clients message to the consumers with simplicity and attractive human behaviours, as simple and direct message can be easily understood by the consumers.",
  },
  {
    src: "/image/Idea.webp",
    alt: "Custom Orders",
    title: "IDEAS BEHAVIOUR",
    description:
      "Ideas are nurtured in creative minds. Converting ideas into brands is an art Media Bridge has artists that aspires to turn your own, or our presented, ideas into durable, sustainable, profitable brands. In a nutshell the idea generated in a mind will evolve into Customer Behaviour.",
  },
  {
    src: "/image/brand.png",
    alt: "AI Designs",
    title: "BRANDING POSITION:",
    description:
      "MEDIA BRIDGE has the experience of efficiently branding the position of consumer products that can result in direct increase is products sales in the target market. Globally, correct position of a brand largely depends upon quality and content of the supporting advertisement, used as a tool to directly address consumer needs. We, at Media Bridge,  specialize in this area.",
  },
  
  {
    src: "/image/add.webp",
    alt: "Multiple Language Support",
    title: "PRINT MEDIA ADVERTISING",
    description:
      "Print media advertising is a form of advertising that uses physically printed media, such as magazines and newspapers, to reach consumers, business customers and prospects. Advertisers also use digital media, such as banner ads, mobile advertising, and advertising in social media, to reach the same target audiences. The proliferation of digital media has led to a decline in advertising expenditure in traditional print media, but print isn't dead. Print media advertising is physically printed media including newspapers, magazines, posters and billboards etc..",
  },
    {
    src: "/image/projection.jpeg",
    alt: "Multiple Language Support",
    title: "MULTIMEDIA PROJECTION:",
    description:
      "MEDIA BRIDGE has the diversified experience of dynamic multimedia projection field. Having carried out many such activities, we have the privilege to serve our clients who have benefited a lot from our developed multimedia projections. It has helped them in stand and maintain a reputable position in the market.  MEDIA BRIDGE has satisfied client's list that has availed it services for Web-designing, and TV Animations and  Commercials.",
  },
    {
    src: "/image/deep.png",
    alt: "Multiple Language Support",
    title: "IN-DEPTH ANALYSIS",
    description:
      "MEDIA BRIDGE has the ability to carry out In-depth Analysis of Clients needs and strategies. This exercise enables both parties to come to a logical, cost-effective and better solution for the task at p increased profits and a stable organization.",
  },
      {
    src: "/image/business.png",
    alt: "Multiple Language Support",
    title: "OUR BUSINESS FOLDER",
    description:
      "MEDIA BRIDGE Advertising    has specialized departments to cater for clients needs through creative ideas and timely delivery at affordable costs. Our Creative Department conceives, develops and turns the idea in a write-up. Multimedia Department delivers the idea as per Client requirements, with a motto of THINK BEYOND THE HORIZON.",
  },
];

function MobileConvenience() {
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
              <h2 className="mb-2 text-black font-bold text-2xl">
                {title}
              </h2>
              <p className="text-black text-lg">
                {description}
              </p>
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

