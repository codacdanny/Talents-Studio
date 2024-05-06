import {
  Box,
  Button,
  Flex,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface CardProps {
  cardTitle: string;
  cardPrice: string;
  cardText: string;
  boxShadows: string;
  bgColors: string;
  weeks: string;
  logos: string[];
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
  logos,
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
        <Box className="right-page ">
          <Flex
            className="page glass"
            padding="1rem 2rem"
            flexDirection="column"
            justifyContent="space-around">
            <Text fontSize="1.5rem" textAlign="center" fontWeight="600">
              {cardTitle}
            </Text>
            <Text fontSize="1rem" fontWeight="400">
              {cardText}
            </Text>
            <Flex gap="1.5rem" justifyContent="center" alignItems="center">
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo}
                  alt={`logo-${index}`}
                  boxSize="fit-content"
                  objectFit="cover"
                  width="2.5rem"
                  // Add margin to separate logos
                />
              ))}
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
          </Flex>
        </Box>
        <Box className="left-page">
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            className="page page-2 glass"
            padding="1rem 2rem">
            <List spacing={3} mb="2.5rem" fontWeight="600" fontSize="1.2rem">
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
          </Flex>
        </Box>
      </Flex>
      <Box bgColor={bgColors} className="wave" />
    </Flex>
  );
};

export default Card;
