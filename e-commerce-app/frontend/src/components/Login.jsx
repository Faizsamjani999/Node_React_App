import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from "./Login.module.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        if (!email || !password) {
            alert("Please fill out all fields");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const res = await axios.post("http://localhost:9999/api/auth/login", {
                email,
                password
            });

            const { token, user } = res.data;

            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                console.log("Token Set:", localStorage.getItem('token'));
                if (user.isAdmin) {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/');
                }
            }

            console.log(res.data.message);
            alert("Login Successful...");
            setEmail("");
            setPassword("");
        } catch (err) {
            alert("Invalid Credential...");
        }
    };

    return (
        <div className={styles.center}>
            <div className={styles.loginCard}>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className={styles.inputField}>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.inputField}>
                        <label htmlFor='password'>Password</label>
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className={styles.togglePassword}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                            {passwordVisible ? "Hide" : "Show"}
                        </span>
                    </div>
                    <button type="submit">Login</button>
                    <div className={styles.registerRedirect}>
                        New User? <span onClick={() => navigate('/register')}>Register Here</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;