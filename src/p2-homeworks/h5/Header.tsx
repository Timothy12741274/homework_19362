import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIORPLUS: '/juniorplus'
    // add paths
}
function Header() {

    return (
        <div className={s.common} id={s.common}>
            <div id={s.buttons} className={s.buttons}>
            <button ><NavLink to={PATH.PRE_JUNIOR} style={{"textDecoration": "none", "color":"red"}}>Pre-junior</NavLink></button>
            <button className={s.button2}><NavLink to={PATH.JUNIOR} style={{"textDecoration": "none", "color":"green"}}>Junior</NavLink></button>
            <button className={s.button3}><NavLink to={PATH.JUNIORPLUS} style={{"textDecoration": "none", "color":"brown"}}>JuniorPlus</NavLink></button>
            </div>
            <div className={s.buttonsLabel} id={s.buttonsLabel}></div>


        </div>
    )
}

export default Header
