import './EmailList.css';
import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from './Section';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className='email'>
            <div className="emailList-settings">
                <div className="emailList-settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>   
                    </IconButton>   
                     <IconButton>
                        <RedoIcon/>   
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>   
                    </IconButton>
                </div>
                <div className="emailList-settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList-section">
                <Section Icon={InboxIcon} title='Primary' color='red' selected/>
                <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
                <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
            </div>
            <div className="emailLists">
                <EmailRow title='Apple' 
                subject='Hello Buddy' 
                description='Hi Mango......'
                time='10pm'
                />
                 <EmailRow title='Mango' 
                subject='Hey Wassup' 
                description='Hey Banana......'
                time='10pm'
                />
                 <EmailRow title='Banana' 
                subject='Greetings message to Pineapple' 
                description='Hey Pineapple.....'
                time='10pm'
                />
                 <EmailRow title='Pineapple' 
                subject='Hi Buddy' 
                description='Hey Apple.....'
                time='10pm'
                />
                 <EmailRow title='Watermelon' 
                subject='Heya' 
                description='Hey Mango.....'
                time='10pm'
                />
                 <EmailRow title='Papaya' 
                subject='Heya Buddies....' 
                description='Hey Mango.....'
                time='10pm'
                />
                 <EmailRow title='Grapes' 
                subject='Heya' 
                description='Hey Mango.....'
                time='10pm'
                />
            </div>
        </div>
    )
}

export default EmailList
