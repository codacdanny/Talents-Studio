import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import nextjs from "../assets/nextJS.png";
import html from "../assets/html.png";
import css from "../assets/css3.png";
import flutter from "../assets/flutter.png";
import Js from "../assets/javascript.png";
import firebase from "../assets/firebase.png";
import androidstudio from "../assets/android-studio.svg";
import aws from "../assets/aws_icon.png";
import azure from "../assets/azure_icon.png";
import react from "../assets/react.svg";
import docker from "../assets/Docker.webp";
import kubernetes from "../assets/Kubernetes-Logo.wine.svg";
const Projects = () => {
  const cardData = [
    {
      title: "Web Development",
      price: "N450,000",
      weeks: "6 months",
      text: "Learn basic UI design concepts and technologies for building complex web applications",
      listOne: "HTML, CSS, JavaScript",
      listTwo: "React",
      listThree: "Node.js, MongoDB",
      listFour: "Next.js",
      logos: [nextjs, html, css, Js],
    },
    {
      title: "Mobile Development",
      price: "N500,000",
      weeks: "6 months",
      text: "Gain expertise in developing mobile applications for both Android and iOS platforms.",
      listOne: "Flutter",
      listTwo: "React Native",
      listThree: "Firebase",
      listFour: "NativeScript",
      logos: [flutter, androidstudio, firebase, react],
    },
    {
      title: "Micro Services",
      price: "N700,000",
      weeks: "6 months",
      text: "Explore the architecture of microservices and learn to build scalable and resilient systems.",
      listOne: "Docker",
      listTwo: "Kubernetes",
      listThree: "GraphQL",
      listFour: "RabbitMQ",
      logos: [azure, aws, docker, kubernetes],
    },
  ];

  return (
    <Box marginY="9rem" position="relative">
      <Heading className="mont" textAlign="center" marginY="3rem">
        Become a Techie!
      </Heading>
      <Box
        id="card"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="2rem">
        {cardData.map((card, index) => (
          <Card
            key={index}
            cardTitle={card.title}
            cardPrice={card.price}
            weeks={card.weeks}
            logos={card.logos}
            cardText={card.text}
            listOne={card.listOne}
            listTwo={card.listTwo}
            listThree={card.listThree}
            listFour={card.listFour}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
