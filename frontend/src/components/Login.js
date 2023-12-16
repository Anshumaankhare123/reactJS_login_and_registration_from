import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Login failed:', error.response.data.error);
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <input
        //         type="text"
        //         placeholder="Username"
        //         value={username}
        //         onChange={(e) => setUsername(e.target.value)}
        //     />
        //     <input
        //         type="password"
        //         placeholder="Password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />
        //     <button type="submit">Login</button>
        // </form>
        <>
        
            <form class='form1' onSubmit={handleSubmit} >
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input 
                type="text" 
                placeholder="Username" 
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
                />

                <label for="password">Password</label>
                <input 
                type="password" 
                placeholder="Password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                />

                <button>Log In</button>
                <div class="social">
                    <a href="/registration" align="right">ragistration</a>
                    {/* <div class="go"><i class="fab fa-google"></i>  Google</div>
                    <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div> */}
                </div>
            </form>
        
        </>
    );
};

export default Login;