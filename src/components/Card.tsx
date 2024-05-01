import { Box, Button, Flex, List, ListItem, Text } from "@chakra-ui/react";

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
  style?: React.CSSProperties; // Add style prop
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
  style,
}) => {
  return (
    <Flex
      style={style}
      data-aos="zoom-in-up"
      // bgColor={{
      //   base: "#164858",
      //   lg: "transparent",
      // }}
      _hover={{
        boxShadow: boxShadows,
      }}
      className="circle glass"
      flexDir="column"
      maxW="300px"
      height="100%"
      borderRadius="12px">
      <Flex
        textColor={{
          base: "#fff",
        }}
        _hover={{}}
        p={{
          base: ".7rem .7rem",
          mini: "1rem",
          lg: "2rem 1.7rem",
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

        <List
          spacing={3}
          mb="2.5rem"
          fontWeight="400"
          fontSize="1rem"
          justifyContent="center">
          <ListItem display="flex" gap=".3rem" alignItems="center">
            {listOne}
          </ListItem>
          <ListItem display="flex" gap=".3rem" alignItems="center">
            {listTwo}
          </ListItem>
          <ListItem display="flex" gap=".3rem" alignItems="center">
            {listThree}
          </ListItem>

          <ListItem display="flex" gap=".3rem" alignItems="center">
            {listFour}
          </ListItem>
        </List>
        <Button
          as="a"
          href="https://wa.me/message/3CZOICXDXHL4G1"
          colorScheme="gray"
          outline="1.5px solid #301446"
          borderRadius="4px">
          Get Started Now
        </Button>
      </Flex>
      <Box bgColor={bgColors} className="wave" />
    </Flex>
  );
};

export default Card;
