import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import hero from "../assets/hero2.svg";
const Hero: React.FC = () => {
  return (
    <>
      <Box position="relative" height="100vh" overflow="hidden">
        <Box className="anime2">
          <Box className="introID" minHeight="100svh" />
        </Box>
      </Box>
      <Box>
        <Box color="#ffffff" className="hero" padding="1rem 3rem" height="100%">
          <Flex as="nav" justifyContent="space-between" alignItems="center">
            <Heading as="h3">Talents</Heading>
            <List
              fontSize="1.4rem"
              fontWeight="400"
              display="flex"
              justifyContent="space-around"
              width="40vw"
              alignItems="center">
              <ListItem>About</ListItem>
              <ListItem>FAQ's</ListItem>
              <ListItem>Contact us</ListItem>
              <ListItem>Programs</ListItem>
            </List>
          </Flex>
          <Flex
            justifyContent="space-between"
            marginTop="2rem"
            alignItems="center">
            <Flex direction="column" width="55%" gap="2rem">
              <Heading as="h2" fontSize="5rem">
                Get a feel of the <br /> best talents on <br /> the Internet
              </Heading>
              <Heading as="h3" fontSize="1rem">
                A job well done drives projects exponientially. Finding the
                right person might <br /> prove hardbut that has come to an end
              </Heading>
              <Flex>
                <Button borderRadius="20px"> Start your Journey</Button>
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
