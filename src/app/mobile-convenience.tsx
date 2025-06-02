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



// "use client";

// import React, { useState, useEffect, useRef } from "react";

// const SERVICES_DATA = [
//   {
//     src: "/image/vision.png",
//     alt: "Vision",
//     title: "Vision",
//     description: "MEDIA BRIDGE becomes an indispensable advertising source of its clientele.",
//     gradient: "from-blue-600 to-purple-600",
//     bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
//     icon: "🎯"
//   },
//   {
//     src: "/image/mission.jpg",
//     alt: "Mission",
//     title: "MISSION",
//     description: "Working with clients as a community. Necessitating Mutual Conviviality, generating ideas that build Leadership Brands through imagination and a deep sensitive understanding of human behaviour.",
//     gradient: "from-emerald-600 to-teal-600",
//     bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
//     icon: "🚀"
//   },
//   {
//     src: "/image/stra.png",
//     alt: "Strategy",
//     title: "THE ADVERTISING STRATEGY",
//     description: "Advertising Strategies are based on creative Ideas. Our basic purpose is to promote and execute the clients message to the consumers with simplicity and attractive human behaviours, as simple and direct message can be easily understood by the consumers.",
//     gradient: "from-orange-600 to-red-600",
//     bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
//     icon: "📊"
//   },
//   {
//     src: "/image/Idea.webp",
//     alt: "Ideas Behaviour",
//     title: "IDEAS BEHAVIOUR",
//     description: "Ideas are nurtured in creative minds. Converting ideas into brands is an art Media Bridge has artists that aspires to turn your own, or our presented, ideas into durable, sustainable, profitable brands. In a nutshell the idea generated in a mind will evolve into Customer Behaviour.",
//     gradient: "from-pink-600 to-rose-600",
//     bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
//     icon: "💡"
//   },
//   {
//     src: "/image/brand.png",
//     alt: "Branding Position",
//     title: "BRANDING POSITION",
//     description: "MEDIA BRIDGE has the experience of efficiently branding the position of consumer products that can result in direct increase is products sales in the target market. Globally, correct position of a brand largely depends upon quality and content of the supporting advertisement, used as a tool to directly address consumer needs. We, at Media Bridge, specialize in this area.",
//     gradient: "from-indigo-600 to-blue-600",
//     bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
//     icon: "🎨"
//   },
//   {
//     src: "/image/add.webp",
//     alt: "Print Media",
//     title: "PRINT MEDIA ADVERTISING",
//     description: "Print media advertising is a form of advertising that uses physically printed media, such as magazines and newspapers, to reach consumers, business customers and prospects. Advertisers also use digital media, such as banner ads, mobile advertising, and advertising in social media, to reach the same target audiences. The proliferation of digital media has led to a decline in advertising expenditure in traditional print media, but print isn't dead. Print media advertising is physically printed media including newspapers, magazines, posters and billboards etc..",
//     gradient: "from-violet-600 to-purple-600",
//     bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
//     icon: "📰"
//   },
//   {
//     src: "/image/projection.jpeg",
//     alt: "Multimedia Projection",
//     title: "MULTIMEDIA PROJECTION",
//     description: "MEDIA BRIDGE has the diversified experience of dynamic multimedia projection field. Having carried out many such activities, we have the privilege to serve our clients who have benefited a lot from our developed multimedia projections. It has helped them in stand and maintain a reputable position in the market. MEDIA BRIDGE has satisfied client's list that has availed it services for Web-designing, and TV Animations and Commercials.",
//     gradient: "from-cyan-600 to-blue-600",
//     bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
//     icon: "🎬"
//   },
//   {
//     src: "/image/deep.png",
//     alt: "In-Depth Analysis",
//     title: "IN-DEPTH ANALYSIS",
//     description: "MEDIA BRIDGE has the ability to carry out In-depth Analysis of Clients needs and strategies. This exercise enables both parties to come to a logical, cost-effective and better solution for the task at p increased profits and a stable organization.",
//     gradient: "from-green-600 to-emerald-600",
//     bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
//     icon: "🔍"
//   },
//   {
//     src: "/image/business.png",
//     alt: "Business Folder",
//     title: "OUR BUSINESS FOLDER",
//     description: "MEDIA BRIDGE Advertising has specialized departments to cater for clients needs through creative ideas and timely delivery at affordable costs. Our Creative Department conceives, develops and turns the idea in a write-up. Multimedia Department delivers the idea as per Client requirements, with a motto of THINK BEYOND THE HORIZON.",
//     gradient: "from-amber-600 to-orange-600",
//     bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
//     icon: "📁"
//   }
// ];

// const useIntersectionObserver = (options = {}) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const [hasIntersected, setHasIntersected] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//       if (entry.isIntersecting && !hasIntersected) {
//         setHasIntersected(true);
//       }
//     }, { 
//       threshold: 0.1,
//       rootMargin: '50px',
//       ...options 
//     });

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [hasIntersected]);

//   return [elementRef, isIntersecting, hasIntersected];
// };

// const ServiceCard = ({ service, index }) => {
//   const [ref, isIntersecting, hasIntersected] = useIntersectionObserver();
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       ref={ref}
//       className={`transform transition-all duration-500 ease-out ${
//         hasIntersected 
//           ? 'translate-y-0 opacity-100' 
//           : 'translate-y-10 opacity-0'
//       }`}
//       style={{ transitionDelay: `${index * 50}ms` }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ${service.bgColor} backdrop-blur-sm border border-white/20`}>
//         <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-3 transition-opacity duration-300`}></div>
        
//         <div className="absolute top-4 right-4 opacity-10">
//           <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
//           <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full ml-3 -mt-1`}></div>
//         </div>

//         <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center p-8 lg:p-12 gap-8 lg:gap-12 relative z-10`}>
//           <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left space-y-6`}>
//             <div className="space-y-4">
//               <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white text-2xl shadow-lg transform transition-transform duration-200 ${isHovered ? 'scale-105 rotate-3' : ''}`}>
//                 {service.icon}
//               </div>
              
//               <h3 className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent transform transition-all duration-200 ${isHovered ? 'scale-102' : ''}`}>
//                 {service.title}
//               </h3>
//             </div>

//             <p className="text-gray-700 text-base lg:text-lg leading-relaxed transition-all duration-300">
//               {service.description}
//             </p>

//             <div className={`inline-flex items-center space-x-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent cursor-pointer transform transition-all duration-200 hover:scale-102`}>
//               <span>Learn More</span>
//               <svg className={`w-4 h-4 transform transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </div>
//           </div>

//           <div className="flex-1 relative group">
//             <div className={`relative overflow-hidden rounded-2xl transform transition-all duration-300 ${isHovered ? 'scale-102' : ''}`}>
//               <div className="relative bg-white rounded-2xl p-3 shadow-lg">
//                 <div className="relative w-full h-64 lg:h-72 overflow-hidden rounded-xl bg-gray-100">
//                   {!imageLoaded && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-xl"></div>
//                   )}
//                   <img
//                     src={service.src}
//                     alt={service.alt}
//                     loading="lazy"
//                     className={`w-full h-full object-cover rounded-xl transition-all duration-300 ${
//                       imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
//                     } ${isHovered ? 'scale-105' : ''}`}
//                     onLoad={() => setImageLoaded(true)}
//                     style={{ objectPosition: 'center' }}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full opacity-10`}></div>
//           </div>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
//           <div className={`h-full bg-gradient-to-r ${service.gradient} transform origin-left transition-transform duration-500 ${hasIntersected ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: `${index * 50 + 100}ms` }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export function MobileConvenience() {
//   const [titleRef, titleIntersecting, titleHasIntersected] = useIntersectionObserver();

//   return (
//     <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
//         <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-full blur-2xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div ref={titleRef} className="text-center mb-12 lg:mb-16">
//           <div className={`transform transition-all duration-500 ease-out ${titleHasIntersected ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
//             <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
//               Our Services
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover how Media Bridge transforms your vision into powerful advertising solutions that drive results
//             </p>
//           </div>
//         </div>

//         <div className="space-y-12 lg:space-y-16">
//           {SERVICES_DATA.map((service, index) => (
//             <ServiceCard key={service.title} service={service} index={index} />
//           ))}
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
//     </section>
//   );
// }

// export default MobileConvenience;