import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react'
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {useState} from 'react';
import {useEffect} from 'react';

function Header() {
    const [seed ,setSeed] =useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[]);
    return (
        <div className='header'>
            <div className="header-left">
                <IconButton>
                <MenuIcon />
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="gamil"/>
            </div>
            <div className="header-middle">
                <SearchIcon />
                <input type="text" placeholder='Search mail'/>
                <ArrowDropDownIcon className='header-inputIcon'/>
            </div>
            <div className="header-right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar src= {`https://avatars.dicebear.com/api/human/${seed}.svg` } />
            </div>
        </div>
    )
}

export default Header
