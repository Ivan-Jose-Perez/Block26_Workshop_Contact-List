import React, { useState, useEffect } from 'react';

function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
            if (!response.ok) {
            throw new Error('Failed to fetch contact details');
            }
            const data = await response.json();
            setContact(data);
        } catch (error) {
            console.error('Error:', error);
        }
        }

    fetchContact();
    }, [selectedContactId]);

    return (
        <div>
        {contact && (
            <div>
            <h2>{contact.name}</h2>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            {/* Add more details as needed */}
            <button onClick={() => setSelectedContactId(null)}>Back to Contacts</button>
            </div>
        )}
        </div>
    );
}

export default SelectedContact;
