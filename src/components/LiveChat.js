import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, generateRandomString } from '../utils/helper';
import store from '../utils/store';
import LiveChatMessage from './LiveChatMessage'
import { addChatMessages } from '../utils/chatSlice';
import sendMessageIconLink from '../constants/sendMessageIconLink';

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(store=>store.chat.messages);
    const [realName, setRealName] = useState("");
    const [realMessage, setRealMessage] = useState("");

    const handleSendMessage = (name, message) => {
         dispatch(
           addChatMessages({
             name: name,
             message: message,
           })
        );
    }

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
    <div>
      <div className="mt-2 ml-3 border p-2 border-black bg-white-50 shadow-xl w-[360px] h-[400px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {messages.map((c, i) => (
          <LiveChatMessage name={c.name} message={c.message} key={i} />
        ))}
      </div>
      <div className="flex">
        <span>
          <input
            type="text"
            placeholder="name"
            className="mt-2 ml-3 border p-2 border-black bg-white-50 shadow-xl w-[100px]  rounded-l-lg h-[41px]"
            value={realName}
            onChange={(e) => setRealName(e.target.value)}
          />
        </span>
        <span>
          <input
            type="text"
            placeholder="message"
            className="mt-2 border p-2 border-black bg-white-50 shadow-xl w-[200px] h-[41px]"
            value={realMessage}
            onChange={(e) => setRealMessage(e.target.value)}
          />
        </span>
        <span>
          <img
            src={sendMessageIconLink}
            alt="send"
            className="w-[60px] mt-2 border border-black   rounded-r-lg h-[41px] cursor-pointer"
            onClick={() => {
                handleSendMessage(realName, realMessage);
                setRealName("");
                setRealMessage("");
            }}
          />
        </span>
      </div>
    </div>
  );
}

export default LiveChat