import {
  Stack,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

export default function TopBanner({ title, bgImage, subtitle }) {
  return (
    <Flex
      mt="0"
      w={"full"}
      h={"300"}
      backgroundImage={`url(${bgImage})`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(blackAlpha.900, blackAlpha.300)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {title}
          </Heading>
          <Text color="white">{subtitle}</Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
