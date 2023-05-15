import React, { useState, useEffect } from 'react'
import './home.scss'
import ChatHeader from './ChatHeader'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import GifIcon from '@mui/icons-material/Gif'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import ChatMessage from './ChatMessage'
import { useAppSelector } from '../../app/hools'
import {
    CollectionReference,
    Timestamp,
    DocumentData,
    DocumentReference,
    orderBy,
    addDoc,
    collection,
    onSnapshot,
    query,
    serverTimestamp,
    Query
} from 'firebase/firestore'
import { db } from '../../firebase'
import useSubCollection from '../../hooks/useSubCollection'

type Channel = {
    timestamp: Timestamp
    message: string
    user: {
        uid: string
        photo: string
        email: string
        displayName: string
    }
}

const Home = () => {
    const channelName = useAppSelector((state) => state.channel.channelName)
    const channelId = useAppSelector((state) => state.channel.channelId)
    const user = useAppSelector((state) => state.user.user)
    const {subDocuments: message} = useSubCollection('channels', "message")

    const [inputText, setInputText] = useState('')

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const collectionRef: CollectionReference<DocumentData> = collection(
            db,
            'channels',
            String(channelId),
            'message'
        )

        await addDoc(collectionRef, {
            message: inputText,
            timestamp: serverTimestamp(),
            user: user
        })
        setInputText('')
    }



    return (
        <div className="home">
            <ChatHeader channelName={channelName} />
            <div className="chatMessage">
                {message.map((message, index) => {
                    return (
                        <ChatMessage
                            key={index}
                            message={message.message}
                            timestamp={message.timestamp}
                            user={message.user}
                        />
                    )
                })}
            </div>
            <div className="chatInput">
                <AddCircleOutlineIcon />
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => sendMessage(e)}>
                    <input
                        type="text"
                        value={inputText}
                        placeholder="Udemyへメッセージ送信"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
                    />
                    <button type="submit" className="chatInputButton">
                        送信
                    </button>
                </form>

                <div className="chatInputIcons">
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Home
