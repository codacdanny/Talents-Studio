import { Box } from "@chakra-ui/react";
import "./App.scss";
import Hero from "./components/Hero";
import Main from "./components/Main";
import AOS from "aos";
import { useEffect } from "react";
function App() {
  AOS.init({
    duration: 1100, // Animation duration in milliseconds
  });
  useEffect(() => {
    AOS.refreshHard();
  }, []);
  return (
    <>
      <Box className="bg">
        <Hero />
        <Main />
       
      </Box>
    </>
  );
}

export default App;
