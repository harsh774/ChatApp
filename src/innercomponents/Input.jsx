import React from 'react'
import Attach from '../images/Attach.png'
import down from '../images/down.png'

const Input = () => {
  return (
    <div className='input'>
      <input className='intext' type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: 'none'}} id="file" />
        <label htmlFor="file">
          <img src={down} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input