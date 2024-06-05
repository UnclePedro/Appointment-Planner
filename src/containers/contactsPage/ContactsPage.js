import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ addContact, contacts }) => {
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  // Write function with useEffect to check if the current Name state matches a name in the Contacts array
  const duplicateCheck = useEffect(() => {
    if (contacts.some((savedContact) => savedContact.name === newName)) {
      setDuplicate(true);
    }
  }, [contacts, newName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact({ name: newName, phone: newPhone, email: newEmail });
      setNewName("");
      setNewPhone("");
      setNewEmail("");
      console.log("handleSubmit triggered");
    } else window.alert("Contact with this name already exists.");
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          newName={newName}
          setNewName={setNewName}
          newPhone={newPhone}
          setNewPhone={setNewPhone}
          newEmail={newEmail}
          setNewEmail={setNewEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
