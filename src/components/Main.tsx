import { Box } from "@chakra-ui/react";

import Hero from "./Hero";
import Choose from "./Choose";
import Clients from "./Clients";

const Main = () => {
  return (
    <Box bg="background">
      <Hero />
      <Choose />
      <Box mt={100} height="100vh">
        <Clients />
      </Box>
    </Box>
  );
};

export default Main;
