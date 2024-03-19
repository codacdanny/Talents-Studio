import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
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
        <Box>
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
          padding="1rem 1.5rem"
          bgColor="purple"
          fontSize="1.2rem"
          borderRadius="1rem"
          textAlign="justify"
          alignItems="stretch">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione
          magnam alias quis debitis nemo numquam unde pariatur. Ipsa deserunt at
          eius quas voluptates quae? Soluta veniam maxime nam corrupti? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ab ratione magnam
          alias quis debitis nemo numquam unde pariatur. Ipsa deserunt at eius
          quas voluptates quae? Soluta veniam maxime nam corrupti? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ab ratione magnam alias
          quis debitis nemo numquam unde pariatur. Ipsa deserunt at eius quas
          voluptates quae? Soluta veniam maxime nam corrupti?
        </Flex>
        <Flex
          padding="1rem 1.5rem"
          bgColor="purple"
          fontSize="1.2rem"
          borderRadius="1rem"
          textAlign="justify"
          alignItems="stretch">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ratione
          magnam alias quis debitis nemo numquam unde pariatur. Ipsa deserunt at
          eius quas voluptates quae? Soluta veniam maxime nam corrupti? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ab ratione magnam
          alias quis debitis nemo numquam unde pariatur. Ipsa deserunt at eius
          quas voluptates quae? Soluta veniam maxime nam corrupti? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ab ratione magnam alias
          quis debitis nemo numquam unde pariatur. Ipsa deserunt at eius quas
          voluptates quae? Soluta veniam maxime nam corrupti?
        </Flex>
        <Box>
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
        <Flex flexDir="column" gap=".5rem">
          <Text fontSize="2rem" fontWeight="600">
            With us,
          </Text>
          <Text fontSize="3rem" fontWeight="500">
            Finding a career path promises to be easy
          </Text>
          <Text fontSize="1rem" fontWeight="400">
            In most beginner stories, you find that one thing is common, the
            moment of confusion. Here, because we care about your progress, we
            have provided very streamlined courses with a platform that promises
            ease of use.
          </Text>
          <SimpleGrid columns={2} spacing={25} paddingX="3rem">
            <InfoCard title="Competent facilitators" value={200} />
            <InfoCard title="Professional videos" value={100} />
            <InfoCard title="Students" value={10} />
            <InfoCard title="Sponsors" value={20} />
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default About;
