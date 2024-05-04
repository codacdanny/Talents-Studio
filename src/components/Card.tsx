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
  // cardPrice,
  // boxShadows,
  bgColors,
  // weeks,
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
      // _hover={{
      //   boxShadow: boxShadows,
      // }}
      // flexDir="column"
      maxW="350px"
      borderRadius="12px">
      <Flex
        textColor={{
          base: "#d4d4d4",
        }}
        p={{
          base: ".7rem .7rem",
          mini: "1rem",
          lg: "2rem 1.7rem",
        }}
        textAlign="left"
        // flexDir="column"
        justifyContent="space-around"
        className="card-container">
        <Box
          className="left-page"
          p={{
            base: ".7rem .7rem",
            mini: "1rem",
            lg: "2rem 1.7rem",
          }}>
          <Box className="page page-2 glass">
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
              href="#"
              colorScheme="gray"
              outline="none"
              borderRadius="4px">
              Get Started Now
            </Button>
          </Box>
        </Box>
        <Box
          className="right-page "
          p={{
            base: ".7rem .7rem",
            mini: "1rem",
            lg: "2rem 1.7rem",
          }}>
          <Box className="page page-3 glass">
            <Text fontSize="1.2rem" fontWeight="600">
              {cardTitle}
            </Text>
            <Text fontSize="1rem" fontWeight="300">
              {cardText}
            </Text>
            {/* <Text fontSize="2rem">
          {cardPrice}/
          <span
            style={{
              fontSize: "1.2rem",
            }}>
            {weeks}
          </span>
        </Text> */}
          </Box>
        </Box>
      </Flex>
      <Box bgColor={bgColors} className="wave" />
    </Flex>
  );
};

export default Card;
