import {
  Box,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

interface CardProps {
  cardTitle: string;
  cardPrice: string;
  cardText: string;
  boxShadows: string;
  bgColors: string;
  weeks: string;
  listOne: string;
  listTwo: string;
  listThree: string;
  listFour: string;
  listFive: string;
  listSix: string;
  listSeven: string;
  listEight?: string;
  isLast: boolean;
}
const Card: React.FC<CardProps> = ({
  cardTitle,
  cardText,
  cardPrice,
  boxShadows,
  bgColors,
  weeks,
  listOne,
  listTwo,
  listThree,
  listFour,
  listFive,
  listSix,
  listSeven,
  listEight,
  isLast,
}) => {
  return (
    <Flex
      data-aos="zoom-in-up"
      bgColor={{
        base: "#164858",
        lg: "transparent",
      }}
      _hover={{
        boxShadow: boxShadows,
      }}
      className="circle"
      flexDir="column"
      maxW="300px"
      height="95%"
      borderRadius="12px">
      <Flex
        textColor={{
          base: "#fff",
          lg: "#000",
        }}
        _hover={{
          textColor: "#fff",
          transition: "all 2.5s ease-out",
        }}
        p={{
          base: ".7rem .7rem",
          mini: "1rem",
          lg: "1rem 1.7rem",
        }}
        gap="1.5rem"
        textAlign="left"
        flexDir="column"
        justifyContent="space-around">
        <Text fontSize="1.2rem" fontWeight="600">
          {cardTitle}
        </Text>
        <Text fontSize="1rem" fontWeight="300">
          {cardText}
        </Text>
        <Text fontSize="2rem">
          {cardPrice}/
          <span
            style={{
              fontSize: "1.2rem",
            }}>
            {weeks}
          </span>
        </Text>
        <Button
          as="a"
          href="https://wa.me/message/3CZOICXDXHL4G1"
          colorScheme="gray"
          outline="1.5px solid #301446"
          borderRadius="4px">
          Get Started Now
        </Button>
        <List
          spacing={3}
          mb="2.5rem"
          fontWeight="400"
          fontSize="1rem"
          justifyContent="center">
          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={CheckIcon}
              boxSize="5"
              padding=".3rem"
              bg="blue.100"
              borderRadius="50%"
              color="blue.300"
            />
            {listOne}
          </ListItem>
          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={CheckIcon}
              color="blue.300"
              boxSize="5"
              padding=".3rem"
              bg="blue.100"
              borderRadius="50%"
            />
            {listTwo}
          </ListItem>
          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={CheckIcon}
              boxSize="5"
              padding=".3rem"
              bg="blue.100"
              borderRadius="50%"
              color="blue.300"
            />
            {listThree}
          </ListItem>

          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={CheckIcon}
              boxSize="5"
              padding=".3rem"
              bg="blue.100"
              borderRadius="50%"
              color="blue.300"
            />
            {listFour}
          </ListItem>
          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={CheckIcon}
              color="blue.300"
              boxSize="5"
              padding=".3rem"
              bg="blue.100"
              borderRadius="50%"
            />
            {listFive}
          </ListItem>
          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={CheckIcon}
              boxSize="5"
              padding=".3rem"
              bg="blue.100"
              color="blue.300"
              borderRadius="50%"
            />
            {listSix}
          </ListItem>

          <ListItem display="flex" gap=".3rem" alignItems="center">
            <ListIcon
              as={isLast ? CheckIcon : CloseIcon}
              color={isLast ? "blue.300" : "black.200"}
              bgColor={isLast ? "blue.100" : "none"}
              boxSize="5"
              padding=".3rem"
              borderRadius="50%"
            />
            {listSeven}
          </ListItem>
          <ListItem
            display={!isLast ? "flex" : "none"}
            gap=".3rem"
            alignItems="center">
            <ListIcon
              as={CloseIcon}
              //bgColor="gray.100"
              color="black.200 !important"
              boxSize="5"
              padding=".3rem"
              borderRadius="50%"
            />
            {listEight}
          </ListItem>
        </List>
      </Flex>
      <Box bgColor={bgColors} className="wave" />
    </Flex>
  );
};

export default Card;
