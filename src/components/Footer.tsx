import {
  Box,
  Container,
  Flex,
  Text,
  Link,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const animationDuration = useBreakpointValue({ base: "0.5s", md: "1s" });

  return (
    <Box
      bgColor="primaryBlue"
      color="background"
      py={53}
      position="relative"
      overflow="hidden"
      mt={10}
    >
      <Container maxWidth="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontSize="sn" mb={{ base: 4, md: 0 }}>
            © {new Date().getFullYear()} NALEDITECH. All rights reserved.
          </Text>
          <Flex gap={4}>
            <Link href="#" isExternal>
              <Icon
                as={FaFacebookF}
                boxSize={6}
                transition={`transform ${animationDuration} ease`}
                _hover={{ transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <Icon
                as={FaTwitter}
                boxSize={6}
                transition={`transform ${animationDuration} ease`}
                _hover={{ transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <Icon
                as={FaInstagram}
                boxSize={6}
                transition={`transform ${animationDuration} ease`}
                _hover={{ transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="#" isExternal>
              <Icon
                as={FaLinkedinIn}
                boxSize={6}
                transition={`transform ${animationDuration} ease`}
                _hover={{ transform: "scale(1.2)" }}
              />
            </Link>
          </Flex>
        </Flex>
      </Container>
      <Box
        position="absolute"
        bottom="0"
        left="50%"
        transform="translateX(-50%)"
        width="200%"
        height="100px"
        bgGradient="linear(to-r, rgba(255, 255, 255, 0.1), transparent)"
        animation="wave 10s infinite linear"
      />
      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Footer;
