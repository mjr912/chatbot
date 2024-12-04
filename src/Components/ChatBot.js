
import React, { useState } from 'react';
import axios from 'axios';
import './ChatBot.css';

const ChatPrompt = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handlePromptChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSendPrompt = async () => {
        if (!prompt.trim()) {
            return; 
        }

        try {
            const result = await axios.post('http://172.31.134.143:30002/api/Chat', { userInput: prompt });
            setResponse(result.data.chatbotResponse);
        } catch (error) {
            console.error('Error sending prompt to chatbot API:', error);
        }
    };

    return (
        <div className="prompt-container">
            <h1 className="prompt-title">Chatbot Prompt</h1>
            <div className="textarea-container">
                <textarea
                    value={prompt}
                    onChange={handlePromptChange}
                    className="prompt-textarea"
                    placeholder="Enter your prompt here..."
                />
                <textarea
                    value={response}
                    readOnly
                    className="response-textarea"
                    placeholder="AI response will appear here..."
                />
            </div>
            <button onClick={handleSendPrompt} className="send-button">
                Send
            </button>
        </div>
    );
};

export default ChatPrompt;
