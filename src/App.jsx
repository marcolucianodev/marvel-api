import Header from "./components/Header";
import Container from "./components/Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Events from "./pages/Events";
import Series from "./pages/Series";
import Stories from "./pages/Stories";

const App = () => {

  return (
    <div className="app flex flex-col">
      <BrowserRouter>
        <Header />
        <Container className="container grid m-auto grid-cols">
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/quadrinhos" element={<Comics />} />
            <Route path="/eventos" element={<Events />} />
            <Route path="/series" element={<Series />} />
            <Route path="/historias" element={<Stories />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
