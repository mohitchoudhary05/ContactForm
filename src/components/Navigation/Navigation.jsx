import React from 'react'
import  styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className= {`${styles.navigation} container`}>
        <div className='logo'>
            <img src="https://firebasestorage.googleapis.com/v0/b/my-application-df392.appspot.com/o/logo.png?alt=media&token=ebcce5ed-e894-4eb7-ac26-0424f466e03c" alt="" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
