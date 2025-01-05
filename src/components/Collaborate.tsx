import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import theme from "../theme";
import { CheckCircleIcon, Icon } from "@chakra-ui/icons";
import woman from "../assets/collaborateGirl.jpg";
const Collaborate = () => {
  return (
    <Container maxWidth="container.xl">
      <Box
        bgColor="secondaryBlue"
        p="1.5rem"
        borderRadius={theme.customBorderRadius}
        my={16}>
        <Grid columnGap={20} templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Flex height="100%" flexDir="column" justifyContent="space-evenly">
              <Heading color="background" size="md">
                WHY COLLABORATE <br /> WITH NALEDI TECH?
              </Heading>
              <Text color="background" mt={4}>
                Collaborating with NalediTech guarantees a transformative
                experience for your business. Our team of seasoned experts
                brings a wealth of experience to the table. With a proven track
                record of delivering cutting-edge software solutions and
                commitment to excellence.
              </Text>
              <Box
                bg="background"
                mt={10}
                borderRadius={theme.customBorderRadius}>
                {/* INNOVATIVE SOLUTIONS */}
                <Flex direction="column" gap={4}>
                  <Box p={4}>
                    <Flex alignItems="center" gap={4}>
                      <Icon as={CheckCircleIcon} color="gray.400" boxSize={6} />
                      <Flex flexDir="column">
                        <Text fontWeight="bold" fontSize="md" ml={2}>
                          Innovative Solutions
                        </Text>
                        <Text color="gray.600" mt={2}>
                          innovative solutions the best technologies
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>

                  <Box p={4}>
                    <Flex alignItems="center" gap={4}>
                      <Icon as={CheckCircleIcon} color="gray.400" boxSize={6} />
                      <Flex flexDir="column">
                        <Text fontWeight="bold" fontSize="md" ml={2}>
                          Innovative Solutions
                        </Text>
                        <Text color="gray.600" mt={2}>
                          innovative solutions the best technologies
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>

                  <Box p={4}>
                    <Flex alignItems="center" gap={4}>
                      <Icon as={CheckCircleIcon} color="gray.400" boxSize={6} />
                      <Flex flexDir="column">
                        <Text fontWeight="bold" fontSize="md" ml={2}>
                          Innovative Solutions
                        </Text>
                        <Text color="gray.600" mt={2}>
                          innovative solutions the best technologies
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem mt={10}>
            <Image bgSize="cover" height="80%" src={woman} alt="woman" />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Collaborate;
