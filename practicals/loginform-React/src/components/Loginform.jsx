import React from "react";
import "./Loginform.css";

function Loginform() {
    return (
        <>
            <p className="title">Login Form</p>
            
            <form className="App">
                <input type="email" placeholder="Email or phone number"/>
                <input type="password" placeholder="Enter your password"/>
                <p style={{color:'green'}}>Forgot password?</p>
                <button type="{submit}" className="submit-btn">Login</button>
                <p style={{color:"black"}}>Not a member ? <span style={{color:'green'}}>Sign up Now</span></p>
            </form>

        </>
    );
}

export default Loginform;
