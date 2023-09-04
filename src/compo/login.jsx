import React, { useState } from 'react';
import './carwrap.css'
function Login() {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");




    function getFormData(e) {

        e.preventDefault()
    }
    return (
        <div class="login-box">
            <h2>Login</h2>
            <form>
                <label for="tpw" className='user-box'>Username</label>
                <input type="text" id="tpw" placeholder="Enter username" required="" value={Username} onChange={(e) => setUsername(e.target.value)} /> <br /><br />

                <label for="kaj" className='user-box'>Password</label>
                <input type="password" id="kaj" placeholder="Enter password" required="" value={Password} onChange={(e) => setPassword(e.target.value)} /> <br /><br />


                <a href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                </a>
            </form>
        </div>
    );
}



export default Login;