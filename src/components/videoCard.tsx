import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function VideoCard({ url, title, tag }) {
  const videoSrc = `https://www.youtube.com/embed/${url}`;
  return (
    <Center py={6}>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <iframe
            src={videoSrc}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
        <Stack>
          <Text
            color={"brand.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {tag}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"md"}
            fontFamily={"body"}
          >
            {title}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
