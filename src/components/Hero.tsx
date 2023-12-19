import { Box } from "@chakra-ui/react";
import WavyText from "./WavyText";

const Hero: React.FC = () => {
  return (
    <>
      <Box position="relative" height="100vh" overflow="hidden">
        <Box className="anime1">
          <WavyText />
        </Box>
        <Box className="anime2">
          <Box className="introID" height="100svh" />
        </Box>
      </Box>
    </>
  );
};

export default Hero;
