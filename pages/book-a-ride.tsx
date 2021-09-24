import {
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Select,
  Checkbox,
  Button,
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import TopBanner from "../src/components/topBanner";
import Layout from "../src/theme/layout";

export default function BookARide() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Layout title="Book a Ride" description="">
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner
          title="Book a ride"
          bgImage=""
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minus aut asperiores, dolorem qui, distinctio molestias consequuntur quisquam dolore excepturi eaque. Incidunt excepturi porro id magni non delectus totam vero."
        />
        <VStack w="full" h="full" p={100} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your details</Heading>
            <Text>If you already have an account, click here to log in.</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="John" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Doe" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Blvd. Broken Dreams 21" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="San Franciso" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option></option>
                  <option value="usa">United States of America</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Ship to billing address.</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button variant="primary" colorScheme="brand" size="lg" w="full">
                Place Order
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Layout>
  );
}
