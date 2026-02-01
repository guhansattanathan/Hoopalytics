import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopPlayersPage from "./pages/TopPlayersPage";


function App() {
  
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Top Players Table Page */}
        <Route path="/top-10-players" element={<TopPlayersPage />} />

      </Routes>
    </Router>
  );
}

export default App
