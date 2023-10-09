// eslint-disable-next-line no-unused-vars
import React from 'react'
import LeftPane from '../components/LeftPane'
import Profile from '../components/Profile'


export default function Home() {
    return (
        <div className="w-screen h-screen">
            <LeftPane />
            <Profile />
        </div>
    )
}
