import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from "./RegisterUser.module.css";

function RegisterUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false); // Default false
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        if (!name || !email || !password) {
            alert("Please fill out all fields");
            return false;
        }
        return true;
    };

    const checkPasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength("Weak");
        } else if (password.length < 10) {
            setPasswordStrength("Medium");
        } else {
            setPasswordStrength("Strong");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            await axios.post("http://localhost:9999/api/auth/register", {
                name,
                email,
                password,
                isAdmin,
            });
            setName("");
            setEmail("");
            setPassword("");
            setIsAdmin(false);  // Reset isAdmin
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            alert("Registration failed. Please try again.");
        }
    };

    return (
        <div className={styles.center}>
            <div className={styles.signUp}>
                <div className={styles.right}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <h1>Register</h1>
                            <div className={styles.inputBordered}>
                                <label htmlFor='name'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    className={styles.first}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputBordered}>
                                <label htmlFor='emailaddress'>Email Address</label>
                                <input
                                    type='email'
                                    id='emailaddress'
                                    className={styles.first}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.inputBordered}>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    id='password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        checkPasswordStrength(e.target.value);
                                    }}
                                />
                                <span
                                    className={styles.togglePassword}
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                >
                                    {passwordVisible ? "Hide" : "Show"}
                                </span>
                                <div className={styles.passwordStrength}>{passwordStrength}</div>
                            </div>
                        </div>
                        <div className={styles.field}>
                            <div className={styles.inputBordered}>
                                <label htmlFor='isAdmin'>Admin</label>
                                <input
                                    type='checkbox'
                                    id='isAdmin'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <input type='submit' value='Register' />
                        </div>
                        <div className={styles.loginRedirect}>
                            Already Registered? <span onClick={() => navigate('/login')}>Login</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterUser;
