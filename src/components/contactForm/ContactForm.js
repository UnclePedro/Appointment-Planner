import React from "react";

export const ContactForm = ({
  newName,
  setNewName,
  newPhone,
  setNewPhone,
  newEmail,
  setNewEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={newPhone}
            pattern="^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$"
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </label>
        <input type="submit"></input>
      </form>
    </>
  );
};
