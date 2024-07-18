import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import engineer from "../assets/engineering.svg";
import teach from "../assets/teaching.svg";
import code from "../assets/code.svg";
import { BiSolidStar } from "react-icons/bi";

interface InfoCardProps {
  title: string;
  value: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  return (
    <Flex
      flexDirection="column"
      gap=".6rem"
      fontWeight="600"
      alignItems="center">
      <Text fontSize="3rem">{value}</Text>
      <Text fontSize="1.25rem">{title}</Text>
    </Flex>
  );
};
const About = () => {
  return (
    <Box marginY="3rem">
      <Heading className="mont" textAlign="center" marginBottom="7rem">
        What We Do
      </Heading>
      <SimpleGrid
        columns={2}
        spacing={10}
        rowGap="8rem"
        alignItems="center"
        marginTop="2rem">
        <Box className="bounce">
          {" "}
          <Image
            src={engineer}
            boxSize="fit-content"
            objectFit="cover"
            alt="runner image"
            bgColor="transparent"
            data-aos="zoom-in-left"
          />
        </Box>
        <Box
          data-aos="zoom-in-right"
          className="bounce purple-glass"
          id="about"
          padding="1rem 1.5rem"
          borderRadius="1rem">
          <Flex flexDirection="column">
            <Heading className="mont" textAlign="center" marginBottom="1rem">
              NalediTech Studio
            </Heading>
            <Text fontSize="1.3rem" marginBottom=".7rem" fontWeight={500}>
              Do you...
            </Text>
            <UnorderedList
              fontWeight={500}
              fontSize="1.2rem"
              spacing=".5rem"
              listStyleType="none">
              <ListItem>
                <ListIcon as={BiSolidStar} /> Have a project idea in need of
                Devs?
              </ListItem>
              <ListItem>
                <ListIcon as={BiSolidStar} /> Need maintenance on an existing
                tech project?
              </ListItem>
              <ListItem>
                <ListIcon as={BiSolidStar} /> Require consultation ?
              </ListItem>
            </UnorderedList>
            <Text fontSize="1.2rem" fontWeight={400} marginTop="1rem">
              Be it a team or a single techie, NalediTech Studio gives you
              access to all the talent you need for your project. Let us know
              what you want to build.
            </Text>
          </Flex>
          <Button
            my="1rem"
            as="a"
            href="#"
            px={6}
            colorScheme="gray"
            outline="none"
            borderRadius="full">
            Contact Us
          </Button>
        </Box>
        <Box
          className="bounce purple-glass"
          padding="1rem 1.5rem"
          borderRadius="1rem"
          data-aos="zoom-in-left">
          <Flex flexDirection="column">
            <Heading className="mont" textAlign="center" marginBottom="1rem">
              NalediTech Academy
            </Heading>
            <Text fontSize="1.3rem" marginBottom=".7rem" fontWeight={500}>
              Become a Techie!{" "}
            </Text>
            <Text fontWeight={400} fontSize="1.2rem" textAlign="justify">
              Learn in-demand tech skills that are relevant worldwide.
              <br /> With our well curated course contents and skilled
              facilitators, your tech career is just one step away.
            </Text>
            <Text marginY="1rem" fontSize="1.2rem">
              {" "}
              Find the right course for you here!
            </Text>
          </Flex>
          <Button
            my="1rem"
            as="a"
            px={6}
            href="#card"
            colorScheme="gray"
            outline="none"
            borderRadius="full">
            Learn More
          </Button>
        </Box>
        <Box>
          {" "}
          <Image
            className="bounce"
            src={code}
            boxSize="fit-content"
            objectFit="cover"
            alt="runner image"
            bgColor="transparent"
            data-aos="zoom-in-right"
          />
        </Box>
        <Image
          data-aos="fade-up"
          className="bounce"
          src={teach}
          boxSize="fit-content"
          objectFit="cover"
          alt="runner image"
          bgColor="transparent"
        />
        <Flex
          borderRadius="1rem"
          padding="1rem 1.5rem"
          flexDir="column"
          gap=".5rem"
          className="bounce  purple-glass"
          data-aos="fade-up">
          <Heading className="mont" textAlign="center" marginBottom="1rem">
            About Us
          </Heading>
          <Text fontSize="1.5rem" fontWeight="400" marginBottom=".6rem">
            NalediTech is your one-stop shop for all things tech. With our
            Academy and Studio, we have got your needs covered.
          </Text>

          <Flex alignItems="center" gap=".5rem" marginBottom=".6rem">
            <Icon as={BiSolidStar} fontSize="1.2rem" />
            <Text fontWeight={500} fontSize="1.2rem">
              NalediTech Studio provides clients with the talent required to
              bring their project ideas to life.
            </Text>
          </Flex>
          <Flex alignItems="center" gap=".5rem" marginBottom=".6rem">
            <Icon as={BiSolidStar} fontSize="1.2rem" />
            <Text fontWeight={500} fontSize="1.2rem">
              NalediTech Academy makes it possible for students to learn
              emerging tech skills, to jumpstart or switch careers. NT Academy
              graduates have an employment rate of 92%
            </Text>
          </Flex>

          <SimpleGrid columns={2} spacing={25} paddingX="3rem">
            <InfoCard title="Completed Projects" value={200} />
            <InfoCard title="Satisfied Clients" value={100} />
            <InfoCard title="Enrolled Students" value={10} />
            <InfoCard title="Skilled Facilitators" value={20} />
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default About;
