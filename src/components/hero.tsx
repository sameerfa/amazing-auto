import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Center
} from "@chakra-ui/react";
import Image from "next/image";
import hero from "../../images/hero-image.png";

export default function Hero() {
  return (
    <Container maxW={"5xl"} mb={20}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Who is{" "}
          <Text as={"span"} color="brand.400">
            Anna Durai?
          </Text>
        </Heading>
        <Text maxW={"3xl"}>
          Chennai-based Anna Durai aka Auto Anna has several lessons to impart
          in customer service and loyalty. He talks about his humble beginnings,
          how his life plan changed, and how he chose to carry on and put all
          his passion into ensuring the best experience for his passengers.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button variant="primary" colorScheme="brand" size="sm" w="full">
            Book a ride
          </Button>
          <Button variant="secondary" colorScheme="brand" size="sm" w="full">
            Learn more
          </Button>
        </Stack>
        {/* <Flex w={"full"}>
          <Center>
          </Center>
        </Flex> */}
      </Stack>
    </Container>
  );
}
