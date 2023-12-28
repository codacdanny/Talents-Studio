import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ScrollCarousel from "scroll-carousel-react";

const Card = ({
  image,
  title,
  altText,
}: {
  image: string;
  title: string;
  altText: string;
}) => {
  return (
    <Flex flexDirection="column" alignItems="center" gap="1rem">
      <Image
        src={image}
        alt={altText}
        boxSize="350px"
        objectFit="cover"
        _hover={{ opacity: 0.4 }}
      />
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
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_1280.jpg",
      title: "Back End",
      altText: "Back END",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2016/12/28/09/36/web-1935737_1280.png",
      title: "Front End",
      altText: "Front End",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2018/06/08/00/48/developer-3461405_1280.png",
      title: "Mobile Development",
      altText: "Mobile Dev",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/12/22/10/01/ai-generated-8463490_640.jpg",
      title: "Artificial I ntelligence",
      altText: "AI",
    },
    {
      image:
        "https://media.istockphoto.com/id/1296817869/photo/cloud-computing-technology-transformation-concept-businessman-touching-on-virtual-cloud.jpg?s=2048x2048&w=is&k=20&c=ISiUJQp_qqZzMtuZOxnM6G3h5gCFYnnkOQRTJs4-f44=",
      title: "Micro Services",
      altText: "Micro services",
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
          />
        ))}
      </ScrollCarousel>
    </Box>
  );
};

export default Projects;
