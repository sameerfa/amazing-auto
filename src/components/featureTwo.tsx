import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import data from "../../utils/data";

export default function FeatureTwo() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"full"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>What Makes It Awesome</Heading>
        <Text fontSize={"md"}>
          Our auto drivers usually get a bad rep for haggling and charging us
          way over the meter. While some of them still don’t go by the meter,
          there is Anna Durai who’d do anything to keep his customers happy.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
          {data.features.map((feature) => (
            <HStack key={feature.id} align={"top"}>
              <Box color={"brand.600"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
