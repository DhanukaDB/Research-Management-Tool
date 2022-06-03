import './chat.css';
import React from 'react';
import ChatDrawer from '../../components/chat/ChatDrawer';

export default function Chat() {
    return (
        <>
            <div className='chat-container'>
                <ChatDrawer />
            </div>
        </>
    )
}
