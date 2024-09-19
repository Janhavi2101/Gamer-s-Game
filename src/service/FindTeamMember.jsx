import React, { useEffect, useState } from 'react';
import { fetchTeamMembers } from "../service/api";

const FindTeamMember = ({ onAddFriend }) => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addedFriends, setAddedFriends] = useState(new Set());

    useEffect(() => {
        const getTeamMembers = async () => {
            try {
                const members = await fetchTeamMembers();
                setTeamMembers(members);
            } catch (error) {
                console.error('Error fetching team members:', error);
            } finally {
                setLoading(false);
            }
        };

        getTeamMembers();
    }, []);

    const handleAddFriend = (member) => {
        if (!addedFriends.has(member.id)) {
            onAddFriend(member);
            setAddedFriends(new Set(addedFriends).add(member.id));
        }
    };

    if (loading) return <div className="text-white text-center">Loading...</div>;

    return (
        <div className="bg-gray-900 text-white p-6">
            <h1 className="text-4xl font-bold mb-6 text-center">Find Your Team Members</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member) => (
                    <div key={member.id} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                        <img
                            src={member.avatar}
                            alt={member.username}
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-bold text-center mb-2">{member.username}</h2>
                        <p className="text-center text-gray-400 mb-4">{member.description}</p>
                        <div className="flex justify-between items-center px-4 mt-4">
                            <div>
                                <p className="text-lg font-semibold">Ranking: {member.ranking}</p>
                                <p className="text-lg font-semibold">Games Played: {member.gamesPlayed}</p>
                                <p className="text-lg font-semibold">Favorite Genre: {member.favoriteGenre}</p>
                            </div>
                            <button
                                className={`font-bold py-2 px-6 rounded-full transition duration-300 ${addedFriends.has(member.id)
                                        ? 'bg-green-500 text-white cursor-not-allowed'
                                        : 'bg-blue-500 text-white hover:bg-blue-700'
                                    }`}
                                onClick={() => handleAddFriend(member)}
                                disabled={addedFriends.has(member.id)}
                            >
                                {addedFriends.has(member.id) ? 'Added' : 'Add Friend'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FindTeamMember;