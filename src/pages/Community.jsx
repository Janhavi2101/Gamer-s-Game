import React, { useState } from 'react';
import './Community.css';

const Community = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [activeContent, setActiveContent] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveContent('');
    };

    const handleContentClick = (content) => {
        setActiveTab(content);
        setActiveContent(content);
    };

    const ChatBox = () => {
        const [contacts, setContacts] = useState([
            { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', timestamp: '10:30 AM', profilePic: 'https://via.placeholder.com/50' },
            { id: 2, name: 'Jane Smith', lastMessage: 'Let\'s catch up later.', timestamp: '9:15 AM', profilePic: 'https://via.placeholder.com/50' },
            { id: 3, name: 'Max Johnson', lastMessage: 'Can you send me the report?', timestamp: 'Yesterday', profilePic: 'https://via.placeholder.com/50' }
        ]);
        const [selectedContact, setSelectedContact] = useState(null);
        const [messages, setMessages] = useState([]);
        const [messageInput, setMessageInput] = useState("");

        const handleContactClick = (contact) => {
            setSelectedContact(contact);
            setMessages([

                { id: 1, text: 'Hey,How are you?', timestamp: '10:32 AM' },
                // { id: 2, text: 'Lets catch up later', timestamp: '9:15 AM' },
                // { id: 3, text: 'Can you send me the report', timestamp: 'Yesterday' }

            ]); // Sample messages for demo purposes
        };

        const handleSendMessage = () => {
            if (messageInput.trim()) {
                const newMessage = {
                    id: messages.length + 1,
                    text: messageInput,
                    timestamp: new Date().toLocaleTimeString()
                };
                setMessages([...messages, newMessage]);
                setMessageInput('');
            }
        };

        return (
            <div className="chat-box">
                <header className="chat-header">
                    <input type="text" placeholder="Search or start a new chat" />
                    {/* <button onClick={setContacts}>New Chat</button>  */}
                </header>

                <div className="contact-list">
                    {contacts.map((contact) => (
                        <div key={contact.id} className={`contact-item ${selectedContact && selectedContact.id === contact.id ? 'selected' : ''}`} onClick={() => handleContactClick(contact)}>
                            <img src={contact.profilePic} alt={contact.name} />
                            <div>
                                <h4>{contact.name}</h4>
                                <p>{contact.lastMessage}</p>
                                <span>{contact.timestamp}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="chat-window">
                    {selectedContact && (
                        <>
                            <div className="chat-history">
                                {messages.map((message) => (
                                    <div key={message.id} className="message">
                                        <p>{message.text}</p>
                                        <span>{message.timestamp}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="message-input">
                                <input
                                    type="text"
                                    value={messageInput}
                                    onChange={(e) => setMessageInput(e.target.value)}
                                    placeholder="Type a message..."
                                />
                                <button onClick={handleSendMessage}>Send</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    const forumData = [
        {
            title: 'Installation, Upgrade and Import Support',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#4CAF50',
            icon: '🏠'
        },
        {
            title: 'Feedbacks and Ongoing Enhancements',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#FFEB3B',
            icon: '💬'
        },
        {
            title: 'Feature Requests and Updates',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#9C27B0',
            icon: '📦'
        },
        {
            title: 'Ready to use - Free Resources',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#FF5722',
            icon: '🛠️'
        },
        {
            title: 'AI based Plugins for Productivity',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#03A9F4',
            icon: '🤖'
        },
        {
            title: 'Analytics and Engagement Insights',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#8BC34A',
            icon: '📊'
        },
        {
            title: 'Collaboration and Live Editing',
            subTitle: 'Sub - Forums',
            threads: '5.1K',
            messages: '32.5K',
            color: '#673AB7',
            icon: '📝'
        }
    ];

    return (
        <div className="main-content">
            <div className="forum-intro">
                <h2>Hop in for a Creative Bandwagon. Join the Community.</h2>
                <p>
                    Dynamically reinvent market-driven opportunities, within brand new simple UI/UX interfaces.
                    Implementing both easy and intelligent development ideas for the site.
                </p>
                <button className="intro-button">Sound good! Count me in.</button>
            </div>

            <div className="community-forums">
                <div className="forum-header">
                    <h3>Community Forums</h3>
                    <div className="forum-tabs">
                        <button className={`tab ${activeTab === 'All' ? 'active' : ''}`} onClick={() => handleTabClick('All')}>All</button>
                        <button className={`tab ${activeTab === 'ChatWithFriends' ? 'active' : ''}`} onClick={() => handleContentClick('ChatWithFriends')}>Chat with Friends</button>
                        <button className={`tab ${activeTab === 'FriendsOnline' ? 'active' : ''}`} onClick={() => handleContentClick('FriendsOnline')}>Friends Online</button>
                        <button className={`tab ${activeTab === 'RecentlyPlayed' ? 'active' : ''}`} onClick={() => handleContentClick('RecentlyPlayed')}>Recently Played</button>
                    </div>
                </div>

                <div className={`content-container ${activeContent ? 'slide-left' : ''}`}>
                    {activeTab === 'All' && (
                        <div className="forum-list">
                            {forumData.map((forum, index) => (
                                <div key={index} className="forum-item">
                                    <div className="forum-icon" style={{ backgroundColor: forum.color }}>
                                        {forum.icon}
                                    </div>
                                    <div className="forum-info">
                                        <h4>{forum.title}</h4>
                                        <p>{forum.subTitle}</p>
                                    </div>
                                    <div className="forum-stats">
                                        <p>{forum.threads} Threads</p>
                                        <p>{forum.messages} Messages</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeContent === 'ChatWithFriends' && (
                        <div className="dynamic-content">
                            <div className="chat-with-friends">
                                <h3>Chat with Friends</h3>
                                <ChatBox /> {/* Render the new ChatBox component here */}
                            </div>
                        </div>
                    )}

                    {activeContent === 'FriendsOnline' && (
                        <div className="dynamic-content">
                            <div className="friends-online">
                                <h3>Friends Online</h3>
                                <ul>
                                    <li>John Doe</li>
                                    <li>Jane Smith</li>
                                    <li>Max Johnson</li>
                                    <li>Emily Davis</li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeContent === 'RecentlyPlayed' && (
                        <div className="dynamic-content">
                            <div className="recently-played">
                                <h3>Recently Played Games</h3>
                                <ul>
                                    <li>Game A - Last played: 2 hours ago</li>
                                    <li>Game B - Last played: 1 day ago</li>
                                    <li>Game C - Last played: 3 days ago</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Community;
