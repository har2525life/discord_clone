import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hools'
import { CollectionReference, Query, DocumentData, collection, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

type Channels = {
    timestamp: Timestamp
    message: string
    user: {
        uid: string
        photo: string
        email: string
        displayName: string
    }
}

const useSubCollection = (collectionName: string, subCollectionName:string) => {
    const [subDocuments, setSubDocuments] = useState<Channels[]>([])
    const channelId = useAppSelector((state) => state.channel.channelId)

    useEffect(() => {
        let collectionRef: Query<DocumentData> = query(
            collection(db, 'channels', String(channelId), 'message'),
            orderBy('timestamp', 'desc')
        )
        onSnapshot(collectionRef, (querySnapshot) => {
            const results: Channels[] = []
            querySnapshot.forEach((doc) => {
                results.push({
                    timestamp: doc.data().timestamp,
                    message: doc.data().message,
                    user: doc.data().user
                })
            })
            setSubDocuments(results)
        })
    }, [channelId])

    return { subDocuments }
}

export default useSubCollection
