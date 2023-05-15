import React, { useEffect } from 'react'
import './App.scss'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import { useSelector } from 'react-redux'
import Login from './components/loigin/Login'
import { useAppDispatch, useAppSelector } from './app/hools'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'

function App() {
    const user = useAppSelector((state) => state.user.user)
    // const user = null
    console.log(user)

    const dispatch = useAppDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)
            if (user) {
                dispatch(login({
                  uid: user.uid,
                  photo: user.photoURL,
                  email: user.email,
                  displayName: user.displayName 
                }))
            } else {
              dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="App">
            {user ? (
                <>
                    <Sidebar />
                    <Home />
                </>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default App
