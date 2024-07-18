import {
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
  cardPrice: string;
  cardText: string;
  weeks: string;
  logos: string[];
  listOne: string;
  listTwo: string;
  listThree: string;
  listFour: string;
}

const Card: FC<CardProps> = ({
  cardTitle,
  cardText,

  logos,
  listOne,
  listTwo,
  listThree,
  listFour,
}) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardShadow = useColorModeValue("md", "dark-lg");

  return (
    <Flex
      data-aos="zoom-in-up"
      maxW="350px"
      borderRadius="12px"
      _hover={{
        transform: "translateY(-4%)",
        transition: "0.2s",
      }}
      color="black"
      // overflow="hidden"

      bg={cardBg}
      boxShadow={cardShadow}>
      <Flex direction="column" p={6} textAlign="center" align="center">
        <Text fontSize="1.5rem" fontWeight="600" mb={4}>
          {cardTitle}
        </Text>
        <Text fontSize="1rem" fontWeight="400" mb={4}>
          {cardText}
        </Text>
        <Flex gap={8} mb={6}>
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
        <Button
          as="a"
          href="#"
          bg="#000"
          color="white"
          borderRadius="full"
          px={6}
          _hover={{
            bg: "#515452",
          }}>
          Get Started Now
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;
