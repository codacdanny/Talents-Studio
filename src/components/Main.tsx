import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import runner from "../assets/Running man.svg";
import Projects from "./Projects";
import Lottie from "react-lottie";
import animationData from "../assets/animate.json";

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

const Main = () => {
  useEffect(() => {
    const NUMBER_OF_STARS = 80;

    const addPulse = (element: HTMLElement): void => {
      const pulseTime: number = Math.random() * 4000;
      setTimeout(() => {
        element.classList.add("pulse");
      }, pulseTime);
    };

    const mainBox = document.querySelector(".main");

    if (mainBox) {
      for (let jess = 0; jess < NUMBER_OF_STARS; jess++) {
        const aStar = document.createElement("div");
        aStar.className = "star";

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const x = Math.random() * windowWidth;
        aStar.style.left = x + "px";
        mainBox.appendChild(aStar);

        const y = Math.random() * windowHeight;
        aStar.style.top = y + "px";

        addPulse(aStar);
      }
    }
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box
      className="main"
      color="#F8F2FC"
      height="100%"
      padding="3rem 3rem"
      overflow="hidden"
      marginBottom="3rem">
      <Flex gap="3rem" alignItems="center">
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
      </Flex>
      {Array.from({ length: 80 }, (_, index) => (
        <Box
          key={index}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <Projects />
      <Box>
        <Heading marginY="3rem" textAlign="center">
          {" "}
          Help us connect with you
        </Heading>
        <Flex width="100%" alignItems="center" gap="6rem">
          <Text width="40%" fontSize="1.5rem" fontWeight="400">
            This helps us keep in touch with you. Do kindly note that any
            infomation sent would be on a need-to-know basis. Also, further
            stages of the admission process would be communicated through the
            medium.
          </Text>
          <Flex flexDirection="column" gap="2rem" width="50%">
            <Lottie options={defaultOptions} height={300} width={400} />

            <Button borderRadius="20px">Send a message</Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Main;
