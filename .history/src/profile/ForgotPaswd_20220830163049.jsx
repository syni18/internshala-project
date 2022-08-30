import React, { useRef } from "react";
import { useUserContext } from "../StateProvider";
import bgwall from "../images/bgwall.jpg";
import "../login/login.css";

function ForgotPaswd() {

  const emailRef = useRef();
  const { forgotPassword } = useUserContext();


  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
        alert("Reset Link Send to your email address")
      })
      .catch((e) => {
        document.getElementById("error").innerHTML = e.message
      });
  };

  return (
    <div className="login">
      <div className="login_img">
        <img src={bgwall} alt="" />
      </div>
      <div className="login_container">
        <h1>FORGOT</h1>
        <form onSubmit={onSubmit}>

          <h3>Email</h3>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email address"
          />
          <button class="btn" onClick={onSubmit}>
            Forget Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPaswd;
