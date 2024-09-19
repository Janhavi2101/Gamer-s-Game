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
