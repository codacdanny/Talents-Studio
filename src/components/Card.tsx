import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";

interface CardProps {
  cardTitle: string;
  cardText: string;
  bgColors: string;
  headerBgImage?: string; // Optional background image for the header
  logos: string[];
  listOne: string;
  listTwo: string;
  listThree: string;
  listFour: string;
  style?: React.CSSProperties;
}

const Card: FC<CardProps> = ({
  cardTitle,
  cardText,
  bgColors,

  logos,
  listOne,
  listTwo,
  listThree,
  listFour,
  style,
}) => {
  const cardBg = "rgba(255, 255, 255, 0.3)";
  const cardShadow = useColorModeValue("md", "dark-lg");

  return (
    <Flex
      style={style}
      data-aos="zoom-in-up"
      maxW="350px"
      borderRadius="12px"
      overflow="hidden"
      direction="column"
      bg={cardBg}
      color="white"
      boxShadow={cardShadow}>
      <Box
        bgGradient={bgColors}
        bgSize="cover"
        bgPos="center"
        height="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative">
        <Text
          fontSize="1.5rem"
          fontWeight="600"
          color="white"
          textShadow="0px 0px 5px rgba(0, 0, 0, 0.5)">
          {cardTitle}
        </Text>
      </Box>
      <Flex direction="column" p={6} textAlign="center" align="center">
        <Text fontSize="1rem" fontWeight="400" mb={4}>
          {cardText}
        </Text>
        <Flex gap={3} mb={6}>
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo}
              alt={`logo-${index}`}
              boxSize="45px"
              p=".2rem"
            />
          ))}
        </Flex>
        <List spacing={3} mb={6} fontWeight="600" fontSize="1.2rem">
          <ListItem>{listOne}</ListItem>
          <ListItem>{listTwo}</ListItem>
          <ListItem>{listThree}</ListItem>
          <ListItem>{listFour}</ListItem>
        </List>
        <Button as="a" href="#" borderRadius="full" colorScheme="gray" px={6}>
          Get Started Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
