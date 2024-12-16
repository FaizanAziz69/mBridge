// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import MobileConvenience from "./mobile-convenience";
// import Testimonials from "./testimonials";
// import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <MobileConvenience />
      <Footer />
    </>
  );
}
