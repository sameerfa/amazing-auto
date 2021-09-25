// image slider on home page
// theme color and font sizes
// mobile responsiveness
// meta & analytics

import { Flex } from "@chakra-ui/react";
import FeatureOne from "../src/components/featureOne";
import FeatureTwo from "../src/components/featureTwo";
import Hero from "../src/components/hero";
import Layout from "../src/theme/layout";

const IndexPage = () => (
  <Layout title="" description="">
    <Flex
      w="full"
      h="auto"
      p={100}
      spacing={10}
      direction="column"
      alignItems="flex-start"
    >
      <Hero />
      <FeatureOne />
      <FeatureTwo />
    </Flex>
  </Layout>
);

export default IndexPage;
