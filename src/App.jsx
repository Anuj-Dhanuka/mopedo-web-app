import { Routes, Route } from "react-router";
import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ContactUsPage from "./pages/ContactUsPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
