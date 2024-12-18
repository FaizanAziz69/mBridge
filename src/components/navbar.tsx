import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        target="_self"
        className="font-medium">
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      // color={isScrolling ? "white" : "gray"}
      // color={"gray"}
      className="fixed top-0 z-50 border-0 shadow shadow-black bg-gray-700 w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* Dynamic logo based on scroll */}
        <a href="/" className="flex items-center lg:ml-0 ml-5">
          <img
            src={"/image/whitelogo.png"}
            alt="Stylehaws Logo"
            className="h-20"
          />
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex !text-white`}
        >
          <NavItem href="/">Home</NavItem>
          <NavItem href="/termsandcondition">Terms and Condition</NavItem>
          <NavItem href="/policies">Policies</NavItem>
        </ul>
        <div className="hidden gap-6 lg:flex lg:items-center text-white">

            <i className="fa-brands fa-twitter text-base" />
          

            <i className="fa-brands fa-facebook text-base" />
          

            <i className="fa-brands fa-instagram text-base" />
          

            <i className="fa-brands fa-tiktok" />
          
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/termsandcondition">Terms and Condition</NavItem>
          <NavItem href="/policies">Policies</NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <IconButton variant="text" color="gray" size="sm"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <i className="fa-brands fa-tiktok" />
            </IconButton>
          </div>
        </div>
      </Collapse>
    </nav>
  );
}

export default Navbar;
