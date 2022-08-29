import { Wrapper, FlexContainer } from "./Styles";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <Wrapper>
      <FlexContainer>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </FlexContainer>
    </Wrapper>
  );
}

export default App;
