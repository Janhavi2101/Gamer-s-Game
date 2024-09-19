import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGameDetail } from "../service/api"; // Create this function in your api file

const GameDetail = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGameDetail = async () => {
      try {
        const gameDetail = await fetchGameDetail(id);
        setGame(gameDetail);
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setLoading(false);
      }
    };

    getGameDetail();
  }, [id]);

  if (loading) return <div className="text-white text-center">Loading...</div>;

  return (
    <div className="bg-black min-h-screen text-white p-6">
      <div className="container mx-auto">
        {game ? (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
            <div className="flex">
              <img
                src={game.background_image}
                alt={game.name}
                className="w-64 h-64 object-cover rounded-lg shadow-lg mr-6"
              />
              <div>
                <p className="text-lg mb-4">{game.description}</p>
                <p className="text-xl font-semibold">Release Date: {game.released}</p>
                <p className="text-xl font-semibold">Rating: {game.rating}</p>
                <p className="text-xl font-semibold">Genres: {game.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">Game not found</p>
        )}
      </div>
    </div>
  );
};

export default GameDetail;
