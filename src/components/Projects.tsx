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
import Card from "./Card";

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
    <Box marginY="9rem">
      <Heading textAlign="center" marginY="2rem">
        Our Tools
      </Heading>
      <Box bgColor="" padding="1rem">
        <Text fontSize="1.2rem">
          Here at Talents Hunt Studio we train students in differents tech
          niches ranging from{" "}
          <span
            style={{
              fontWeight: "700",
              fontSize: "1.5rem",
            }}>
            FrontEnd Development, Mobile Development, Backend Development, Micro
            Processors and Devops Engineering.
          </span>{" "}
          Some of the tools our students master how to use are:
        </Text>
        <Flex wrap="wrap" gap="4rem" justifyContent="center" paddingY="3rem">
          {/* {imageData.map((image) => (
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
          ))} */}
          <Card
            bgColors="#164858"
            boxShadows="0px 10px 25px 0px #CCD9FF"
            cardTitle="Lite Class"
            cardPrice="N45,000"
            weeks="6 weeks"
            cardText="Features for individuals who need quick knowledge of UI design."
            listOne="UI (User Interface) design."
            listTwo="What is UI design?"
            listThree="Typography, colours, layout, hierarchy, whitespace, icons, balance and alignment.?"
            listFour="Wireframes: creating standard low fidelity and high fidelity wireframes."
            listFive="Interpreting customer briefs and converting it to great designs."
            listSix="Learn how to design landing pages, mobile apps and dashboard screens."
            listSeven="Advanced testing and prototyping."
            listEight="Certificate of Completion."
            isLast={false}
          />
          <Card
            bgColors="#164858"
            boxShadows="0px 10px 25px 0px #CCD9FF"
            cardTitle="Advance Class"
            cardPrice="N95,000"
            weeks="9 weeks"
            cardText="Features for individuals who who need advanced knowledge of UI design"
            listOne="Lite Class"
            listTwo="What is UX design?"
            listThree="User research methods: qualitative & quantitative research, interpreting user feedback to designs"
            listFour="Maps: empathy map, customer journey map and experience map."
            listFive="Advanced testing and prototyping"
            listSix="Advanced testing and prototyping"
            listSeven="Job search support and guidance"
            listEight="Exposure to design tips and tricks - shortcuts and resources."
            isLast={false}
          />
          <Card
            bgColors="#164858"
            boxShadows="0px 10px 25px 0px #CCD9FF"
            cardTitle="Premium Class"
            cardPrice="N250,000"
            weeks="3 Months"
            cardText="Features for individuals who need premium knowledge of UI design."
            listOne="Advance Class"
            listTwo="Learn how to use PRO design tools like Miro, Notion, Adobe illustrator, Figjam etc"
            listThree="Exposure to design tips and tricks - shortcuts and resources"
            listFour="Mentorship with a Senior Designer."
            listFive="Work on complex case studies and projects"
            listSix="Job search support and guidance"
            listSeven="Certificate of Completion."
            isLast={true}
          />
          <Card
            bgColors="#164858"
            boxShadows="0px 10px 25px 0px #CCD9FF"
            cardTitle="  Class"
            cardPrice="N250,000"
            weeks="3 Months"
            cardText="Features for individuals who need premium knowledge of UI design."
            listOne="Advance Class"
            listTwo="Learn how to use PRO design tools like Miro, Notion, Adobe illustrator, Figjam etc"
            listThree="Exposure to design tips and tricks - shortcuts and resources"
            listFour="Mentorship with a Senior Designer."
            listFive="Work on complex case studies and projects"
            listSix="Job search support and guidance"
            listSeven="Certificate of Completion."
            isLast={true}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Projects;
