import React, {useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase';
import { AuthContext } from '../Contexts/AuthContext';

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logoo'>Chat App</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" className='navimg' />
        <span className='naame'>{currentUser.displayName}</span>
        <button className='logout' onClick={()=>signOut(auth)}>logout</button>
      </div>

    </div>
  )
}

export default Navbar