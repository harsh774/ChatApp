import React from 'react'

const Search = () => {
  return (
    <div className='search'>
       <div className="searchform">
          <input className='insearch' type="text" placeholder='Find a user..'/>
        </div> 
        <div className="userChat">
          <img className='imsearch' src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" />
          <div className="userChatInfo">
            <span>Harsh</span>
          </div>
        </div>
    </div>
  )
}

export default Search