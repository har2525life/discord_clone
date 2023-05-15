import React from 'react'
import './ChatMessage.scss'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Timestamp } from 'firebase/firestore'
import { timeStamp } from 'console'
import { Avatar } from '@mui/material'

type MessageProps = {
    timestamp: Timestamp
    message: string
    user: {
        uid: string
        photo: string
        email: string
        displayName: string
    }
}

const ChatMessage: React.FC<MessageProps> = ({ message, timestamp, user }) => {
    return (
        <div className="message">
            <Avatar src={user?.photo} />
            <div className="messageInfo">
                <h4>
                    {user?.displayName}
                    <span className="messageTimestamp">{new Date(timestamp?.toDate()).toLocaleString()}</span>
                </h4>

                <p>{message}</p>
            </div>
        </div>
    )
}

export default ChatMessage
