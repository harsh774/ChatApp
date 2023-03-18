import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContext'
import { ChatContext } from '../Contexts/ChatContext';


const Message = ({message}) => {
  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext)

  console.log(message)
  return (
    <div className="message owner">
        {/* <div className="messageInfo">
            <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
        </div> */}
    </div>
  )
}

export default Message