import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Community from './pages/Community';
import Homepage from './Pages/Homepage';
import GameDetail from './service/GameDetail';
import { fetchGames, fetchTeamMembers } from './service/api'; // Import the new API function
import './index.css'; // Ensure this file includes Tailwind directives
import ChatBot from './components/ChatBot';
import FindTeamMember from './service/FindTeamMember'; // Import the new FindTeamMember component


function App() {
  const [games, setGames] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const fetchedGames = await fetchGames();
      setGames(fetchedGames);
    };

    const getTeamMembers = async () => {
      const fetchedMembers = await fetchTeamMembers();
      setTeamMembers(fetchedMembers);
    };

    getGames();
    getTeamMembers();
  }, []);

  return (
    <Router>
      <Navbar /> {/* Include the Navbar here */}
      <ChatBot />

      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/team" element={<FindTeamMember teamMembers={teamMembers} />} /> {/* New route */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

const Home = ({ games }) => (
  <div className="bg-gray-900 min-h-screen text-white p-6">
    <h1 className="text-4xl text-center py-6 font-bold">Gamer's Gate</h1>
    <div className="flex flex-wrap justify-center gap-6">
      {games.map((game) => (
        <Link
          to={`/game/${game.id}`}
          key={game.id}
          className="w-full max-w-sm transition-transform transform hover:scale-105"
        >
          <div
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-48 object-cover rounded-t-lg transition-transform transform hover:scale-110"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 truncate">{game.name}</h2>
              <p className="text-gray-400">Click for details</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default App;
