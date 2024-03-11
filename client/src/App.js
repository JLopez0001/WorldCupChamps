import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Nav from "./components/nav/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/aboutPage/About.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
