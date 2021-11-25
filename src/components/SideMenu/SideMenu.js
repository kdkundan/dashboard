import React, { useEffect, useState } from 'react'
import "./style.css"
import logo from "../../assets/logo/webscript.png"
import user from "../../assets/user.jpg"
import MenuItem from "./MenuItem.js"
import { Link } from 'react-router-dom'

const SideMenu = (props) => {

    const [inactive, setInactive] = useState(false);

    const menuItems = [
        { name : "Overview", to:"/overview", iconClassName:"bi bi-speedometer2" },
        { name : "Calendar", to:"/", iconClassName:"bi bi-calendar" },
        { name : "Pateint List", to:"/patient-list", iconClassName:"bi bi-list-check" },
        { name : "Messages", to:"/messages", iconClassName:"bi bi-chat-left-text" },
        { name : "Payment", to:"/payment", iconClassName:"bi bi-wallet2" },
    ];

    useEffect( () => {
        props.onCollapse(inactive);
    }, [inactive] );

    return (
        <>
            <div className={`side-menu ${inactive ? "inactive" : "" }`} >
                <div className="top-section" >
                    <Link to="/" >
                    <div className="logo" >
                        <img src={logo} alt="logo-img" />
                    </div>
                    </Link>
                    <div className="toggle-menu-btn" onClick={ () => setInactive(!inactive) } >
                        { !inactive ? <i class="bi bi-arrow-left-square-fill"></i> : <i class="bi bi-arrow-right-square-fill"></i> }
                        
                    </div>
                </div>

                <div className="divider"></div>

                <div className="main-menu" >
                    <ul>
                        {
                            menuItems.map( (menuItem, index) => 
                            <MenuItem 
                                key={index}
                                name={menuItem.name}
                                to={menuItem.to}
                                iconClassName={menuItem.iconClassName}
                                onClick={ ()=> {
                                    if(inactive){
                                        setInactive(false);
                                    }
                                } }  
                            /> )
                        }

                    </ul>
                </div>
                
                <div className="side-menu-footer" >
                <div className="divider"></div>

                    <div className="avatar">
                        <img src={user} alt="user" />
                    </div>

                    <div className="user-info">
                        <h5>Name</h5>
                        <p>Doctor</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SideMenu
