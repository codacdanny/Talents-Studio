import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import theme from "../theme";

const Techie = () => {
  return (
    <Container maxWidth="container.xl">
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
          BECOME A TECHIE
        </Box>
        <Heading mt={6} size="md" textAlign="center">
          JOIN US
        </Heading>
        <Text textAlign="center" mt={4} width={{ base: "100%", xl: "50%" }}>
          {`We’ve helped young people develop their  career with us by introducing them to skills that make them financially independent`}
        </Text>
      </Flex>

      <Box
        bgColor="secondaryBlue" // Blue background
        color="white"
        p="1.5rem"
        py={12}
        borderRadius={theme.customBorderRadius}
        mt={10}
      >
        <Flex
          width="100%"
          alignItems="center"
          gap={10}
          justifyContent="space-between"
          flexDir={{ base: "column", lg: "row" }}
        >
          <Flex width={{ base: "100%", xl: "60%" }} flexDir="column" gap={6}>
            <Heading color="bg" size="md" mb={4}>
              WEB DEVELOPMENT
            </Heading>
            <Text fontSize="md" mb={4}>
              Take the most direct route to starting your career in tech. Our
              core program equips you with mastery and fluency in fundamental
              web development concepts that will be your foundation for success.
              <br />
              Learn basic UI design concepts and technologies for building
              complex web applications.
            </Text>
            <Button
              bg="white"
              width="fit-content"
              fontSize="sm"
              color="text"
              colorScheme="whiteAlpha"
              variant="solid"
              borderRadius={theme.customBorderRadius}
            >
              Get Started Now
            </Button>
          </Flex>
          <Box height="4px" bgColor="background" width="6rem" />
          <Flex width={{ base: "100%", xl: "40%" }} alignItems="right" mt={6}>
            <Text fontWeight="bold" fontSize="md">
              HTML, CSS, JavaScript
              <br />
              React
              <br />
              Node.js, MongoDB
              <br />
              Next.js
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex gap={4} mt={10} flexDir={{ base: "column", xl: "row" }}>
        <Flex
          flexDir="column"
          gap={4}
          bgColor="secondaryBlue" // Blue background
          color="white"
          p="1.5rem"
          py={12}
          borderRadius={theme.customBorderRadius}
          mt={4}
        >
          <Heading color="bg" size="md" mb={4}>
            MOBILE DEVELOPMENT{" "}
          </Heading>
          <Text fontSize="md">
            Gain expertise in developing mobile applications for both Android
            and IOS platforms.
          </Text>
          <Text fontSize="md" fontWeight={600}>
            Flutter
          </Text>
          <Text fontSize="md" fontWeight={600}>
            React Native
          </Text>
          <Text fontSize="md" fontWeight={600}>
            Firebase
          </Text>
          <Text fontSize="md" fontWeight={600}>
            NativeScript
          </Text>
          <Button
            mt={6}
            bg="white"
            width="fit-content"
            fontSize="sm"
            color="text"
            colorScheme="whiteAlpha"
            variant="solid"
            borderRadius={theme.customBorderRadius}
          >
            Get Started Now
          </Button>
        </Flex>
        <Flex
          flexDir="column"
          gap={4}
          bgColor="secondaryBlue" // Blue background
          color="white"
          p="1.5rem"
          py={12}
          borderRadius={theme.customBorderRadius}
          mt={4}
        >
          <Heading color="bg" size="md" mb={4}>
            MICRO SERVICES
          </Heading>
          <Text fontSize="md">
            Explore the architecture of micro services and learn to build
            scalable and resilient systems.
          </Text>
          <Text fontSize="md" fontWeight={600}>
            Docker
          </Text>
          <Text fontSize="md" fontWeight={600}>
            Kubernetes
          </Text>
          <Text fontSize="md" fontWeight={600}>
            GraphQL
          </Text>
          <Text fontSize="md" fontWeight={600}>
            RabbitMQ
          </Text>
          <Button
            mt={6}
            bg="white"
            width="fit-content"
            fontSize="sm"
            color="text"
            colorScheme="whiteAlpha"
            variant="solid"
            borderRadius={theme.customBorderRadius}
          >
            Get Started Now
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Techie;
