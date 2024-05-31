import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Add new contact
  const addContact = (name, phone, email) => {
    const contactToAdd = { name, phone, email };
    setContacts((prevContacts) => [...prevContacts, contactToAdd]);
  };

  // Add new appointment
  const addAppointment = (name, contact, date, time) => {
    const appointmentToAdd = { name, contact, date, time };
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      appointmentToAdd,
    ]);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={<ContactsPage contacts={contacts} onAdd={addContact} />}
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              onAdd={addAppointment}
            />
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
