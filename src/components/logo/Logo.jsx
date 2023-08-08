import React from 'react'
import './logo.css'
// import myLogo from '../../assets/todo_logo.png'
import {SiPicartodottv} from 'react-icons/si'

const Logo = () => {
  return (
    <div className='logo'>
        <a className='myLogo'> <SiPicartodottv/> </a>
        {/* <span>Logo Here</span>   */}
    </div>
  )
}

export default Logo