// import ContactList from "./ContactList";
import React from "react";

function ContactRow ({ contact }) {
    console.log(`This is the contact`, contact);
    return (
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
    );
}

export default ContactRow;