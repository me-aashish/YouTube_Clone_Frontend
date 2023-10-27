import React from 'react'
import LiveChatMessage from './LiveChatMessage'

const LiveChat = () => {
  return (
    <div className="mt-2 ml-3 border p-2 border-black bg-white-50 shadow-xl w-[360px] h-[400px] rounded-lg">
        <LiveChatMessage name="Aashish" message="Hello Live Message" />
    </div>
  )
}

export default LiveChat