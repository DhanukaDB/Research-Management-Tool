import './message.css';
import React from 'react';

export default function Message({ own }) {
    return (
        <div>
            <div className={own ? "message own" : "Message"}>
                <div className="messageTop">
                    <p className="messageText"></p>
                </div>
                <div className="messageBottom"></div>
            </div>
        </div>
    )
}
