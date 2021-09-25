import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Container mb={20}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            <Text as={"span"} color="brand.700">
              Atithi{" "}
            </Text>
            Devo Bhava
          </Heading>
        </motion.div>
        <Text maxW={"3xl"}>
          Chennai-based Anna Durai aka Auto Anna has several lessons to impart
          in customer service and loyalty. He talks about his humble beginnings,
          how his life plan changed, and how he chose to carry on and put all
          his passion into ensuring the best experience for his passengers.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NextLink href="/book-a-ride" passHref>
            <Button variant="primary" colorScheme="brand" size="sm" w="full">
              Book a ride
            </Button>
          </NextLink>
          <NextLink href="/talks" passHref>
            <Button variant="secondary" colorScheme="brand" size="sm" w="full">
              Learn more
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Container>
  );
}
