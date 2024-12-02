import React from "react";
import styles from "./AppointmentPage.module.css"
import { useState } from "react";
import AppointmentForm from "../components/appointmentForm/AppointmentForm";
import contact from "./ContactPage";
function AppointmentPage({contact}){
    const [appointmentDetails, setAppointmentDetails] = useState([]);
    return(
        <>
            <AppointmentForm contact = {contact} setAppointmentDetails = {setAppointmentDetails} appointmentDetails = {appointmentDetails}/>
            {appointmentDetails.map((appointment)=>{
                return(
                    <div className = {styles.container}>
                        <div className = {styles.info}>{appointment.appointmentName}</div>
                        <div className = {styles.info}>Time: {appointment.time}</div>
                        <div className = {styles.info}>Date: {appointment.date}</div>
                        <div className = {styles.info}>Name of the Tutor: {appointment.theTutor}</div>
                    </div>
                );
            })}
        </>
    )
}

export default AppointmentPage;
