import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logoo'>Chat App</span>
      <div className="user">
        <img src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" alt="" className='navimg' />
        <span className='naame'> Harsh</span>
        <button className='logout'>logout</button>
      </div>

    </div>
  )
}

export default Navbar