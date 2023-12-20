import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import WavyText from "./WavyText";

const Hero: React.FC = () => {
  return (
    // #24144C  #6D459A  #7721D6 #AA436F #C53998
    <>
      <Box position="relative" height="100vh" overflow="hidden">
        <Box className="anime1">
          <WavyText />
        </Box>
        <Box className="anime2">
          <Box className="introID" height="100svh" />
        </Box>
      </Box>
      <Box
        className="hero"
        height="100%"
        width="100%"
        bgGradient="radial-gradient(at 1% 60%, #4847db 0px, transparent 50%), radial-gradient(at 87% 48%, #4f48db 0px, transparent 50%), radial-gradient(at 77% 66%, #5148db 0px, transparent 50%), radial-gradient(at 66% 61%, #db48e1 0px, transparent 50%), radial-gradient(at 85% 9%, #db48d1 0px, transparent 50%)">
        <Flex as="nav" color="#ffffff" width="inherit">
          <Heading as="h3">Talents</Heading>
          <List
            display="flex"
            alignItems="center"
            justifyContent=" space-between"
            spacing="1rem">
            <ListItem>About</ListItem>
            <ListItem>FAQ's</ListItem>
            <ListItem>Contact us</ListItem>
            <ListItem>Programs</ListItem>
          </List>
        </Flex>
        <Flex>
          <Box>
            <Heading></Heading>
            <Heading></Heading>
            <Button></Button>
          </Box>
          <Image />
        </Flex>
      </Box>
    </>
  );
};

export default Hero;
