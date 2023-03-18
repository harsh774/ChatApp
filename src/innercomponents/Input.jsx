import { arrayUnion, Timestamp , doc, updateDoc} from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import Attach from '../images/Attach.png'
import down from '../images/down.png'
import { AuthContext } from '../Contexts/AuthContext'
import { ChatContext } from '../Contexts/ChatContext'
import { db, storage } from '../firebase'
import {v4 as uuid } from "uuid";
import { ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {

  const {text, setText} = useState("")
  const {img, setImg} = useState(null);

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext)

  const handleSend = async () => {
    if(img){
      const storageRef = ref(storage, uuid);
      const uploadTask = uploadBytesResumable(storageRef, img);

    }else{
      await updateDoc(doc(db, "chats", data.chatId),{
        messages: arrayUnion({
          id: uuid,
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        })
      })
    }
  };
  return (
    <div className='input'>
      <input className='intext' type="text" placeholder='Type something...' onChange={e=>setText(e.target.value)}/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: 'none'}} id="file" onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src={down} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input