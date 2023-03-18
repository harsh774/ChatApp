import { onSnapshot, doc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../Contexts/ChatContext'
import Message from './Message'
import { db } from "../firebase";


const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext);

  useEffect(()=>{
    const unSub = onSnapshot(doc(db,"chats", data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages)
    })
    return ()=>{
      unSub()
    }
  }, [data.chatId])
  console.log(messages)

  return (
    <div className='messages'>
      {messages.map((m)=>(
        <Message messages={m} key={m.id} />
      ))}
    </div>
  )
}

export default Messages