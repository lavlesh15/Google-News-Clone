import React from 'react'
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { useStateValue } from './StateProvider';

function Header() {

    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
            <i className="fas fa-bars"></i>
            <span className="left_span">
            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="" /> <a> News</a>
            </span>
            
            </div>

            <div className="header_mid">
                  <IconButton><SearchIcon /> </IconButton>  
                    <input type="text" placeholder="Search for topics , locations & sources "/>
                    
            </div>

            <div className="header_right">
            <IconButton><AppsIcon className="header_icon" /> </IconButton> 
            <Avatar src={user?.photoURL} className="header_avatar"/>
            
            </div>
            
        </div>
    )
}

export default Header
