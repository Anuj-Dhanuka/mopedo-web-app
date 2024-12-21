import styled from "styled-components";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <HomePage />
      <Footer />
    </AppContainer>
  );
}

export default App;
