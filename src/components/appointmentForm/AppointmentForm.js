import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  appointmentTime,
  setAppointmentTime,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            min={getTodayString()}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
          />
        </label>
        <ContactPicker
          contacts={contacts}
          value={contact}
          name="contact"
          onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit"></input>
      </form>
    </>
  );
};
