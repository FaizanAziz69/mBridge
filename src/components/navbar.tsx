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
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        {children}
      </Typography>
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
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Dynamic logo based on scroll */}
        <a href="/" className="flex items-center">
          <img
            src={isScrolling ? "/image/blacklogo.png" : "/image/whitelogo.png"}
            alt="Stylehaws Logo"
            className="h-20"
          />
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem>Home</NavItem>
          <NavItem>Terms and Condition</NavItem>
          <NavItem>Policies</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fa-brands fa-twitter text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color={isScrolling ? "gray" : "white"}
            size="sm" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
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
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
