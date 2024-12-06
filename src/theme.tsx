// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  breakpoints: {
    base: "0em",
    sm: "20em", // 320px
    mini: "31.25em", // 500px
    md: "48em", // 768px
    lg: "60em", // 960px
    xl: "68.75em", // 1100px
    myxl: "76.25em", // 1220px
    // myxxl: "75.85em", // 1310px
    dxl: "87.5em", // 1400px
    ddxl: "106.25em", // 1700px
    dddxl: "125em", // 2000px
    xdxl: "175em", // 2800px
  },

  colors: {
    primaryBlue: "#1E57D1",
    secondaryBlue: "#7197E9",
    background: "#FFFFFF",
    text: "#161515",
    bgGrey: "#D9D9D9",
  },
  fontSizes: {
    xs: ".7rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "1.8rem",
    xxl: "2rem",
    xxxl: "2.5rem",
    xxxxl: "3rem",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    medium: 400,
    bold: 500,
    thick: 700,
  },

  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  customBorderRadius: "30px",
});

export default theme;
