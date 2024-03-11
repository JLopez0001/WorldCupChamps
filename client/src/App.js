import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Nav from "./components/nav/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/aboutPage/About.jsx";
import Teams from "./pages/homePage/Teams.jsx";
import TeamDetail from "./pages/teamDetailPage/TeamDetail.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
