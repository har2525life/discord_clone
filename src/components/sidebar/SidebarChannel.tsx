import React from 'react'
import './sidebarChannel.scss'
import { DocumentData } from 'firebase/firestore'
import { useAppDispatch } from '../../app/hools'
import { setChannelInfo } from '../../features/channelSlice'

type Props = {
    id : string
    channel: DocumentData
}

const SidebarChannel: React.FC<Props> = ({ channel, id }) => {
    const dispatch = useAppDispatch()

    const selectedChannel = () => {
        dispatch(setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName
        }))
    }
    return (
        <div className="channels" onClick={selectedChannel}>
            <h4>
                <span className="sidebarChannelsHash">#</span> {channel.channel.channelName}
            </h4>
        </div>
    )
}

export default SidebarChannel
