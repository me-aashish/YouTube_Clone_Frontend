import React from 'react'
import UserIconLink from '../constants/userIconLink'

const LiveChatMessage = ({ name, message}) => {
  return (
    <div className="flex p-2">
        <img src={UserIconLink} alt="user" className="h-8"/>
        <span className="font-bold mx-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveChatMessage