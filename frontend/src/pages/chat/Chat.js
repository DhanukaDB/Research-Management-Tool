import './chat.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from '../../components/chat/Message';

export default function Chat() {

    const [newMessages, setNewMessages] = ("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const message = {
            message: newMessages
        };
        try {
            const response = await axios.post("/messages", message);
            setNewMessages([...message, res.data]);
            setNewMessages("");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message own={true} />
                        <Message />
                        <Message />
                        <Message />
                        <Message />
                        <Message own={true} />
                        <Message own={true} />
                    </div>
                    <div className="chatBoxBottom" style={{ minHeight: "300px" }}>
                        <textarea
                            className="chatMessageInput"
                            placeholder="write something..."
                            onChange={(e) => setNewMessages(e.target.value)} value={newMessages}
                        ></textarea>
                        &nbsp;
                        &nbsp;
                        <button className="chatSubmitButton" onClick={handleSendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
