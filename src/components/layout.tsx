"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {

  function MyComponent() {
    useEffect(() => {

      const originalurl = process.env.NEXT_PUBLIC_ORIGINAL_URL as string;


      if (window.location.href === originalurl) {
        const location = window.location.href.replace('https', 'app');
        window.location.href = window.location.href.replace(originalurl, location);
      }

      // if (window.location.href === originalurl) {
      //   window.location.href = window.location.href.replace(originalurl, redirecturl)
      // }
    }, []);

    return <div>Redirecting...</div>;
  }
  MyComponent();

  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Layout;
