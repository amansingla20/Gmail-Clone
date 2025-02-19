import './SendMail.css';
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Button} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { IconButton } from '@material-ui/core';

function SendMail() {
    const {register , handleSubmit , errors, reset } = useForm();
    const onSubmit =(formData) =>{
        console.log(formData);
        reset();
    }
    return (
        <div className='sendMail'>
            <div className="sendMailHeader">
                <h3> New Message </h3>
                <IconButton>
                <CloseIcon className='sendMailCloser'/>
                </IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                name='to'
                placeholder='To' type="text"
                ref={register({required: true})}
                />

                {errors.to && <p className='sendMailError'>To is required</p>}

                <input name='subject' placeholder = 'Subject' type="text"
                ref={register({required: true})}
                />

                {errors.subject && <p className='sendMailError'>Subject is required</p>}

                <input name='message' placeholder='Message...' type="text"
                className='sendMailMessage'
                ref={register({required: true})}/>

                {errors.message && <p className='sendMailError'>Message is required</p>}
                
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
