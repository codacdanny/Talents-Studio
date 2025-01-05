import { Container, Flex, Heading } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Container maxWidth="container.xl" mt={10}>
      <Heading color="text" size="md" textAlign="center">
        HERE IS WHAT OUR CLIENTS <br /> HAVE TO SAY{" "}
      </Heading>
      <Flex></Flex>
    </Container>
  );
};

export default Testimonial;
