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
import data from "../utils/data";

export default function Talks() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Layout
      title="Talks"
      description="Watch Anna Durai's Talk & Interviews. A Class 12 dropout, 
    whose passion for his professionalism and his drive to serve his customers in the best possible way. 
    In his desire to give his customers an experience to remember, it brought him great fame and put him 
    in the spotlight and led to him earning followers all around the globe."
    >
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner
          title="Talks"
          bgImage="/images/talks.jpg"
          subtitle="Watch Anna Durai's Talk & Interviews. A Class 12 dropout, 
          whose passion for his professionalism and his drive to serve his customers in the best possible way. 
          In his desire to give his customers an experience to remember, it brought him great fame and put him 
          in the spotlight and led to him earning followers all around the globe."
        />
        <Flex
          h="auto"
          py={0}
          direction={{ base: "column-reverse", md: "row" }}
          flexWrap="wrap"
        >
          <VStack
            w="full"
            h="full"
            p={[10, 100]}
            spacing={10}
            alignItems="flex-start"
          >
            <SimpleGrid columns={[1, 3]} columnGap={6} rowGap={6} w="full">
              {data.talks.map((video) => (
                <GridItem key={video.id} colSpan={colSpan}>
                  <VideoCard
                    url={video.url}
                    title={video.title}
                    tag={video.tag}
                  />
                </GridItem>
              ))}
            </SimpleGrid>
          </VStack>
        </Flex>
      </Flex>
    </Layout>
  );
}
