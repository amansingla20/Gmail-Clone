import './Mail.css';
import React from 'react'
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import EmailIcon from '@material-ui/icons/Email';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Mail() {
    const history = useHistory();
    return (
        <div className='mail'>
            <div className="mailTools">
                <div className="mailToolsLeft">
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>
                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                    <IconButton>
                        <EmailIcon/>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            <div className="mailToolsRight">
                <IconButton>
                    <UnfoldMoreIcon />
                </IconButton>
                <IconButton>
                    <PrintIcon />
                </IconButton>
                <IconButton>
                    <ExitToAppIcon/>
                </IconButton>
            </div>
            </div>
            <div className="mailBody">
                <div className="mailBodyHeader">
                    <h2>Chat</h2>
                    <LabelImportantIcon className = 'mailImportant'/>
                    <p>Hey Buddies</p>
                    <p className='mailTime'>10pm</p>
                </div>
                <div className="mailMessage">
                    <p>Hi......</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
