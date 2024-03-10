// App.jsx
// 1. Create state variables for selectedContactId and setSelectedContactId and set its default value to null.
// 2. Conditionally render ContactList or details of the selected contact based on selectedContactId.

// ContactList.jsx
// 3. Pass setSelectedContactId function to ContactList component as a prop.

// ContactRow.jsx
// 4. Add onClick event to the table row (<tr>) which calls setSelectedContactId with the id of the clicked contact.



import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'; 
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div className="App">
      {!selectedContactId ? (
        <ContactList setSelectedContactId={setSelectedContactId} />
      ) : (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;