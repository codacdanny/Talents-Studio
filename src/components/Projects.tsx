import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import ScrollCarousel from "scroll-carousel-react";

const Card = ({
  image,
  title,
  altText,
  listOne,
  listTwo,
  listThree,
}: {
  image: string;
  title: string;
  altText: string;
  listOne: string;
  listTwo: string;
  listThree?: string;
}) => {
  // const handleMouseEnter = (e: { target: { style: { filter: string; }; }; }) => {

  //   // Add logic to display the list of concepts
  // };

  // const handleMouseLeave = (e: { target: { style: { filter: string; }; }; }) => {
  //   e.target.style.filter = "none";
  //   // Add logic to hide the list of concepts
  // };
  return (
    <Flex flexDirection="column" alignItems="center" gap="1rem">
      <Box position="relative" className="image-container">
        <Image
          src={image}
          alt={altText}
          boxSize="350px"
          objectFit="cover"
          _hover={{ filter: "brightness(50%) blur(12px)" }}
        />
        <List
          textAlign="center"
          width="100%"
          className="skills-list"
          pointerEvents="none"
          flexDirection="column"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          opacity="0"
          visibility="hidden"
          fontSize="1.3rem"
          gap="1rem">
          <ListItem>{listOne}</ListItem>
          <ListItem>{listTwo}</ListItem>
          <ListItem>{listThree}</ListItem>
        </List>
      </Box>
      <Text fontSize="1.7rem">{title}</Text>
    </Flex>
  );
};

const Projects = () => {
  const cardsData = [
    {
      image:
        "https://img.freepik.com/premium-photo/3d-illustration-figma-graphic-design-web-design-black-white-black-background_617193-24.jpg?w=1060",
      title: "UI/UX Design",
      altText: "UI/UX",
      listOne: "figma",
      listTwo: "Design Patterns",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      title: "Back End",
      altText: "Back END",
      listOne: "Node Js",
      listTwo: "Express",
      listThree: "Database",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png",
      title: "Front End",
      altText: "Front End",
      listOne: "HTML/CSS",
      listTwo: "Javascript",
      listThree: "React",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png",
      title: "Mobile Development",
      altText: "Mobile Dev",
      listOne: "React-Native",
      listTwo: "Flutter",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/12/22/10/01/ai-generated-8463490_640.jpg",
      title: "Artificial I ntelligence",
      altText: "AI",
      listOne: "Python",
      listTwo: "Statistics",
      listThree: "Machine Learning",
    },
    {
      image:
        "https://media.istockphoto.com/id/1296817869/photo/cloud-computing-technology-transformation-concept-businessman-touching-on-virtual-cloud.jpg?s=2048x2048&w=is&k=20&c=ISiUJQp_qqZzMtuZOxnM6G3h5gCFYnnkOQRTJs4-f44=",
      title: "Micro Services",
      altText: "Micro services",
      listOne: "Cloud Services",
      listTwo: "AWS",
      listThree: "Containerization",
    },
  ];
  return (
    <Box color="#F8F2FC" zIndex={50} marginY="3rem">
      <Heading textAlign="center" paddingY="3rem">
        Programmes
      </Heading>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log("I am ready")}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            altText={card.altText}
            listOne={card.listOne}
            listTwo={card.listTwo}
            listThree={card.listThree}
          />
        ))}
      </ScrollCarousel>
    </Box>
  );
};

export default Projects;
