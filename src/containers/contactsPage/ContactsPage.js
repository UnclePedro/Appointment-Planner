import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  // Write function with useEffect to check if the current Name state matches a name in the Contacts array
  const duplicateCheck = useEffect(() => {
    if (props.contacts.some((savedContact) => savedContact.name === newName)) {
      setDuplicate(true);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      props.addContact();
      setNewName("");
      setNewPhone("");
      setNewEmail("");
    } else window.alert("Contact with this name already exists.");
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={props.contacts} />
      </section>
    </div>
  );
};
