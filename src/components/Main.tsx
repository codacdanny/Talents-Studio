import { Box } from "@chakra-ui/react";

import Hero from "./Hero";
import Choose from "./Choose";

const Main = () => {
  return (
    <Box bg="background">
      <Hero />
      <Choose />
    </Box>
  );
};

export default Main;
