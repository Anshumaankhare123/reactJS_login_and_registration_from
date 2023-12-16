import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

const Registration = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', {
                username,
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Registration failed:', error.response.data.error);
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
        //         type="text"
        //         placeholder="Email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //     />
        //     <input
        //         type="password"
        //         placeholder="Password"
        //         value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //     />
        //     <button type="submit">Register</button>
        // </form>

        <>
            
            <form className='form2' onSubmit={handleSubmit}>
                <h3>Registration</h3>

                <label for="username">Username</label>
                <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
                />

                <label for="email">email</label>
                <input 
                type="text" 
                placeholder="Email"  
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label for="password">Password</label>
                <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <button >Submit</button>
                <div class="social">
                    <a href='/'>Login..</a>
                </div>
            </form>
            </>

    )
}

export default Registration;