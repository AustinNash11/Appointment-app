import React from "react";
import styles from "./Root.module.css"
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Root(){
    return(
        <>
            <div className={styles.header}>
                <NavLink to = "/pages/AppointmentPage" className = {styles.link}>Appointment</NavLink>
                <NavLink to = "/pages/ContactPage" className = {styles.link} >Contact</NavLink>
            </div>
            <Outlet/>
        </>
    )
    
}
export default Root;