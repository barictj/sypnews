import Link from 'next/link'
import styles from '../styles/menu.module.scss'
import { useState } from 'react'
import Image from 'next/image';
import {BurgerMenu} from './burgerMenu';
import { Menu as MenuIcon } from '@mui/icons-material/';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';


export const  BurgerMenuButton = () => {
    const [toggle, setToggle] = useState(false) // toggle state for burger menu
    let newDiv = <div className={styles.burger_menu}></div>
    if (toggle === true) {
        newDiv = <BurgerMenu setToggle={setToggle}/>
    } 
  return (
    <div>
        {/* <button onClick={() => setToggle(!toggle)} className={styles.button_menu}> */}
            {/* <img src="/images/burger_menu_button.png" alt="burger menu"  className={styles.button_menu_button} /> */}
            <IconButton edge="start" className="" aria-label="menu">
                <MenuIcon  sx={{fontSize: 50, color:'white'}} onClick={() => setToggle(!toggle)} />
          </IconButton>
        {/* </button> */}
        {newDiv}
    </div>
  )}
