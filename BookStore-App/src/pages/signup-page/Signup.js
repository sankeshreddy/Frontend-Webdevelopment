import React from 'react';
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Signup = () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container img-overflow">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container signup">
                        <div className="content-wrapper">
                            {/* <h2>Signup</h2> */}
                            <p className="signup-p">Create a new account with email and password</p>

                            <AuthForm buttonName="Sign Up" />
                            <p class = "copyright">&copy; 2023 BookStore. All Rights Reserved</p>
                        </div>
                    </div>
                    
                </div>
               
            </section>
        </React.Fragment>
    )
}

export default Signup;