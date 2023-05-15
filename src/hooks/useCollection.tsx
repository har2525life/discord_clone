import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hools'
import { CollectionReference, Query, DocumentData, collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase'

type Channel = {
    id: string
    channel: DocumentData
}

const useCollection = (data: string) => {
    const [documents, setDocuments] = useState<Channel[]>([])
    const collectionRef: Query<DocumentData> = query(collection(db, 'channels'))
    useEffect(() => {
        onSnapshot(collectionRef, (querySnapshot) => {
            const channelsResults: Channel[] = []
            querySnapshot.forEach((doc) => {
                channelsResults.push({
                    id: doc.id,
                    channel: doc.data()
                })
            })
            setDocuments(channelsResults)
        })
    }, [])
    return { documents}
}

export default useCollection
