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
import clientImage from "../assets/clientImage.jpg";

const Clients = () => {
  return (
    <Container maxWidth="container.xl" mb={20}>
      <Box mt={100} height="100vh">
        <Flex flexDir="column" width="100%" alignItems="center" color="text">
          <Box
            bgColor="primaryBlue"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".5rem 1rem"
            fontWeight={500}
            mt={40}
            ml="1.5rem"
            color="background">
            Our Clients{" "}
          </Box>
          <Heading mt={6} size="md" textAlign="center">
            GET ON ANOTHER <br /> LEVEL WITH US
          </Heading>
          <Text textAlign="center" mt={4} width="50%">
            {`We’ve helped big-name brands elevate their functinality and
          consistently achieve new heights in their industry, fostering ongoing
          success and growth.`}
          </Text>
        </Flex>

        <Flex
          flexDir="column"
          my={8}
          height="100%"
          width="100%"
          backgroundImage={bg}
          bgSize="cover"
          padding="1.5rem">
          <Box
            bgColor="primaryBlue"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".5rem 1rem"
            fontWeight={500}
            mt={20}
            color="background">
            Latest Work
          </Box>
          <Heading my={8} size="md" color="background">
            WITNESS THE OUTCOME <br /> OF OUR DEDICATION AND <br /> INNOVATION
            IN ACTION
          </Heading>
          <Grid templateColumns="repeat(6, 1fr)" gap={8}>
            <GridItem colSpan={2}>
              <Image
                background="transparent"
                src={clientImage}
                alt="client"
                height={200}
                width={400}
              />
            </GridItem>
            <GridItem colSpan={3}>
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
                  color="white">
                  View case story
                </Button>
              </Flex>
            </GridItem>
            <GridItem colSpan={1}>
              <Flex flexDir="column" gap={4}>
                <VStack spacing={2}>
                  <Text
                    fontSize="medium"
                    textAlign="center"
                    color="primaryBlue">
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
                    color="primaryBlue">
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
                    color="primaryBlue">
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
                    color="primaryBlue">
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
