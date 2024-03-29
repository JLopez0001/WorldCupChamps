import "./App.css";
import Footer from "./components/footer/Footer.jsx";
import Nav from "./components/nav/Nav.jsx";
import { Routes, Route } from "react-router-dom";
import About from "./pages/aboutPage/About.jsx";
import Teams from "./pages/homePage/Teams.jsx";
import TeamDetail from "./pages/teamDetailPage/TeamDetail.jsx";
import TeamEdit from "./pages/editPage/TeamEdit.jsx";
import TeamCreate from "./pages/createTeamPage/TeamCreate.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<TeamDetail />} />
        <Route path="/teams/:id/edit" element={<TeamEdit />} />
        <Route path="/create-team" element={<TeamCreate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
