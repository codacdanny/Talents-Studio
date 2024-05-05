import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import nextjs from "../assets/nextJS.png";
import html from "../assets/html.png";
import express from "../assets/expressJS.png";
import css from "../assets/css3.png";
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
    <Flex style={style} data-aos="zoom-in-up" maxW="350px" borderRadius="12px">
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
          className="right-page "
          p={{
            base: ".7rem .7rem",
            mini: "1rem",
            lg: "2rem 1.7rem",
          }}>
          <Box className="page glass" padding="1rem 2rem">
            <Text
              fontSize="1.5rem"
              marginBottom="2rem"
              textAlign="center"
              fontWeight="600">
              {cardTitle}
            </Text>
            <Text fontSize="1rem" fontWeight="300">
              {cardText}
            </Text>
            <Flex>
              <Image
                src={nextjs}
                alt="logo"
                bgSize="cover"
                height="4rem"
                width="2rem"
              />
              <Image
                src={html}
                alt="logo"
                bgSize="cover"
                height="4rem"
                width="2rem"
              />
              <Image
                src={css}
                alt="logo"
                bgSize="cover"
                height="4rem"
                width="2rem"
              />
              <Image
                src={express}
                alt="logo"
                bgSize="cover"
                height="4rem"
                width="2rem"
              />
            </Flex>
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
      </Flex>
      <Box bgColor={bgColors} className="wave" />
    </Flex>
  );
};

export default Card;
