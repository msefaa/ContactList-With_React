import {} from "./App.css";
import Contacts from "./componets/Contacts";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container
        mt={15}
        maxW="md"
        border={"1px solid grey"}
        shadow="md"
        p={10}
        my="auto"
        justifyContent={"space-between"}
      >
        <Contacts />
      </Container>
    </ChakraProvider>
  );
}

export default App;
