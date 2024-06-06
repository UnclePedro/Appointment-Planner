import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <p>Contact:</p>
      <select onChange={onChange} value={value} name={name}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact, index) => (
          <option value={contact.name} key={index}>
            {contact.name}
          </option>
        ))}
      </select>
    </>
  );
};
