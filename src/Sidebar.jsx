import './Sidebar.css';
import React from 'react'
import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';


function Sidebar() {
    return (
        <div className='sidebar'>
            <Button className='sidebar-compose'
            startIcon={<AddIcon fontSize='large' />}>
              Compose
            </Button>
            
            <SidebarOption Icon={InboxIcon} title='Inbox'
            number={20}
            selected={true}
            />
            <SidebarOption Icon={StarIcon} title='Starred'
            number={20}
            />
            <SidebarOption Icon={AccessTimeIcon} title='Snoozed'
            number={20}
            />
            <SidebarOption Icon={LabelImportantIcon} title='Important'
            number={20}
            />
            <SidebarOption Icon={NearMeIcon} title='Sent'
            number={20}
            />
            <SidebarOption Icon={NoteIcon} title='Drafts'
            number={20}
            />
            <SidebarOption Icon={ExpandMoreIcon} title='More'
            number={20}
            />

            <div className="sidebar-footer">
                <div className="footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                      <PhoneIcon/>                        
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
