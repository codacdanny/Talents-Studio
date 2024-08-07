import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import Projects from "./Projects";
import Lottie from "react-lottie";
import animationData from "../assets/animate.json";
import About from "./About";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.png";

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
      <Box id="contact" marginY="3rem" data-aos="fade-up-right">
        <Heading className="mont" marginY="2rem" textAlign="center">
          Get In Touch{" "}
        </Heading>
        <Flex width="100%" alignItems="center" gap="6rem">
          <Text width="40%" fontSize="1.5rem" fontWeight="400">
            Connect with us via our social media handles. We are excited to meet
            you! Do not hesitate to reach out with your questions and enquiries
            as well.
          </Text>
          <Flex flexDirection="column" gap="2rem" width="50%">
            <Lottie options={defaultOptions} height={300} width={300} />
            <Flex justifyContent="center" gap="1rem">
              <Image src={facebook} alt="social media logo" boxSize="40px" />
              <Image src={instagram} alt="social media logo" boxSize="40px" />
              <Image src={twitter} alt="social media logo" boxSize="40px" />
              <Image src={linkedin} alt="social media logo" boxSize="40px" />
              <Image src={email} alt="social media logo" boxSize="40px" />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Main;
