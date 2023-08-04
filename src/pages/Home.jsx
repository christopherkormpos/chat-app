import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Navbar from '../components/Navbar'
import Message from '../components/Message'
import Input from '../components/Input'
import Chats from '../components/Chats'
import Chat from '../components/Chat'

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}