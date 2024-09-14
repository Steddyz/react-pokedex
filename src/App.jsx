import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import PokedexPage from "./pages/PokedexPage/PokedexPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
