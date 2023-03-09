import React from 'react'
import Add from '../images/Add.png'
import Camera from '../images/camera.png'
import More from '../images/more.png'
import Messages from './Messages'
import Input from './Input'
// import video from '../images/cic.ico'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Harsh</span>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
export default Chat;
