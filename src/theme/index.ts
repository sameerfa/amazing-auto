import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
};

const brandRing = {
  _focus: {
    ring: 2,
    ringColor: "brand.500",
  },
  _active: {
    ring: 2,
    ringColor: "brand.500",
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#f5fee5",
        100: "#fbfbbb",
        200: "#f1f781",
        300: "#ffe369",
        400: "#ffe15e",
        500: "#fcdc4e",
        600: "#FEDB41",
        700: "#FCBF29",
        800: "#FEA832",
        900: "#FE9923",
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter, ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            ...brandRing,
            color: mode("brand.50", "gray.800")(props),
            backgroundColor: mode("brand.700", "brand.200")(props),

            _hover: {
              backgroundColor: mode("brand.600", "brand.300")(props),
            },

            _active: {
              backgroundColor: mode("brand.500", "brand.400")(props),
            },
          }),
        },
      },
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "none",
            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox", "Switch"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
