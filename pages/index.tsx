import { Flex } from "@chakra-ui/react";
import FeatureOne from "../src/components/featureOne";
import FeatureTwo from "../src/components/featureTwo";
import Hero from "../src/components/hero";
import Slider from "../src/components/slider";
import Layout from "../src/theme/layout";

const IndexPage = () => (
  <Layout
    title=""
    description="Chennai-based Anna Durai aka Auto Anna has several lessons to impart
  in customer service and loyalty. He talks about his humble beginnings,
  how his life plan changed, and how he chose to carry on and put all
  his passion into ensuring the best experience for his passengers."
  >
    <Flex
      w="full"
      h="auto"
      mt={10}
      p={[0, 100]}
      spacing={10}
      direction="column"
      alignItems="flex-start"
    >
      <Hero />
      <Slider />
      <FeatureOne />
      <FeatureTwo />
    </Flex>
  </Layout>
);

export default IndexPage;
