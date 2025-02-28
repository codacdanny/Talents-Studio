import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from "aos";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.tsx";

// import { Provider } from "@/components/ui/provider

AOS.init({
  duration: 500, // Animation duration in milliseconds
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
