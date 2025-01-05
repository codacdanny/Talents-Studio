import { Box } from "@chakra-ui/react";
import "./App.scss";
import Main from "./components/Main";
import AOS from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.refreshHard();
  }, []);
  return (
    <>
      <Box className="bg">
        <Main />
      </Box>
    </>
  );
}

export default App;
