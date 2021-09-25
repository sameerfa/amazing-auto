import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import data from "../../utils/data";

function TestmonialCard(props) {
  const { name, content, link } = props;
  return (
    <NextLink href={link} passHref>
      <Flex
        maxW={"640px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        cursor={"pointer"}
      >
        <Flex
          direction={"column"}
          textAlign={"left"}
          justifyContent={"space-between"}
        >
          <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontWeight={"bold"} fontSize={14}>
            {name}
          </chakra.p>
        </Flex>
      </Flex>
    </NextLink>
  );
}

export default function QuoteCard() {
  return (
    <Flex
      textAlign={"center"}
      p={[10, 10]}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <chakra.h2
          margin={"auto"}
          fontWeight={"medium"}
          color={useColorModeValue("gray.500", "gray.400")}
        >
          See what over{" "}
          <chakra.strong color={useColorModeValue("gray.700", "gray.50")}>
            100,000+
          </chakra.strong>{" "}
          news articles say about Anna Durai!
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={"20"}
        mb={20}
        mt={16}
        mx={"auto"}
      >
        {data.press.map(({ id, content, name, link }) => (
          <TestmonialCard key={id} content={content} name={name} link={link} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
