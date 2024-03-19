import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import Projects from "./Projects";
import Lottie from "react-lottie";
import animationData from "../assets/animate.json";
import About from "./About";

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
      <About />
      <Flex gap="3rem" alignItems="center"></Flex>
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
