import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Search, AttachMoney, Poll } from "@material-ui/icons";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function FeatureOne() {
  return (
    <Container maxW="full" py={12} mb={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={useColorModeValue("brand.900", "brand.200")}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("brand.200", "brand.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Made in India
          </Text>
          <Heading>What is Amazing Auto?</Heading>
          <Text fontSize={"md"}>
            A Hi-tech auto rickshaw that provides a first class flight
            experience for just &#8377; 15 a ride. Annadurai's core belief makes
            Amazing Auto a successful business.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={Poll} color={"yellow.500"} w={3} h={3} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Customer Satisfaction"}
            />
            <Feature
              icon={<Icon as={AttachMoney} color={"green.500"} w={3} h={3} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Customer Loyalty"}
            />
            <Feature
              icon={<Icon as={Search} color={"purple.500"} w={3} h={3} />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Customer Feedback"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            alt={"feature image"}
            src="/images/feature-one.jpg"
            rounded="base"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
