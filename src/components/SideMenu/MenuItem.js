import React from 'react'
import {NavLink} from "react-router-dom"

const MenuItem = (props) => {

    const { name, iconClassName, to, onClick } = props;

    return (
        <>
            <li onClick={onClick} >
                <NavLink to={to} href="#" className="menu-item">
                    <div className="menu-icon">
                        <i class={`${iconClassName}`}></i>
                    </div>
                    <span  >
                        {name}
                    </span>
                </NavLink>
            </li>
        </>
    )
}

export default MenuItem
