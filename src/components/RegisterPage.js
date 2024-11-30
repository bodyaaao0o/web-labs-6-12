import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        if (users[email]) {
            alert('User already registered!');
        } else {
            users[email] = password; 
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('userEmail', email); 
            navigate('/home');
        }
    };

    return (
        <div className="log-container">
            <h1>Register</h1>
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>SIGN ME UP</button>
            <div className="nav-text">
                Already a member? <a href="/login">Sign in</a>
            </div>
        </div>
    );
};

export default RegisterPage;
