import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TopPlayersPage from "./pages/TopPlayersPage";
import PlayerLookupPage from "./pages/PlayerLookupPage";
import RealityCheckPage from "./pages/RealityCheckPage";
import RegisterPage from "./pages/RegisterPage";
import { useState } from "react";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <LandingPage
              isLoggedIn={isLoggedIn}
              name={name}
              setIsLoggedIn={setIsLoggedIn}
              setName={setName}
              setEmail={setEmail}
            />
          }
        />

        {/* Top Players Table Page */}
        <Route path="/top-10-players" element={<TopPlayersPage />} />

        {/* Player Lookup Page */}
        <Route path="/player-lookup" element={<PlayerLookupPage />} />

        {/* Reality Check Page */}
        <Route path="/reality-check" element={<RealityCheckPage />} />

        {/* Registration Page */}
        <Route
          path="/register"
          element={
            <RegisterPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setName={setName}
              setEmail={setEmail}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App
