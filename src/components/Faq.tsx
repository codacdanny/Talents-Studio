import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import theme from "../theme";

const Faq = () => {
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
          ml="1.5rem"
          color="background"
        >
          HAVE A QUESTION?
        </Box>
        <Heading mt={6} size="md" textAlign="center">
          FREQUENTLY ASKED <br /> QUESTIONS
        </Heading>
        <Text textAlign="center" mt={4} width="50%">
          {`We’ve helped big-name brands elevate their functinality and
          consistently achieve new heights in their industry, fostering ongoing
          success and growth.`}
        </Text>
      </Flex>
      <Box my={6}>
        <Accordion allowMultiple>
          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">
                  What is the duration of the program?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              The program lasts for 12 weeks, with classes held twice a week.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">Do I need prior experience?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              No prior experience is required. We welcome beginners and provide
              all necessary training.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">What technologies will I learn?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              You will learn HTML, CSS, JavaScript, React, Node.js, and more.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border="none">
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontWeight="bold">Is there a certification?</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Yes, you will receive a certificate upon successful completion of
              the program.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Faq;
