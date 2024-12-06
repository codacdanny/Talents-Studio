import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      as="nav"
      width="100%"
      position="fixed"
      top={0}
      bg="white"
      py="1rem"
      px="2rem"
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      zIndex="40">
      <Container maxWidth="container.xl">
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          {/* Logo Section */}
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Naledi
              <span style={{ color: "#1E57D1" }}>Tech</span>
            </Text>
          </Box>

          {/* Navigation Links */}
          <Flex gap="2rem" alignItems="center" justify="center">
            <Link _hover={{ color: "#1E57D1" }}>About Us</Link>
            <Link _hover={{ color: "#1E57D1" }}>What We Do</Link>
            <Link _hover={{ color: "#1E57D1" }}>Our Results</Link>
            <Link _hover={{ color: "#1E57D1" }}>Insights</Link>
            <Link _hover={{ color: "#1E57D1" }}>Contact</Link>

            {/* CTA Button */}
          </Flex>
          <Button
            bg="gray.200"
            _hover={{ bg: "gray.300" }}
            borderRadius="full"
            px="6">
            Try it Free
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Nav;
