import {
  Flex,
  VStack,
  SimpleGrid,
  GridItem,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Phone,
  Twitter,
  WhatsApp,
} from "@material-ui/icons";
import TopBanner from "../src/components/topBanner";
import Layout from "../src/theme/layout";
import NextLink from "next/link";

export default function GetInTouch() {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Layout title="Get in touch" description="">
      <Flex
        h="auto"
        py={[0, 0, 0]}
        direction={{ base: "column", md: "column" }}
      >
        <TopBanner
          title="Get in touch"
          bgImage="/images/get-in-touch.jpg"
          subtitle="I'm Annadurai, an Auto Driver, Social Entrepreneur, 7 Time TEDx Speaker, Motivational Speaker and Corporate Trainer. Get in touch if you want to meet up."
        />
        <VStack w="full" h="full" p={100} spacing={10} alignItems="flex-start">
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <NextLink
                href="https://api.whatsapp.com/send?phone=919884123413"
                passHref
              >
                <Button w="full" colorScheme="brand">
                  <WhatsApp />
                  &nbsp;Whatsapp
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <NextLink href="tel:+919884123413" passHref>
                <Button w="full" colorScheme="brand">
                  <Phone />
                  &nbsp;Call
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <NextLink href="https://www.facebook.com/autoanna" passHref>
                <Button w="full" colorScheme="brand">
                  <Facebook />
                  &nbsp;Facebook
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <NextLink
                href="https://twitter.com/amazingauto5758?lang=en"
                passHref
              >
                <Button w="full" colorScheme="brand">
                  <Twitter />
                  &nbsp;Twitter
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <NextLink
                href="https://www.linkedin.com/in/anna-durai-ba92727b/?originalSubdomain=in"
                passHref
              >
                <Button w="full" colorScheme="brand">
                  <LinkedIn />
                  &nbsp;LinkedIn
                </Button>
              </NextLink>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <NextLink
                href="https://www.instagram.com/auto_anna/?hl=en"
                passHref
              >
                <Button w="full" colorScheme="brand">
                  <Instagram />
                  &nbsp;Instagram
                </Button>
              </NextLink>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
    </Layout>
  );
}
