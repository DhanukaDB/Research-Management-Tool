import './chat.css';
import React from 'react';
import SideBar from '../../components/chat/SideBar';
import MessageBox from '../../components/chat/MessageBox';

export default function Chat() {
    return (
        <>
            <div className='chat-container'>
                <SideBar />
            </div>
            <div className='message-container'>
                <MessageBox />
            </div>
        </>
    )
}
