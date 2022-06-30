import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../StateProvider";
import bgwall from "../images/bgwall.jpg";
import "./login.css";

function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();


  
  const onSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) {
      registerUser(email, password, name);
      navigate("/home");
    }
  };


  return (
    <div className="login">
      <div className="login_img">
        <img src={bgwall} alt="" />
      </div>
      <div className="login_container">
        <h1>DASHBOARD</h1>
        <form onSubmit={onSubmit}>
          <h3>Name</h3>
          <input placeholder="Enter your name" type="name" ref={nameRef} />
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

          <button class="btn" onClick={onSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
