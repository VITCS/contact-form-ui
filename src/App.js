import React, { useState, useEffect } from "react";
import "./App.css";
import {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from "./service/contactService";
import Contact from "./Contact/Contact";
import ContactList from "./Contact/ContactList";

function App() {
  const initialContact = {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    about: "",
  };

  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(initialContact);
  useEffect(() => {
    getContacts().then((response) => {
      setContacts(response.data);
    });
  }, []);
  const addContact = (contact) => {
    createContact(contact).then((response) => {
      setContacts([...contacts, response.data]);
    });
  };

  const editContact = (contact) => {
    setEditingContact(contact);
  };

  const updateContact = (updatedContact) => {
    // setContacts(
    //   contacts.map((contact) => {
    //     contact.id === updateContact.id ? updatedContact : contact;
    //   })
    // );
    setEditingContact(initialContact);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  return (
    <div className="App">
      <h1>Contact list</h1>
      <Contact
        addContact={addContact}
        editContact={updateContact}
        initialContact={editingContact}
      />
      {contacts && contacts.length !== 0 ? (
        <ContactList
          addContact={addContact}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
