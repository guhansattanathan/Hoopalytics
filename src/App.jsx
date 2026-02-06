import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopPlayersPage from "./pages/TopPlayersPage";
import PlayerLookupPage from "./pages/PlayerLookupPage";
import RealityCheckPage from "./pages/RealityCheckPage";


function App() {
  
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Top Players Table Page */}
        <Route path="/top-10-players" element={<TopPlayersPage />} />

        {/* Player Lookup Page */}
        <Route path="/player-lookup" element={<PlayerLookupPage />} />

        {/* Reality Check Page */}
        <Route path="/reality-check" element={<RealityCheckPage />} />

      </Routes>
    </Router>
  );
}

export default App
