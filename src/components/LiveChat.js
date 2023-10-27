import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, generateRandomString } from '../utils/helper';
import store from '../utils/store';
import LiveChatMessage from './LiveChatMessage'
import { addChatMessages } from '../utils/chatSlice';

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(store=>store.chat.messages);
    useEffect(() => {
        const chatPollInterval = setInterval(()=>{
            // API Polling
            dispatch(addChatMessages({
                name: generateRandomName(),
                message: generateRandomString(20)
            }));
        }, 2000)

        return () => {
            clearTimeout(chatPollInterval);
        }
    }, [])

  return (
    <div className="mt-2 ml-3 border p-2 border-black bg-white-50 shadow-xl w-[360px] h-[400px] rounded-lg overflow-y-scroll">
      {messages.map((c, i) => (
        <LiveChatMessage
          name={c.name}
          message={c.message}
          key={i}
        />
      ))}
    </div>
  );
}

export default LiveChat