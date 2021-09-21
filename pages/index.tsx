// static content data
// connect forms and social profiles
// image slider on home page
// theme color
// mobile responsiveness
// meta & analytics

import { Container, Flex } from "@chakra-ui/react";
import FeatureOne from "../src/components/featureOne";
import FeatureTwo from "../src/components/featureTwo";
import Hero from "../src/components/hero";
import Layout from "../src/theme/layout";

const IndexPage = () => (
  <Layout title="" description="">
    <Flex
      h="auto"
      py={[0, 0, 20]}
      direction={{ base: "column", md: "column" }}
    >
      <Hero />
      <FeatureOne />
      <FeatureTwo />
    </Flex>
  </Layout>
);

export default IndexPage;
