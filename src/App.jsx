import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopPlayersTable from "./components/TopPlayersTable"


function App() {
  
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Top Players Table Page */}
        <Route path="/top-players" element={<TopPlayersTable />} />

      </Routes>
    </Router>
  );
}

export default App
