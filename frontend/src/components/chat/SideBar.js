import './sideBar.css';
import React from 'react';
import ChatContacts from './ChatContacts';

export default function SideBar() {
    return (
        <div className='sidebar-container'>
            <div className='chat-box-heading'>Group: SE301_2</div>
            <ChatContacts />
        </div>
    )
}
