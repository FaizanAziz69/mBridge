// "use client";
// import Image from "next/image";
// import { Typography, IconButton, Button } from "@material-tailwind/react";

// export function Footer() {
//   return (
//     <footer className="bg-gray-700 px-8 pt-12 w-full">
//       <div className="container mx-auto">
//         <div className="flex flex-wrap justify-center gap-8 md:justify-between">
//           <div className="text-center md:text-left">
//             <Typography
//               as="a"
//               href="#"
//               target="_blank"
//               variant="h5"
//               color="white"
//               className="mb-1"
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//             >
//               Media Bridge
//             </Typography>
//             <Typography 
//               color="white" 
//               className="mb-12 font-normal"
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//             >
//               News You Can Trust, Stories That Matter
//             </Typography>
//             <ul className="flex flex-wrap items-center justify-center md:justify-start">
//               <a href="/deleteaccount" className="!text-gray-200 font-medium underline">Need to delete your account?</a>
//             </ul>
//           </div>
//           <div className="mt-8 w-full md:mt-0 md:w-auto">
//             <Typography 
//               variant="h6" 
//               color="white" 
//               className="mb-3"
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//             >
//               Contact
//             </Typography>
//             <div className="flex flex-col gap-2">
//               <Typography
//                 color="white"
//                 className="flex items-center justify-center"
//                 placeholder=""
//                 onPointerEnterCapture={() => {}}
//                 onPointerLeaveCapture={() => {}}
//               >
//                 PH +92 42 3 5023505,
//                 Cell: +92 300 4302322,
//                 +92 323 4302322,
//                 +92 334 8114663,
//               </Typography>
//               <Typography
//                 color="white"
//                 className="flex items-center justify-center"
//                 placeholder=""
//                 onPointerEnterCapture={() => {}}
//                 onPointerLeaveCapture={() => {}}
//               >
//                 E-mail: mediabridgeall@yahoo.com www.mediabridgepk.com
//               </Typography>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
//           <div className="flex gap-2">
//             <IconButton 
//               variant="text" 
//               color="white"
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//             >
//               <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
//             </IconButton>
//             <IconButton 
//               variant="text" 
//               color="white"
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//             >
//               <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
//             </IconButton>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

"use client";
import Image from "next/image";
import { IconButton, Button } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-700 px-8 pt-12 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <a
              href="#"
              target="_blank"
              className="text-white text-2xl font-bold mb-1 block"
            >
              Media Bridge
            </a>
            <p className="text-white mb-12 font-normal">
              News You Can Trust, Stories That Matter
            </p>
          </div>
<div className="mt-8 w-full md:mt-0 md:w-auto">
  <h6 className="text-white text-lg font-semibold mb-4 text-center md:text-left">
    Contact
  </h6>
  <div className="flex flex-col gap-4">
    <div className="text-white text-center md:text-left space-y-2">
      <p className="flex flex-col md:flex-row items-center md:items-start gap-1">
        <span className="font-medium">Phone:</span>
        <span>+92 42 3 5023505</span>
      </p>
      <div className="flex flex-col items-center md:items-start">
        <span className="font-medium">Cell:</span>
        <span>+92 300 4302322</span>
        <span>+92 323 4302322</span>
        <span>+92 334 8114663</span>
      </div>
      <p className="flex flex-col md:flex-row items-center md:items-start gap-1">
        <span className="font-medium">Email:</span>
        <a href="mailto:mediabridgeall@yahoo.com" className="hover:underline">
          mediabridgeall@yahoo.com
        </a>
      </p>
    </div>
  </div>
</div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <div className="flex gap-2">
         <IconButton
  variant="text"
  color="white"
   {...({} as any)}
>
  <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
</IconButton>
<IconButton
  variant="text"
  color="white"
   {...({} as any)}
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