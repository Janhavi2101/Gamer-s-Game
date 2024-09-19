import React, { useState, useEffect } from 'react';
import { getFootballLeagues, checkGame } from '../service/api';

const GameInfo = () => {
  const [leagues, setLeagues] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const leaguesData = await getFootballLeagues();
        setLeagues(leaguesData.response.slice(0, 5)); // Get first 5 leagues

        const gameResult = await checkGame('12345');
        setGameStatus(gameResult);

        setLoading(false);
      } catch (err) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Football Leagues</h2>
      <ul>
        {leagues.map((league) => (
          <li key={league.league.id}>{league.league.name}</li>
        ))}
      </ul>

      <h2>Game Status</h2>
      <pre>{JSON.stringify(gameStatus, null, 2)}</pre>
    </div>
  );
};

export default GameInfo;