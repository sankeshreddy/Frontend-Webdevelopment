import React from "react";
import "./signup.styles.css";
import AuthBgImg from "../../assets/book-sign.jpg";
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authForm/AuthForm";

const Signup = () => {
  return (
    <React.Fragment>
      <Navbar darkText={true} />
      <section className="signup-container img-overflow">
        <Navbar darkTheme={false} />
        <div className="signup-img-container">
          <img src={AuthBgImg} alt="authentication-background" />
        </div>
        <div className="signup-content-container">
          <div className="container signup">
            <div className="content-wrapper">
              {/* <h2>Signup</h2> */}
              {/* <p className="signup-p">Create A New Account With Email and Password</p> */}

              <AuthForm buttonName="Sign Up" />
            </div>
          </div>
        </div>
        {/* <p class = "copyright">&copy; 2023 BookStore.All Rights Reserved</p> */}
      </section>
    </React.Fragment>
  );
};

export default Signup;
