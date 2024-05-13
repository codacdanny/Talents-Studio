import { Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import email from "../assets/email.png";
import twitter from "../assets/twitter.svg";
const Footer = () => {
  return (
    <Flex
      className="main"
      background="rgb(60,14,90)"
      bgImage="linear-gradient(90deg, rgba(60,14,90,0.5495448179271709) 20%, rgba(19,1,33,0.6755952380952381) 75%)"
      color="#fff"
      padding="1rem 3rem 0rem  3rem"
      borderTop=".5px solid #000"
      flexDirection="column"
      alignItems="space-between">
      <Flex flexDirection="column" marginBottom="1rem">
        <Heading as="h3" marginY="2rem">
          NalediTech
        </Heading>
        <Flex justifyContent="space-between" fontWeight="200">
          <Flex flexDirection="column" gap="1rem">
            <Text>placeholder@gmail.com</Text>
            <Text>
              Plot 5A, Nigerian Federation Avenue, Off Ibadan Expressway, Lagos.
            </Text>
            <Flex justifyContent="left" gap="1rem">
              <Image src={facebook} alt="social media logo" boxSize="40px" />
              <Image src={instagram} alt="social media logo" boxSize="40px" />
              <Image src={twitter} alt="social media logo" boxSize="40px" />
              <Image src={linkedin} alt="social media logo" boxSize="40px" />
              <Image src={email} alt="social media logo" boxSize="40px" />
            </Flex>
          </Flex>

          <SimpleGrid columns={3} spacing={20}>
            <Flex flexDirection="column" gap="1rem">
              <Text>FAQs</Text>
              <Text>Programmes</Text>
            </Flex>
            <Flex flexDirection="column" gap="1rem">
              <Text>About</Text>
              <Text>Projects</Text>
            </Flex>
            <Flex flexDirection="column" gap="1rem">
              <Text>Contact Us</Text>
              <Text>Privacy Policy</Text>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Flex>

      <Text fontWeight="100" textAlign="center" marginY="1.5rem">
        All Rights Reserved &copy;2023
      </Text>
    </Flex>
  );
};

export default Footer;
