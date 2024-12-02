import React from "react";
import { useState } from "react";
import styles from "./AppointmentForm.module.css";

function AppointmentForm({contact, setAppointmentDetails, appointmentDetails}){
    const [appointmentName, setAppointmentName] = useState("");
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [theTutor, setTheTutor] = useState();

    const appointmentChange = (e) =>{
        setAppointmentName(e.target.value);
    }
    const dateChange = (e) =>{
        setDate(e.target.value);
        console.log(date);
    }
    const timeChange = (e)=>{
        setTime(e.target.value);
    }
    const selectTutor = (e) =>{
        setTheTutor(e.target.value);
    }
    const addAppointment = ()=>{
        setAppointmentDetails([...appointmentDetails, {appointmentName, time, date, theTutor}]);
        console.log(theTutor);
        setAppointmentName('');
        setDate('');
        setTime('');
    }

    return(
        <div className={styles.container}>
            <h2 className = {styles.header}>Add Appointment</h2>
            <input type = "text" value = {appointmentName} className={styles.inputField} onChange = {appointmentChange} placeholder="Enter Name of the Appointment"></input>
            <select className = {styles.selectTutor} onChange={selectTutor}>
                <option>Please Select A Tutor</option>
                {contact.map((tutor, index)=>{
                    return(
                    <option key = {index} value={tutor.name}>{tutor.name}</option>);
                })}
            </select>
            <input type = "date" className = {styles.inputField} value = {date} onChange = {dateChange}></input>
            <input type = "time" className = {styles.inputField} value = {time} onChange = {timeChange}></input>
            <button onClick ={addAppointment}>Add Appointment</button>
        </div>
)}

export default AppointmentForm;