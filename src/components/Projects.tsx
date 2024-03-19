import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import reactLogo from "../assets/react.png";
import vuejs from "../assets/vueJS.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import mongoDB from "../assets/mongoDB.png";
import nodeJS from "../assets/nodeJS.png";
import nextJS from "../assets/nextJS.png";
import flutter from "../assets/flutter.png";
import firebase from "../assets/firebase.png";
import css3 from "../assets/css3.png";
import github from "../assets/github.png";
import ardruino from "../assets/arduino.png";
import aws from "../assets/aws_icon.png";
import azure from "../assets/azure_icon.png";
import cpp from "../assets/cpp.png";
import cassandra from "../assets/cassandra-icon.png";
import expressJS from "../assets/expressJS.png";
import postgreSQL from "../assets/PostgreSQL_.png";
import python from "../assets/python.png";
import sql from "../assets/sql.png";
import typescript from "../assets/typescript_icon.png";
import android from "../assets/android-studio.svg";
import vscode from "../assets/vscode.png";
import angular from "../assets/AngularJS.svg";

type ImageData = {
  name: string;
  src: string;
  alt: string;
};

const imageData: ImageData[] = [
  { name: "html", src: html, alt: "html Logo" },
  { name: "css3", src: css3, alt: "css3 Logo" },
  { name: "javascript", src: javascript, alt: "javascript Logo" },
  { name: "reactLogo", src: reactLogo, alt: "React Logo" },
  { name: "vuejs", src: vuejs, alt: "Vue.js Logo" },
  { name: "angular", src: angular, alt: "angular Logo" },
  { name: "ardruino", src: ardruino, alt: "ardruino Logo" },
  { name: "aws", src: aws, alt: "aws Logo" },
  { name: "azure", src: azure, alt: "azure Logo" },
  { name: "cpp", src: cpp, alt: "cpp Logo" },
  { name: "cassandra", src: cassandra, alt: "cassandra Logo" },
  { name: "expressJS", src: expressJS, alt: "expressJS Logo" },
  { name: "postgreSQL", src: postgreSQL, alt: "postgreSQL Logo" },
  { name: "python", src: python, alt: "python Logo" },
  { name: "sql", src: sql, alt: "sql Logo" },
  { name: "typescript", src: typescript, alt: "typescript Logo" },
  { name: "android", src: android, alt: "android Logo" },
  { name: "vscode", src: vscode, alt: "vscode Logo" },
  { name: "nodeJS", src: nodeJS, alt: "nodeJS Logo" },
  { name: "mongoDB", src: mongoDB, alt: "mongoDB Logo" },
  { name: "nextJS", src: nextJS, alt: "nextJS Logo" },
  { name: "flutter", src: flutter, alt: "flutter Logo" },
  { name: "firebase", src: firebase, alt: "firebase Logo" },
  { name: "github", src: github, alt: "github Logo" },
];

const Projects = () => {
  return (
    <Box>
      <Heading textAlign="center" marginY="2rem">
        Projects
      </Heading>
      <Box bgColor="" padding="1rem">
        <Text>
          Here at Talents Hunt Studio we train students in differents tech
          niches ranging from{" "}
          <span
            style={{
              fontWeight: "700",
              fontSize: "1.2rem",
            }}>
            FrontEnd Development, Mobile Development, Backend Development, Micro
            Processors and Devops Engineering.
          </span>{" "}
          Some of the tools our students master how to use are:
        </Text>
        <Flex wrap="wrap" gap="4rem" justifyContent="center" paddingY="3rem">
          {imageData.map((image) => (
            <Image
              key={image.name}
              src={image.src}
              alt={image.alt}
              boxSize="fit-content"
              objectFit="cover"
              bgColor="transparent"
              width="110px"
              height="auto"
              bgGradient="linear-gradient(-60deg, #c39dcab3 50%, #d2cacecc 50%);"
              padding="1rem"
              borderRadius="1rem"
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
