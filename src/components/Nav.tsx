import {
  Box,
  Button,
  Container,
  Flex,
  Link,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, Icon } from "@chakra-ui/icons";
import { FaChartLine } from "react-icons/fa6";
import { FaEnvelope, FaInfoCircle, FaLightbulb, FaTasks } from "react-icons/fa";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      as="nav"
      width="100%"
      // position="fixed"
      // top={0}
      bg="white"
      py={{ base: "0.5rem", lg: "1rem" }}
      px={{ base: "1rem", lg: "2rem" }}
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      zIndex="40"
    >
      <Container maxWidth="container.xl">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Box>
            <Text fontSize={{ base: "lg", lg: "xl" }} fontWeight="bold">
              Naledi
              <span style={{ color: "#1E57D1" }}>Tech</span>
            </Text>
          </Box>

          {/* Hamburger Icon for Mobile */}
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", lg: "none" }} // Show only on mobile
            onClick={onOpen}
          />

          {/* Desktop Navigation Links */}
          <Flex
            gap={{ base: "1rem", lg: "2rem" }}
            alignItems="center"
            display={{ base: "none", lg: "flex" }} // Hide on mobile
          >
            <Link _hover={{ color: "#1E57D1" }}>About Us</Link>
            <Link _hover={{ color: "#1E57D1" }}>What We Do</Link>
            <Link _hover={{ color: "#1E57D1" }}>Our Results</Link>
            <Link _hover={{ color: "#1E57D1" }}>Insights</Link>
            <Link _hover={{ color: "#1E57D1" }}>Contact</Link>
          </Flex>

          {/* CTA Button */}
          <Button
            display={{ base: "none", lg: "flex" }}
            bg="gray.200"
            _hover={{ bg: "gray.300" }}
            borderRadius="full"
            px={{ base: "4", lg: "6" }}
          >
            Try it Free
          </Button>
        </Flex>
      </Container>

      {/* Drawer for Mobile Navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg="gray.50"
          borderLeftWidth="1px"
          borderColor="gray.200"
        >
          <DrawerCloseButton />
          <DrawerHeader fontSize="xl" fontWeight="bold" color="primaryBlue">
            NalediTech
          </DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="column" gap={4}>
              <Link
                onClick={onClose}
                display="flex"
                alignItems="center"
                _hover={{ color: "#1E57D1" }}
              >
                <Icon as={FaInfoCircle} boxSize={5} mr={2} />
                About Us
              </Link>
              <Link
                onClick={onClose}
                display="flex"
                alignItems="center"
                _hover={{ color: "#1E57D1" }}
              >
                <Icon as={FaTasks} boxSize={5} mr={2} />
                What We Do
              </Link>
              <Link
                onClick={onClose}
                display="flex"
                alignItems="center"
                _hover={{ color: "#1E57D1" }}
              >
                <Icon as={FaChartLine} boxSize={5} mr={2} />
                Our Results
              </Link>
              <Link
                onClick={onClose}
                display="flex"
                alignItems="center"
                _hover={{ color: "#1E57D1" }}
              >
                <Icon as={FaLightbulb} boxSize={5} mr={2} />
                Insights
              </Link>
              <Link
                onClick={onClose}
                display="flex"
                alignItems="center"
                _hover={{ color: "#1E57D1" }}
              >
                <Icon as={FaEnvelope} boxSize={5} mr={2} />
                Contact
              </Link>
              <Button
                display={{ base: "flex", lg: "none" }}
                bg="gray.200"
                _hover={{ bg: "gray.300" }}
                borderRadius="full"
                px={{ base: "4", lg: "6" }}
              >
                Try it Free
              </Button>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Nav;
