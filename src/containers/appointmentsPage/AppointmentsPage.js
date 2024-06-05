import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  addAppointment,
  contacts,
  appointments,
}) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      name: name,
      contact: contact,
      date: date,
      time: appointmentTime,
    });
    setName("");
    setContact("");
    setDate("");
    setAppointmentTime("");

    console.log("handleSubmit triggered");
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          addAppointment={addAppointment}
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          contacts={contacts}
          setContact={setContact}
          date={date}
          setDate={setDate}
          appointmentTime={appointmentTime}
          setAppointmentTime={setAppointmentTime}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};
