import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import runner from "../assets/Running man.svg";

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
      <Heading textAlign="center" marginY="2rem">
        What we Do
      </Heading>
      <SimpleGrid columns={2} spacing={10} rowGap="8rem" alignItems="center">
        <Box className="bounce">
          {" "}
          <Image
            src={runner}
            boxSize="fit-content"
            objectFit="cover"
            alt="runner image"
            bgColor="transparent"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </Box>
        <Flex
          className="bounce purple-glass"
          padding="1rem 1.5rem"
          borderRadius="1rem"
          flexDirection="column">
          <Heading textAlign="center" marginBottom="1rem">
            Talents Studio
          </Heading>
          <Text fontSize="1.3rem" marginBottom=".7rem" fontWeight={500}>
            Do you ?
          </Text>
          <UnorderedList fontWeight={300} fontSize="1.2rem" spacing=".5rem">
            <ListItem> Have a project idea in need of Devs?</ListItem>
            <ListItem> Need maintenance on am existing tech project?</ListItem>
            <ListItem>Require consultation ?</ListItem>
          </UnorderedList>
          <Text fontWeight={400} marginTop="1rem">
            Whether you need a full team or a single techie, Naledi Studio gives
            you access to all the talent you need for your project. Let us know
            what you want to build <Link textDecoration="underline">here</Link>
          </Text>
        </Flex>
        <Flex
          className="bounce purple-glass"
          padding="1rem 1.5rem"
          borderRadius="1rem"
          flexDirection="column">
          <Heading textAlign="center" marginBottom="1rem">
            Talents Hub
          </Heading>
          <Text
            fontWeight={400}
            fontSize="1.2rem"
            textAlign="justify"
            marginTop=".5rem">
            Learn in-demand tech skills that are relevant worldwide.
            <br /> With our well curated course contents and skilled
            facilitators, your tech career is just one step away.
          </Text>
          <Text marginY="1rem">
            Find the right course for you{" "}
            <Link textDecoration="underline">here</Link>{" "}
          </Text>
        </Flex>
        <Box>
          {" "}
          <Image
            className="bounce"
            src={runner}
            boxSize="fit-content"
            objectFit="cover"
            alt="runner image"
            bgColor="transparent"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          />
        </Box>
        <Image
          className="bounce"
          src={runner}
          boxSize="fit-content"
          objectFit="cover"
          alt="runner image"
          bgColor="transparent"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        />
        <Flex flexDir="column" gap=".5rem" className="bounce">
          <Text fontSize="2rem" fontWeight="600">
            About Us ,
          </Text>
          <Text fontSize="3rem" fontWeight="500">
            TalentTech is the home of all things tech
          </Text>
          <Text fontSize="1.8rem" fontWeight="500">
            {" "}
            TalentsTech comprises of Talents Studio and Talents Hub
          </Text>
          <Text fontSize="1rem" fontWeight="400">
            Talents Studio makes the talent available to bring our clients'
            project ideas to reality.
          </Text>
          <Text fontSize="1rem" fontWeight="400">
            Talents Hub makes it possible for our students to learn emerging
            tech skills to jumpstart their careers. Our graduates have an
            employment rate of 92%
          </Text>
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
