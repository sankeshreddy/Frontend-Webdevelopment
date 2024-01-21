import React from 'react';
import AuthBgImg from '../../assets/book-sign.jpg';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Login= () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={AuthBgImg} alt="authentication-background" />
                    
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            {/* <h2>Login</h2> */}
                            {/* <p>Sign In With Email And Password</p> */}
                            <AuthForm className="login-btn" buttonName="Login" />
                            
                        </div>
                    </div>
                </div>
                {/* <p class = "copyright">&copy; 2023 BookStore. All Rights Reserved</p> */}
                
            </section>
           
        </React.Fragment>
    )
}

export default Login;