import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';
import FindTeamMember from '../service/FindTeamMember';

// Define the data for the chart
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Playing Time (hours)',
            data: [10, 15, 12, 18, 20, 25, 30],
            fill: false,
            backgroundColor: '#5161ce',
            borderColor: 'rgba(75, 192, 192, 0.2)',
        },
    ],
};

const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

const rankings = [
    { rank: 1, name: 'Player One' },
    { rank: 2, name: 'Player Two' },
    { rank: 3, name: 'Player Three' },
];

const recentGames = [
    { game: 'Game A', timeAgo: '2 hours ago' },
    { game: 'Game B', timeAgo: '5 hours ago' },
    { game: 'Game C', timeAgo: '1 day ago' },
];

const Dashboard = () => {
    const [addedFriends, setAddedFriends] = useState([]);

    const handleAddFriend = (friend) => {
        setAddedFriends((prevFriends) => [...prevFriends, friend]);
    };

    return (
        <div className="dashboard-container">
            <nav className="sticky top-0 z-50 bg-gray-800 p-4 text-white">
                <h1 className="text-2xl font-bold">Gamer Dashboard</h1>
            </nav>

            <div className="flex">
                <div className="left-panel w-3/4 p-4">
                    <div className="container mb-4">
                        <img src="src/assets/il_fullxfull.5759608293_p54b.webp" alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">
                                <h2>User Profile</h2>
                                <p>Name: John Doe</p>
                                <p>Username: johndoe123</p>
                                <p>Email: johndoe@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <h2 className='dashhead'>Playing Time</h2>
                        <Line data={data} options={options} />
                    </div>

                    <div className="card mb-4">
                        <h2 className='dashhead'>Player Rankings</h2>
                        <ul>
                            {rankings.map((player, index) => (
                                <li key={index}>{player.rank}. {player.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card mb-4">
                        <h2 className='dashhead'>Recently Played Games</h2>
                        <ul>
                            {recentGames.map((game, index) => (
                                <li key={index}>{game.game} - {game.timeAgo}</li>
                            ))}
                        </ul>
                    </div>

                    <FindTeamMember onAddFriend={handleAddFriend} />
                </div>

                <div className='right-panel w-1/4 p-4 bg-gray-900'>
                    <h2 className="text-2xl font-bold mb-4 text-white">Added Friends</h2>
                    {addedFriends.length === 0 ? (
                        <p className="text-gray-400">No friends added yet.</p>
                    ) : (
                        <ul>
                            {addedFriends.map((friend, index) => (
                                <li key={index} className="bg-gray-800 rounded-lg p-4 mb-4 text-white">
                                    <h3 className="text-xl font-semibold">{friend.username}</h3>
                                    <p className="text-gray-400">{friend.description}</p>
                                    <p className="mt-2">Ranking: {friend.ranking}</p>
                                    <p>Games Played: {friend.gamesPlayed}</p>
                                    <p>Favorite Genre: {friend.favoriteGenre}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;