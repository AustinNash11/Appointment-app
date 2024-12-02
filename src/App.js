
import './App.css';
import React from 'react';
import { useState } from 'react';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './components/root/Root';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';

function App() {
  const [contact, setContact] = useState([]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path = "/" element = {<Root/>}>
      <Route path = "pages/AppointmentPage" element = {<AppointmentPage contact = {contact}/>}/>
      <Route path = "pages/ContactPage" element = {<ContactPage setContact = {setContact} contact = {contact}/>}/>
    </Route>
  ));

  return (
    <div className="App">
      <RouterProvider router = {router}/>
    </div>
  );
}

export default App;
