import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';


const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className='form' onSubmit={handleSubmit}>
                <h1>
                    Welcome to Agbedowo.
                </h1> 
                <p>Let's get you started. Create an account to begin</p>
                <div className="form-inputs">
                    <label htmlFor="First Name" 
                    className="form-label">
                        First Name
                    </label>
                    <input 
                        id='first name'
                        type="first name" 
                        name="first name" 
                        className="form-input"
                        placeholder='Enter your first name'
                        value={values.firstname}
                        onChange={handleChange}
                        />
                        {errors.firstname && <p>{errors.firstname}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="Last name" 
                    className="form-label">
                        last name
                    </label>
                    <input 
                        id='last name'
                        type="last name" 
                        name="first name" 
                        className="form-input"
                        placeholder='Enter your last name'
                        value={values.lastname}
                        onChange={handleChange}
                        />
                        {errors.lastname name && <p>{errors.lastname }</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="email address" 
                    className="form-label">
                        Email Address
                    </label>
                    <input 
                        id='email address'
                        type="email address" 
                        name="email" 
                        className="form-input"
                        placeholder='Enter your email address'
                        value={values.email}
                        onChange={handleChange}
                        />
                       {errors.emailaddress && <p>{errors.emailaddress}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="Phone Number" 
                    className="form-label">
                        Phone number
                    </label>
                    <input 
                        id='Phone number'
                        type="Phone number" 
                        name="Phone number" 
                        className="form-input"
                        placeholder='Enter your phone number'
                        value={values.phonenumber}
                        onChange={handleChange}
                        />
                        {errors.phonenumber && <p>{errors.phonenumber}</p>}
                </div>
            
                <div className="form-inputs">
                    <label htmlFor="Username" 
                    className="form-label">
                        Username
                    </label>
                    <input 
                        id='username'
                        type="username" 
                        name="username" 
                        className="form-input"
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.first name && <p>{errors.first name}</p>}
                </div>

                <div className='form-inputs'>
                    <label htmlFor="Password" 
                    className="form-label">
                        password
                    </label>
                    <input 
                        id='password'
                        type="password" 
                        name="Password" 
                        className="form-input"
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        />
                       {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="details">
                    <input type="radio" name="text" id="dot-1">
                    <input type="radio" name="text" id="dot-2">
                    <span className="text">Are you registering as an organization or individual?</span>
                </div>
            <div className="category">
                <label for="dot-1">
                    <span className="dot one">individual</span>
                </label>

                <label for="dot-2">
                    <span className="dot one">organization</span>
                </label>

                <label for="box-1">
                    <span className="box one">By creating an account you agree to the <a href="#">terms of use</a>and our<a href="#">privacy policy</a></span>
                </label>

                <button className="form-input-btn" type='submit'>
                    Create Account
                </button>
                <span className="form-input-login">
                    Already have an account? <a href="#">Login</a>
                </span>

            </form>

            </div>
        </div>


        
    )
}

export default FormSignup
