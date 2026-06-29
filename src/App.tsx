import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Edicao from "./pages/Edicao/Edicao";
import Mais from "./pages/Mais/Mais";
import Podcasts from "./pages/Podcasts/Podcasts";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Edicao />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/mais" element={<Mais />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
