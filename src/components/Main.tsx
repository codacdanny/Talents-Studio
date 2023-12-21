import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

const Main = () => {
  return (
    <Box>
      <Flex>
        <Image />
        <Box>
          <Text></Text>
          <Text></Text>
          <Text></Text>
        </Box>
        <SimpleGrid>
          <Flex flexDirection="column"></Flex>
          <Flex flexDirection="column"></Flex>
          <Flex flexDirection="column"></Flex>
          <Flex flexDirection="column"></Flex>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Main;
