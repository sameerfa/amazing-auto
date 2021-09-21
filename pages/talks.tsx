import {
  Flex,
  GridItem,
  SimpleGrid,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import TopBanner from "../src/components/topBanner";
import VideoCard from "../src/components/videoCard";
import Layout from "../src/theme/layout";

export default function Talks() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Layout title="Talks" description="">
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner />
        <Flex
          h="auto"
          py={[0, 10, 20]}
          direction={{ base: "column-reverse", md: "row" }}
          flexWrap="wrap"
        >
          <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <SimpleGrid columns={3} columnGap={3} rowGap={6} w="full">
              <GridItem colSpan={colSpan}>
                <VideoCard />
              </GridItem>
              <GridItem colSpan={colSpan}>
                <VideoCard />
              </GridItem>
              <GridItem colSpan={colSpan}>
                <VideoCard />
              </GridItem>
              <GridItem colSpan={colSpan}>
                <VideoCard />
              </GridItem>
              <GridItem colSpan={colSpan}>
                <VideoCard />
              </GridItem>
              <GridItem colSpan={colSpan}>
                <VideoCard />
              </GridItem>
            </SimpleGrid>
          </VStack>
        </Flex>
      </Flex>
    </Layout>
  );
}
