import React, { useState } from 'react';
import axios from 'axios';

const Setcontact = () => {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');

    const handleClick = async () => {
        try {
            const response = await axios.post('http://localhost:8000/v1/contacts', { username, contact });
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    return (
        <div>
            <h1>Set Contact</h1>
            <h4>Enter Username</h4>
            <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
            <h4>Enter Contact</h4>
            <input type="text" placeholder="Contact" value={contact} onChange={handleContactChange} />
            <button onClick={handleClick}>Set Contact</button>
        </div>
    );
};

export default Setcontact;
