import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Nav from "./Nav";
import hero from "../assets/heroImage.jpg";

const Hero: React.FC = () => {
  return (
    <>
      <Nav />
      <Flex
        as="section"
        width="100%"
        height="90vh"
        alignItems="center"
        justifyContent="center"
        px="2rem"
      >
        <Container maxWidth="container.xl">
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap="2rem"
            width="100%"
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              maxWidth="600px"
              gap="1.5rem"
            >
              {/* Heading */}
              <Text fontSize="5xl" fontWeight="bold" lineHeight="1.2" mb="3rem">
                FIND THE <span style={{ color: "#1E57D1" }}>RIGHT</span> TALENT
                TO HANDLE YOUR <span style={{ color: "#1E57D1" }}>TECH</span>{" "}
                PROJECTS
              </Text>

              {/* Input and Button */}
              <Flex
                alignItems="center"
                bg="gray.100"
                borderRadius="full"
                p="0.5rem"
                width="90%"
              >
                <Input
                  placeholder="Enter your problem"
                  variant="flushed"
                  px="1rem"
                  flex="1"
                />
                <Button
                  bg="#1E57D1"
                  color="white"
                  borderRadius="full"
                  _hover={{ bg: "#164ba0" }}
                  px="4"
                >
                  Let's Talk
                </Button>
              </Flex>

              {/* Description */}
              <Text fontWeight={500} color="gray.600" width="80%">
                Get the right developer or team to get your million-dollar idea
                to MVP stage and beyond.
              </Text>
            </Flex>
            <Box>
              <Image src={hero} alt="hero image" />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Hero;
