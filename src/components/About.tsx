import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
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
      <Heading textAlign="center" marginBottom="7rem">
        What we Do
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
          padding="1rem 1.5rem"
          borderRadius="1rem">
          <Flex flexDirection="column">
            <Heading textAlign="center" marginBottom="1rem">
              NalediTech Studio
            </Heading>
            <Text fontSize="1.3rem" marginBottom=".7rem" fontWeight={500}>
              Do you...
            </Text>
            <UnorderedList
              fontWeight={300}
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
            <Text fontWeight={400} marginTop="1rem">
              Be it a team or a single techie, Naledi Studio gives you access to
              all the talent you need for your project. Let us know what you
              want to build.
            </Text>
          </Flex>
          <Button
            my="1rem"
            as="a"
            href="#"
            colorScheme="gray"
            outline="none"
            borderRadius="4px">
            Learn More
          </Button>
        </Box>
        <Box
          className="bounce purple-glass"
          padding="1rem 1.5rem"
          borderRadius="1rem"
          data-aos="zoom-in-left">
          <Flex flexDirection="column">
            <Heading textAlign="center" marginBottom="1rem">
              NalediTech Academy
            </Heading>
            <Text fontSize="1.3rem" marginBottom=".7rem" fontWeight={500}>
              Become a Techie{" "}
            </Text>
            <Text fontWeight={400} fontSize="1.2rem" textAlign="justify">
              Learn in-demand tech skills that are relevant worldwide.
              <br /> With our well curated course contents and skilled
              facilitators, your tech career is just one step away.
            </Text>
            <Text marginY="1rem">
              Find the right course for you{" "}
              <Link textDecoration="underline">here!</Link>{" "}
            </Text>
          </Flex>
          <Button
            my="1rem"
            as="a"
            href="#"
            colorScheme="gray"
            outline="none"
            borderRadius="4px">
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
          flexDir="column"
          gap=".5rem"
          className="bounce"
          data-aos="fade-up">
          <Text fontSize="2rem" fontWeight="600">
            About Us
          </Text>
          <Text fontSize="3rem" fontWeight="500">
            NalediTech is the home of all things Software Engineering
          </Text>
          <Text fontSize="1.8rem" fontWeight="500">
            {" "}
            NalediTech is made up of NalediTech Studio and NalediTech Academy
          </Text>
          <Flex alignItems="center" gap=".5rem">
            <Icon as={BiSolidStar} />
            <Text fontSize="1rem" fontWeight="400">
              NalediTech Studio provides clients with the talent required to
              bring their project ideas to life.
            </Text>
          </Flex>
          <Flex alignItems="center" gap=".5rem">
            <Icon as={BiSolidStar} />
            <Text fontSize="1rem" fontWeight="400">
              NalediTech Academy makes it possible for students to learn
              emerging tech skills, to jumpstart or switch careers. NT Academy
              graduates have an employment rate of 92%
            </Text>
          </Flex>

          <SimpleGrid
            columns={2}
            spacing={25}
            paddingX="3rem"
            data-aos="fade-up">
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
