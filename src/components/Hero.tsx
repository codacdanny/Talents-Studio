import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import hero from "../assets/hero2.svg";
const Hero: React.FC = () => {
  return (
    <>
      <Box position="relative" height="100vh" overflow="hidden">
        {/* <Box className="anime2">
          <Box className="introID" minHeight="100svh" />
        </Box> */}
      </Box>
      <Box>
        <Box color="#ffffff" className="hero" padding="1rem 3rem" height="100%">
          <Flex as="nav" justifyContent="space-between" alignItems="center">
            <Heading className="mont" as="h3">
              NalediTech
            </Heading>
            <List
              fontSize="1.4rem"
              fontWeight="400"
              display="flex"
              justifyContent="space-around"
              width="40vw"
              alignItems="center">
              <Link href="#about">
                <ListItem>About</ListItem>
              </Link>
              <Link href="#contact">
                <ListItem>Contact us</ListItem>
              </Link>
              <Link href="#card">
                <ListItem>Programs</ListItem>
              </Link>
            </List>
          </Flex>
          <Flex
            justifyContent="space-between"
            marginTop="2rem"
            alignItems="center">
            <Flex direction="column" width="55%" gap="2rem">
              <Heading className="mont" as="h2" fontSize="5rem">
                Find The Right Talent To Handle Your Tech Projects
              </Heading>
              <Heading className="mont" as="h3" fontSize="1rem">
                Get the right dev or team to get your million-dollar idea to MVP
                stage and beyond.
              </Heading>
              <Flex>
                <Button as="a" href="#about" borderRadius="20px" px={6}>
                  {" "}
                  Start your Journey
                </Button>
              </Flex>
            </Flex>
            <Image
              src={hero}
              alt="hero image"
              boxSize="fit-content"
              objectFit="cover"
              bgColor="transparent"
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
