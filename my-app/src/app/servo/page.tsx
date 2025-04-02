'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

const ServoPage = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState('');

    const correctPassword = 'cheddar'; // Set your desired password here

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    const handleServoAction = async (angle: string) => {
        const response = await fetch(`/api/servo?angle=${angle}`, {
            method: 'PUT',
        });
        const data = await response.json();
        console.log(data);
    };

    const handleFullMovement = async () => {
        await handleServoAction('11'); // Move to 12 degrees
        await new Promise(resolve => setTimeout(resolve, 3500)); // Hold for 3.5 seconds
        await handleServoAction('30'); // Move back to 30 degrees
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Control Servo</h1>
            {!isAuthenticated ? (
                <form onSubmit={handlePasswordSubmit} className={styles.passwordForm}>
                    <input
                        type="password"
                        className={styles.passwordInput}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                    />
                    <button type="submit" className={styles.submitButton}>Submit</button>
                    {error && <p className={styles.error}>{error}</p>}
                </form>
            ) : (
                <div className={styles.remote}>
                    <button className={styles.powerButton} onClick={handleFullMovement}>
                        <img src="/images/power_symbol.png" alt="Power Symbol" className={styles.powerImage} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ServoPage;
