import './SendMail.css';
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';

function SendMail() {
    const {register , handleSubmit , watch, errors } = useForm();

    const onSubmit =(data) =>{
        console.log(data);
    }

    return (
        <div className='sendMail'>
            <div className="sendMailHeader">
                <h3> New Message</h3>
                <CloseIcon className='sendMailCloser'/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='to'
                placeholder='To' type="text"
                ref={register({required: true})}
                />

                <input name='subject' placeholder = 'Subject' type="text"
                ref={register({required: true})}
                />

                <input name='message' placeholder='Message...' type="text"
                className='sendMailMessage'
                ref={register({required: true})}/>

                <div className="sendMailOptions">
                    <Button className='sendMailSend'
                    variant='contained'
                    color='primary'
                    type='submit'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail
