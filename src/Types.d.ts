type InitialUserState = {
    user: null | {
        uid: string,
        photo: string,
        email: string,
        displayName: string
    }
}

interface InitialChannelState {
    channelId: string | null;
    channelName: string | null;
}