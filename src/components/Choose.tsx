import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import bgImage from "../assets/chooseUsBg1.jpg";
import theme from "../theme";

const Choose = () => {
  return (
    <Container maxWidth="container.xl">
      <Box width="100%" height="3px" bgColor="bgGrey" />
      <Flex
        my={4}
        width="100%"
        justifyContent="space-between"
        alignItems="center">
        <Box width="80%" height="12px" bgColor="secondaryBlue" />
        <Text fontWeight={500} fontSize="md">
          Our Team
        </Text>
        <AvatarGroup size="md" max={5}>
          <Avatar name="Ryan Florence" src={avatar1} />
          <Avatar name="Segun Adebayo" src={avatar2} />
          <Avatar name="Kent Dodds" src={avatar3} />
          <Avatar name="Prosper Otemuyiwa" src={avatar4} />
        </AvatarGroup>
      </Flex>
      <Flex
        bgImage={bgImage}
        bgSize="cover"
        height="50vh"
        width="100%"
        paddingTop="20%"
        px="1.5rem"
        paddingBottom="1rem"
        gap={12}
        justifyContent="space-between">
        <VStack align="left" spacing={16}>
          <Box
            bgColor="primaryBlue"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".5rem 1rem"
            mt={-8}
            color="background">
            Why Choose Us
          </Box>
          <Box
            bgColor="text"
            width="fit-content"
            borderRadius={theme.customBorderRadius}
            padding=".8rem 1.8rem"
            color="background"
            fontSize="2xl"
            fontWeight={600}>
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
          fontSize="md">
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
          fontSize="md">
          <Heading fontSize="xl">Personalization</Heading>
          <Text>
            We excel in tailoring solutions to your unique needs, ensuring a
            personalized experience that aligns perfectly with your
            requirements.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Choose;
