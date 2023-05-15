import React from 'react'
import './ChatHeader.scss'

import NotificationsIcon from '@mui/icons-material/Notifications'
import PushPinIcon from '@mui/icons-material/PushPin'
import PersonIcon from '@mui/icons-material/Person'
import SearchIcon from '@mui/icons-material/Search'
import SendIcon from '@mui/icons-material/Send'
import HelpIcon from '@mui/icons-material/Help'

type ChannelProps = {
    channelName: string | null
}

const ChatHeader: React.FC<ChannelProps> = ({ channelName }) => {
    return (
        <div className="chatHeader">
            <div className="chatHeaderTitle">
                <h4>
                    <span className="chatHeaderHash">#</span>
                    {channelName}
                </h4>
            </div>
            <div className="chatHeaderIcons">
                <NotificationsIcon />
                <PushPinIcon />
                <PersonIcon />
                <div className="chatHeaderSearch">
                    <input type="text" placeholder="検索" />
                    <SearchIcon />
                </div>
                <SendIcon />
                <HelpIcon />
            </div>
        </div>
    )
}

export default ChatHeader
