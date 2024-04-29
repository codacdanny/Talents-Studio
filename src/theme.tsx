import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "320px",
  mini: "500px",
  md: "768px",
  lg: "960px",
  xl: "1100px",
  myxl: "1220px",
  "2xl": "1400px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });
export default theme;
