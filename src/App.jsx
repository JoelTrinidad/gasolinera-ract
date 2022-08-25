import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Surtidor from "./pages/Surtidor"
import Product from "./pages/Product"
import MethodPayment from "./pages/MethodPayment"
import Quantity from "./pages/Quantity"
import Resume from "./pages/Resume"
import "./App.css";

function App() {
  return (
    <Box w="100%" h="100vh">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surtidor" element={<Surtidor />} />
          <Route path="/product" element={<Product />} />
          <Route path="/method-payment" element={<MethodPayment />} />
          <Route path="/quantity" element={<Quantity />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
