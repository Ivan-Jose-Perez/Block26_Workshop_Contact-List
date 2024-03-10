// App.jsx
// 1. Create state variables for selectedContactId and setSelectedContactId and set its default value to null.
// 2. Conditionally render ContactList or details of the selected contact based on selectedContactId.

// ContactList.jsx
// 3. Pass setSelectedContactId function to ContactList component as a prop.

// ContactRow.jsx
// 4. Add onClick event to the table row (<tr>) which calls setSelectedContactId with the id of the clicked contact.

// import ContactList from "./ContactList";
import React from "react";

function ContactRow({ contact, onClick }) {
    console.log("Rendering ContactRow for contact: ", contact); 

    return (
        <tr onClick={onClick}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow;