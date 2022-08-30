import React, { useRef } from "react";
import { useUserContext } from "../StateProvider";
import bgwall from '../images/bgwall.jpg'
import "./login.css";

function Login() {

  const emailRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();
  const { signInUser,  } = useUserContext();
  

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      registerUser(email, password);
    }
  };

  const onSignin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) {
      signInUser(email, password)
    };
  };

 
  return (
    <div className="login">
      <div className="login_img">
        <img src={bgwall} alt="" />
      </div>
      <div className="login_container">
        <h1>SIGN</h1>
        <form onSubmit={onSubmit}>
          <h3>Email</h3>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email address"
          />
          <h3>Password</h3>
          <input
            type="password"
            ref={psdRef}
            placeholder="Enter your password"
          />

          <button onClick={onSignin}>Login</button>
          {/* <button class="btn" onClick={onSubmit}>Sign Up</button> */}
        </form>
      </div>
    </div>
  );
}

export default Login