import React, { useEffect } from 'react';

const ChatBot = () => {
    useEffect(() => {
        // This ensures the script only runs once after the component is mounted
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        script.onload = () => {
            window._be = window._be || {};
            window._be.id = "66d0ac54e7ac0c0007c74202";
        };

        document.body.appendChild(script);

        return () => {
            // Cleanup the script when the component unmounts (optional)
            document.body.removeChild(script);
        };
    }, []);

    return (
        <noscript>
            You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a>
        </noscript>
    );
};

export default ChatBot;
