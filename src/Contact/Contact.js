import React, { useState } from "react";
import "./Contact.css";
const Contact = ({ addContact, editContact, initialContact }) => {
  const [contact, setContact] = useState(initialContact);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    if (!contact.firstName || !contact.lastName || !contact.email) {
      alert("First Name, Last name,, Email are mandatory");
    } else {
      setContact(initialContact);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="country"
          value={contact.country}
          onChange={handleChange}
          placeholder="Country"
        />
        <input
          type="text"
          name="phone"
          value={contact.phone}
          onChange={handleChange}
          placeholder="phone number"
        />
        <textarea
          type="text"
          name="about"
          value={contact.about}
          placeholder="About"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
