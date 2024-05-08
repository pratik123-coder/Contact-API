import axios from 'axios';
import { useEffect, useState } from 'react';

const Getcontact = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/v1/getcontacts');
                setContacts(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Get Contacts</h1>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        <strong>Name: </strong> {contact.username} <br />
                        <strong>Phone: </strong> {contact.contact} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Getcontact;
