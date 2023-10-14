import React from "react";

const ContactList = ({ contacts, editContact, deleteContact }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-card">
          <div>
            <strong>
              {contact.firstName} {contact.lastName}
            </strong>
          </div>
          <div>Email: {contact.email}</div>
          <div>Country: {contact.country}</div>
          <div>Phone: {contact.phone}</div>
          <div>About: {contact.about}</div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
