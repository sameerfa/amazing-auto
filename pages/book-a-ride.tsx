import {
  Flex,
  VStack,
  SimpleGrid,
  GridItem,
  Button,
  FormControl,
  FormLabel,
  Input,
  useBreakpointValue,
} from "@chakra-ui/react";
import { WhatsApp } from "@material-ui/icons";
import { useState } from "react";
import TopBanner from "../src/components/topBanner";
import Layout from "../src/theme/layout";

export default function BookARide() {
  const curDate = new Date();
  const today =
    curDate.getFullYear() + "-" + curDate.getMonth() + "-" + curDate.getDate();
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);

  const handleSubmit = () => {
    const message =
      "New Ride from " +
      name +
      " | City: " +
      city +
      " | Time: " +
      time +
      " | Date: " +
      date +
      " | Pickup :" +
      pickup +
      " | Drop: " +
      drop;
    window.open(
      "https://api.whatsapp.com/send?phone=919884123413" + "&text=" + message
    );
  };

  return (
    <Layout
      title="Book a Ride"
      description="Take a Ride in Anna Durai's Amazing Auto. Fully-loaded from Masks to Magazines. Send your details now, 
    I will be in touch with you based on trip availability."
    >
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner
          title="Book a ride"
          bgImage="/images/book-a-ride.jpg"
          subtitle="Take a Ride in Anna Durai's Amazing Auto. Fully-loaded from Masks to Magazines. Send your details now, 
          I will be in touch with you based on trip availability."
        />
        <VStack
          w="full"
          h="full"
          p={[10, 0, 20]}
          spacing={10}
          alignItems="flex-start"
        >
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Pick Up</FormLabel>
                <Input
                  placeholder="Pick Up Location"
                  onChange={(e) => setPickup(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Drop</FormLabel>
                <Input
                  placeholder="Drop Location"
                  onChange={(e) => setDrop(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  min={today}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Time</FormLabel>
                <Input type="time" onChange={(e) => setTime(e.target.value)} />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Your Name</FormLabel>
                <Input
                  placeholder="Anna Durai"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Your City</FormLabel>
                <Input
                  placeholder="Chennai"
                  onChange={(e) => setCity(e.target.value)}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                variant="primary"
                colorScheme="brand"
                size="lg"
                w="full"
                onClick={handleSubmit}
              >
                <WhatsApp />
                &nbsp; Book Now!
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Layout>
  );
}
