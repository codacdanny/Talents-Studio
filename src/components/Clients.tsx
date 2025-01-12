import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import theme from "../theme";
import bg from "../assets/clientsbg.jpg";
import bg2 from "../assets/bg.jpg";
import clientImage from "../assets/clientImage.jpg";

const Clients = () => {
  return (
    <Container maxWidth="container.xl" mb={0}>
      <Box mt={2} height="fit-content">
        <Flex flexDir="column" width="100%" alignItems="center" color="text">
          <Box
            bgColor="primaryBlue"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".5rem 1rem"
            fontWeight={500}
            mt={40}
            color="background"
          >
            Our Clients
          </Box>
          <Heading mt={6} size="md" textAlign="center">
            GET ON ANOTHER <br /> LEVEL WITH US
          </Heading>
          <Text textAlign="center" mt={4} width={{ base: "100%", lg: "50%" }}>
            {`We’ve helped big-name brands elevate their functionality and
          consistently achieve new heights in their industry, fostering ongoing
          success and growth.`}
          </Text>
        </Flex>

        <Flex
          flexDir="column"
          my={8}
          height="100%"
          width="100%"
          backgroundImage={{ base: bg2, xl: bg }}
          bgSize="cover"
          padding="1.5rem"
        >
          <Box
            bgColor="primaryBlue"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".5rem 1rem"
            fontWeight={500}
            mt={{ base: 5, xl: 10 }}
            color="background"
          >
            Latest Work
          </Box>
          <Heading my={8} size="md" color="background">
            WITNESS THE OUTCOME <br /> OF OUR DEDICATION AND <br /> INNOVATION
            IN ACTION
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(6, 1fr)" }}
            gap={8}
          >
            <GridItem colSpan={{ base: 1, lg: 2 }}>
              <Image
                background="transparent"
                src={clientImage}
                alt="client"
                height={{ base: "150px", lg: "200px" }}
                width={{ base: "100%", lg: "400px" }}
              />
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 3 }}>
              <Flex flexDir="column" gap={4}>
                <Heading size="md" color="primaryBlue">
                  Project
                </Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita quisquam ea et consectetur non, laboriosam eos. At,
                  corporis velit?
                </Text>
                <Button
                  width="fit-content"
                  borderRadius={theme.customBorderRadius}
                  fontSize="medium"
                  bgColor="primaryBlue"
                  colorScheme="blue"
                  color="white"
                >
                  View case story
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={{ base: 1, lg: 1 }} height="100%">
              <Flex flexDir="column" gap={2}>
                <VStack spacing={1}>
                  <Text
                    fontSize="medium"
                    textAlign="center"
                    color="primaryBlue"
                  >
                    Completed Projects
                  </Text>
                  <Text fontWeight={700} fontSize="lg">
                    200
                  </Text>
                </VStack>
                <VStack spacing={4}>
                  <Text
                    fontSize="medium"
                    textAlign="center"
                    color="primaryBlue"
                  >
                    Satisfied Clients
                  </Text>
                  <Text fontWeight={700} fontSize="lg">
                    100
                  </Text>
                </VStack>
                <VStack spacing={4}>
                  <Text
                    fontSize="medium"
                    textAlign="center"
                    color="primaryBlue"
                  >
                    Enrolled Students
                  </Text>
                  <Text fontWeight={700} fontSize="lg">
                    10
                  </Text>
                </VStack>
                <VStack spacing={4}>
                  <Text
                    fontSize="medium"
                    textAlign="center"
                    color="primaryBlue"
                  >
                    Skilled Facilitators
                  </Text>
                  <Text fontWeight={700} fontSize="lg">
                    20
                  </Text>
                </VStack>
              </Flex>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </Container>
  );
};

export default Clients;
