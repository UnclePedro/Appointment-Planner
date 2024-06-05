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
            onChange={(e) => setNewName(e.target.value) & console.log(newName)}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            value={newPhone}
            // Need to fix RegEx
            // pattern="^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$"
            onChange={(e) =>
              setNewPhone(e.target.value) & console.log(newPhone)
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={newEmail}
            onChange={(e) =>
              setNewEmail(e.target.value) & console.log(newEmail)
            }
          />
        </label>
        <input type="submit"></input>
      </form>
    </>
  );
};
