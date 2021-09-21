import {
  Flex,
  GridItem,
  SimpleGrid,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import QuoteCard from "../src/components/quoteCard";
import TopBanner from "../src/components/topBanner";
import Layout from "../src/theme/layout";

export default function Press() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Layout title="Press" description="">
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner />
        <QuoteCard />
      </Flex>
    </Layout>
  );
}
