import react, {useEffect, useState} from 'react'
import {createUser} from '../API'

const Register = () => {
    return(
        <div>Register Page 
        <div className='form'>
            <div className='form-body'>
                <div className='username'>
                    <label className='username-label' htmlFor='username'>username</label>
                    <input type='text' name='' className='username-input' htmlFor='username'></input>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Register