import axios from 'axios';

// Function to fetch games
export const fetchGames = async () => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=e90457217cb24ab1b6bd8e6122322c23`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
};

// Function to fetch game details by ID
export const fetchGameDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=e90457217cb24ab1b6bd8e6122322c23`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching game details:', error);
    throw error;
  }
};

// Function to fetch team members (mock data)
export const fetchTeamMembers = async () => {
  // Simulate fetching data from an API


  // Simulate fetching data from an API
  return [
    {
      id: 1,
      username: "GamerOne",
      avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=G1",
      description: "Experienced FPS player with a knack for strategy.",
      ranking: "Diamond",
      gamesPlayed: 120,
      favoriteGenre: "FPS",
    },
    {
      id: 2,
      username: "PlayerTwo",
      avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=G2",
      description: "Casual gamer with a love for RPGs and adventure games.",
      ranking: "Platinum",
      gamesPlayed: 85,
      favoriteGenre: "RPG",
    },
    {
      id: 3,
      username: "ShadowMaster",
      avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=G3",
      description: "Stealth gamer who excels in tactical espionage.",
      ranking: "Gold",
      gamesPlayed: 140,
      favoriteGenre: "Stealth",
    },
    {
      id: 4,
      username: "Speedster",
      avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=G4",
      description: "Fast-paced racing enthusiast, always aiming for the top spot.",
      ranking: "Silver",
      gamesPlayed: 200,
      favoriteGenre: "Racing",
    },
    {
      id: 5,
      username: "TankLord",
      avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=G5",
      description: "Loves playing tank roles in MOBAs and MMORPGs.",
      ranking: "Platinum",
      gamesPlayed: 95,
      favoriteGenre: "MOBA",
    },
    {
      id: 6,
      username: "SniperQueen",
      avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=G6",
      description: "Precision shooter with a deadly aim.",
      ranking: "Diamond",
      gamesPlayed: 160,
      favoriteGenre: "Shooter",
    },
    {
      id: 7,
      username: "Wizardry",
      avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=G7",
      description: "Magic and fantasy lover, always casting spells.",
      ranking: "Gold",
      gamesPlayed: 180,
      favoriteGenre: "Fantasy",
    },
    {
      id: 8,
      username: "StrategistPro",
      avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=G8",
      description: "Master of strategy games, enjoys complex puzzles and challenges.",
      ranking: "Diamond",
      gamesPlayed: 220,
      favoriteGenre: "Strategy",
    },
    {
      id: 9,
      username: "RogueKnight",
      avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=G9",
      description: "Solo player with a love for rogue-likes and dungeon crawlers.",
      ranking: "Silver",
      gamesPlayed: 110,
      favoriteGenre: "Rogue-like",
    },
    {
      id: 10,
      username: "AssassinX",
      avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=G10",
      description: "Stealth and agility define this lethal assassin.",
      ranking: "Gold",
      gamesPlayed: 130,
      favoriteGenre: "Action",
    },
    {
      id: 11,
      username: "HealerBae",
      avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=G11",
      description: "Support main with a passion for keeping the team alive.",
      ranking: "Platinum",
      gamesPlayed: 175,
      favoriteGenre: "MMORPG",
    },
    {
      id: 12,
      username: "CyberSamurai",
      avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=G12",
      description: "Futuristic warrior with a blend of tech and swordplay.",
      ranking: "Diamond",
      gamesPlayed: 210,
      favoriteGenre: "Sci-Fi",
    },
    {
      id: 13,
      username: "NatureLover",
      avatar: "https://via.placeholder.com/150/FF5733/FFFFFF?text=G13",
      description: "Explores open-world games with a focus on nature and survival.",
      ranking: "Gold",
      gamesPlayed: 150,
      favoriteGenre: "Survival",
    },
    {
      id: 14,
      username: "GlitchHunter",
      avatar: "https://via.placeholder.com/150/33FF57/FFFFFF?text=G14",
      description: "Expert at finding bugs and glitches in any game.",
      ranking: "Platinum",
      gamesPlayed: 130,
      favoriteGenre: "Sandbox",
    },
    {
      id: 15,
      username: "ArcadeMaster",
      avatar: "https://via.placeholder.com/150/3357FF/FFFFFF?text=G15",
      description: "Old-school arcade gamer with a competitive edge.",
      ranking: "Silver",
      gamesPlayed: 190,
      favoriteGenre: "Arcade",
    },

  ];
};

// Add more members as needed

