import React, { useEffect, useState } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AddIcon from '@mui/icons-material/Add'
import './sidebar.scss'
import SidebarChannel from './SidebarChannel'
import MicIcon from '@mui/icons-material/Mic'
import HeadsetIcon from '@mui/icons-material/Headset'
import SettingsIcon from '@mui/icons-material/Settings'
import { auth, db } from '../../firebase'
import { useAppSelector } from '../../app/hools'
import { collection, query, DocumentData, onSnapshot, addDoc } from 'firebase/firestore'
import useCollection from '../../hooks/useCollection'

const Sidebar = () => {
    const user = useAppSelector((state) => state.user.user)
    const { documents } = useCollection('channels')

    const addChannel = async () => {
        let channelName = prompt('新しいチャンネルを作成します。')
        if (channelName) {
            await addDoc(collection(db, 'channels'), {
                channelName
            })
        }
    }

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
                        <AddIcon onClick={addChannel} className="addIcon" />
                    </div>
                    <div className="sidebarChannelList">
                        {documents.map((channel) => (
                            <SidebarChannel channel={channel} id={channel.id} key={channel.id} />
                        ))}
                    </div>
                    <div className="sidebarChannelsFooter">
                        <div className="sidebarAccount">
                            <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
                            <div className="accountName">
                                <h4>{user?.displayName}</h4>
                                <span>{user?.uid.substring(0, 4)}</span>
                            </div>
                        </div>
                        <div className="sidebarVoice">
                            <MicIcon className="addIcon" />
                            <HeadsetIcon className="addIcon" />
                            <SettingsIcon className="addIcon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
