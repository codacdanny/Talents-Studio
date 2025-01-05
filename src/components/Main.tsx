import { Box } from "@chakra-ui/react";

import Hero from "./Hero";
import Choose from "./Choose";
import Clients from "./Clients";
import Testimonial from "./Testimonial";
import Collaborate from "./Collaborate";
import Techie from "./Techie";
import Faq from "./Faq";
import Footer from "./Footer";

const Main = () => {
  return (
    <Box bg="background">
      <Hero />
      <Choose />
      <Box mt={20} height="fit-content">
        <Clients />
      </Box>
      <Testimonial />
      <Collaborate />
      <Techie />
      <Faq />
      <Footer />
    </Box>
  );
};

export default Main;
