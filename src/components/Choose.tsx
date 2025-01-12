import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import bgImage from "../assets/chooseUsBg1.jpg";
import bgImage2 from "../assets/chooseUsBg2.jpg";
import weblogo from "../assets/webdevlogo.jpg";
import mobilelogo from "../assets/mobilelogo.jpg";
import microserviceslogo from "../assets/microserviceslogo.jpg";
import theme from "../theme";

const Choose = () => {
  return (
    <Container maxWidth="container.xl">
      <Box width="100%" height="3px" bgColor="bgGrey" />
      <Flex
        my={4}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          width={{ base: "10%", md: "30%", lg: "50%", xl: "70%" }}
          height="12px"
          bgColor="secondaryBlue"
        />
        <Text fontWeight={500} fontSize="md">
          Our Team
        </Text>
        <AvatarGroup size="lg" max={5}>
          <Avatar name="Kent Dodds" src={avatar3} />
          <Avatar name="Ryan Florence" src={avatar1} />
          <Avatar name="Prosper Otemuyiwa" src={avatar4} />
          <Avatar name="Segun Adebayo" src={avatar2} />
        </AvatarGroup>
      </Flex>
      {/* WHY CHOOSE US SECTION */}
      <Flex
        bgImage={bgImage}
        bgSize="cover"
        height="100%"
        width="100%"
        paddingTop={{ base: "2%", md: "8%", lg: "15%", xl: "20%" }}
        px="1.5rem"
        paddingBottom="1rem"
        gap={12}
        justifyContent="space-between"
        flexDir={{ base: "column", lg: "row" }}
      >
        <VStack align="left" gap={16}>
          <Box
            bgColor="primaryBlue"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".5rem 1rem"
            mt={{ base: 2, xl: -8 }}
            color="background"
          >
            Why Choose Us
          </Box>
          <Box
            bgColor="text"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".8rem 1.8rem"
            color="background"
            fontSize="2xl"
            fontWeight={600}
          >
            OUR <br /> ADVANTAGES
          </Box>
        </VStack>
        <Flex
          flexDir="column"
          justify="space-between"
          bgColor="background"
          width="fit-content"
          borderRadius={theme.customBorderRadius}
          padding=".8rem 1.8rem"
          color="text"
          fontSize="md"
        >
          <Heading fontSize="xl">Team of Experts</Heading>
          <Text>
            Our expert team of tech enthusiasts and industry veterans, dedicated
            to shaping cutting-edge solutions for success.
          </Text>
        </Flex>
        <Flex
          flexDir="column"
          justify="space-between"
          bgColor="background"
          width="fit-content"
          borderRadius={theme.customBorderRadius}
          padding=".8rem 1.8rem"
          color="text"
          fontSize="md"
        >
          <Heading fontSize="xl">Personalization</Heading>
          <Text>
            We excel in tailoring solutions to your unique needs, ensuring a
            personalized experience that aligns perfectly with your
            requirements.
          </Text>
        </Flex>
      </Flex>
      {/* SOLUTIONS WE OFFER SECTION */}
      <Box
        bgColor="bgGrey"
        width="fit-content"
        borderRadius={theme.customBorderRadius}
        padding=".5rem 1rem"
        fontWeight={500}
        mt={20}
        ml="1.5rem"
        color="text"
      >
        Why Choose Us
      </Box>
      <Box
        bgImage={bgImage2}
        bgRepeat="no-repeat"
        height={{ base: "100%", dxl: "55vh" }}
        width="100%"
        px="1.5rem"
        paddingTop="3%"
        paddingBottom="1rem"
        mb={12}
      >
        <Flex
          mb={10}
          width="100%"
          mt={6}
          justifyContent="space-between"
          gap={6}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Heading fontSize="xl" py={2} color="background">
            WE OFFER <br /> LEADING <br /> SOLUTIONS
          </Heading>
          <Box width={{ base: "100%", xl: "60%" }} gap={8}>
            <Text color="background">
              {` At NalediTech we specialize in delivering tailored software
              solutions, providing customization and personalization to meet the
              diverse needs of businesses. Our offerings ensure seamless
              integration, optimal performance, and a personalized approach that
              aligns with your specific requirements. Here’s what we offer for
              you.`}
            </Text>
          </Box>
        </Flex>

        <Flex
          gap={4}
          justifyContent="space-evenly"
          flexDir={{ base: "column", xl: "row" }}
        >
          <Flex
            flexDir="column"
            gap={8}
            bgColor="text"
            color="background"
            maxWidth={{ base: "100%", xl: "350px" }}
            height="fit-content"
            borderRadius={theme.customBorderRadius}
            padding="1rem"
            mb={4}
          >
            <Heading textAlign="center" size="md" color="background">
              NalediTech Studio
            </Heading>
            <Text fontWeight={300}>Do you...</Text>
            <UnorderedList spacing={6}>
              <ListItem>Have a project idea in need of Devs?</ListItem>
              <ListItem>Need maintenance on existing projects?</ListItem>
              <ListItem>Require consultation?</ListItem>
            </UnorderedList>
            <Text>
              Be it a team or a single techie, NalediTech Studio gives you
              access to all the talent you need for your project. Let us know
              what you want to build.
            </Text>
          </Flex>

          <Flex
            borderRadius={theme.customBorderRadius}
            boxShadow="md"
            padding="1rem"
            bg="background"
            color="text"
            flexDir="column"
            gap={8}
            alignItems="center"
            justifyContent="space-between"
            height="18rem"
          >
            <Box>
              <Image src={weblogo} alt="web dev logo" />
            </Box>
            <Heading textAlign="center" fontSize="sm">
              Web <br /> Development
            </Heading>

            <Button
              colorScheme="blue"
              color="background"
              fontSize="medium"
              borderRadius={theme.customBorderRadius}
            >
              Get Started
            </Button>
          </Flex>
          <Flex
            borderRadius={theme.customBorderRadius}
            boxShadow="md"
            padding="1rem"
            bg="background"
            color="text"
            flexDir="column"
            gap={8}
            alignItems="center"
            justifyContent="space-between"
            height="18rem"
          >
            <Box>
              <Image src={mobilelogo} alt="web dev logo" />
            </Box>
            <Heading textAlign="center" fontSize="sm">
              Mobile <br /> Development
            </Heading>

            <Button
              colorScheme="blue"
              color="background"
              fontSize="medium"
              borderRadius={theme.customBorderRadius}
            >
              Get Started
            </Button>
          </Flex>
          <Flex
            borderRadius={theme.customBorderRadius}
            boxShadow="md"
            padding="1rem"
            bg="background"
            color="text"
            flexDir="column"
            gap={8}
            alignItems="center"
            justifyContent="space-between"
            height="18rem"
          >
            <Box>
              <Image src={microserviceslogo} alt="web dev logo" />
            </Box>
            <Heading textAlign="center" fontSize="sm">
              Micro <br /> Services
            </Heading>

            <Button
              colorScheme="blue"
              color="background"
              fontSize="medium"
              borderRadius={theme.customBorderRadius}
            >
              Get Started
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};

export default Choose;
