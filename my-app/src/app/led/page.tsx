'use client';

import { useState } from 'react';

const LedControlPage = () => {
    const [brightness, setBrightness] = useState(0);

    const handleToggle = async (action: string) => {
        const response = await fetch(`/api/led?action=${action}${action === 'brightness' ? `&brightness=${brightness}` : ''}`, {
            method: 'PUT',
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error('Failed to control LED');
        }
    };

    return (
        <div>
            <h1>LED Control</h1>
            <button onClick={() => handleToggle('on')}>Turn On</button>
            <button onClick={() => handleToggle('off')}>Turn Off</button>
            <div>
                <label>
                    Brightness:
                    <input
                        type="number"
                        value={brightness}
                        onChange={(e) => setBrightness(Number(e.target.value))}
                    />
                </label>
                <button onClick={() => handleToggle('brightness')}>Set Brightness</button>
            </div>
        </div>
    );
};

export default LedControlPage;
