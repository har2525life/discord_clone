import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import './sidebar.scss'
import SidebarChannel from './SidebarChannel'
import MicIcon from '@mui/icons-material/Mic'
import HeadsetIcon from '@mui/icons-material/Headset'
import SettingsIcon from '@mui/icons-material/Settings'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarLeft">
                <div className="sidebarIcon">
                    <img src="./logo192.png" alt="" />
                </div>
                <div className="sidebarIcon">
                    <img src="./logo192.png" alt="" />
                </div>
            </div>
            <div className="sidebarRight">
                <div className="sidebarTop">
                    <h3>Discord</h3>
                    <ExpandMoreIcon />
                </div>
                <div className="sidebarChannels">
                    <div className="sidebarChannelsHeader">
                        <div className="sidebarHeader">
                            <ExpandMoreIcon />
                            <h5>プログラミングチャンネル</h5>
                        </div>
                        <AddIcon className="addIcon" />
                    </div>
                    <div className="sidebarChannelList">
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                        <SidebarChannel />
                    </div>
                    <div className="sidebarChannelsFooter">
                        <div className="sidebarAccount">
                            <img src="./icon.png" alt="" />
                            <div className="accountName">
                                <h4>hikaru</h4>
                                <span>#8162</span>
                            </div>
                        </div>
                        <div className="sidebarVoice">
                            <MicIcon className='addIcon' />
                            <HeadsetIcon className='addIcon' />
                            <SettingsIcon className='addIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
