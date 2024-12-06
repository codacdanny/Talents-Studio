import { Box } from "@chakra-ui/react";
import "./App.scss";
import Main from "./components/Main";
import AOS from "aos";
import { useEffect } from "react";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.refreshHard();
  }, []);
  return (
    <>
      <Box className="bg">
        <Main />
        <Footer />
      </Box>
    </>
  );
}

export default App;
