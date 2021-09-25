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
    <Layout
      title="Press"
      description="Annadurai owns and drives a ‘share auto’ which can carry five to six people, and that’s the only common thing his vehicle shares with other rickshaws. Plying on the Old Mahabalipuram Road (OMR), where most of the IT companies are located, he gained fame overnight, with some of the amenities he provides to his passengers in his rickshaw."
    >
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner
          title="Press"
          bgImage="/images/press.jpg"
          subtitle="Annadurai owns and drives a ‘share auto’ which can carry five to six people, and that’s the only common thing his vehicle shares with other rickshaws. Plying on the Old Mahabalipuram Road (OMR), where most of the IT companies are located, he gained fame overnight, with some of the amenities he provides to his passengers in his rickshaw."
        />
        <QuoteCard />
      </Flex>
    </Layout>
  );
}
