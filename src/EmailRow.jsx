import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react'
import './EmailRow.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router';

function EmailRow( { id , title , subject, description, time } ) {
    const history = useHistory();
    return (
        <div onClick={() => history.push('/mail')} className = 'emailRow'>
            <div className="emailRowOptions">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRowTitle">
                {title}
            </h3>
            <div className="emailRowMessage">
                <h4>
                {subject} {'   '}
                <span className="emailRowDescription">
                    {description}
                </span>
                </h4>
            </div>
            <p className="emailRowTime">
                {time}
            </p>
        </div>
    )
}

export default EmailRow
