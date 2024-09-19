const GameCard = ({ game }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={game.cover.url} alt={game.name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{game.name}</div>
        </div>
      </div>
    );
  };
  
  export default GameCard;
  