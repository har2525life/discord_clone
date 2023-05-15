import React from 'react'
import './login.scss'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'

import LockIcon from '@mui/icons-material/Lock'
import { Button } from '@mui/material'

const Login = () => {
    const signIn = () => {
        signInWithPopup(auth, provider)
    }

    return (
        <div className="login">
            <div className="loginLogo">
                <LockIcon />
            </div>
            <Button onClick={signIn}>LOGIN</Button>
        </div>
    )
}

export default Login
