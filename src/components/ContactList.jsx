// App.jsx
// 1. Create state variables for selectedContactId and setSelectedContactId and set its default value to null.
// 2. Conditionally render ContactList or details of the selected contact based on selectedContactId.

// ContactList.jsx
// 3. Pass setSelectedContactId function to ContactList component as a prop.

// ContactRow.jsx
// 4. Add onClick event to the table row (<tr>) which calls setSelectedContactId with the id of the clicked contact.


import { useState, useEffect } from "react";
import React from "react";
import ContactRow from "./ContactRow";

// const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

function ContactList({ setSelectedContactId }) {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setContacts(result);
                console.log("Contacts from API: ", result);
            } catch (error) {
                console.error(`Oh no we found an error fetching contacts`, error);
            }
        }

        fetchContacts();

    }, []);

    console.log("Rendering ContactList with contacts: ", contacts);

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
                {contacts.map((contact) => (
                    <ContactRow
                        key={contact.id}
                        contact={contact}
                        onClick={() => setSelectedContactId(contact.id)}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;