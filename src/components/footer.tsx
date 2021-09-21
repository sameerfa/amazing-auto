import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Instagram, Twitter, YouTube, Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const year = new Date();
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© {year.getFullYear()} Amazing Auto. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Instagram"} href={"#"}>
            <Instagram />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={"#"}>
            <LinkedIn />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"#"}>
            <Twitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <YouTube />
          </SocialButton>
          <SocialButton label={"Facebook"} href={"#"}>
            <Facebook />
          </SocialButton>
          <SocialButton label={"GitHub"} href={"#"}>
            <GitHub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
