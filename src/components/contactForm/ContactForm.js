import React from "react";
import styles from "./ContactForm.module.css"
import { useState } from "react";
function ContactForm({setContact, contact}){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");

    const handleChange = (e) =>{
        if(e.target.id == 'name'){
            setName(e.target.value);
        }
        else if(e.target.id == 'phone'){
            setPhone(e.target.value);
        }
        else if(e.target.id == 'email'){
            setEmail(e.target.value);
        }
    }
    const handleSubmit = ()=>{
        if(name === ""){
            alert("Please enter your name");
            return;
        }
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if(!phoneRegex.test(phone)){
            alert("Please enter a valid phone number (xxx-xxx-xxxx)")
            return;
        }
        setContact([...contact, {phone,name,email}]);
        console.log(contact);
        setEmail("");
        setName("");
        setPhone("");
    }

    return(
        <div className={styles.container}>
            <h2>Add Contact</h2>
            <input type = "text" value = {name} onChange  = {handleChange} placeholder="Enter Name" id = "name" className = {styles.inputs}></input>
            <input type = "text" value = {phone} onChange  = {handleChange} placeholder = "Enter Phone Number (xxx-xxx-xxxx)" id = "phone" className = {styles.inputs}></input>
            <input type = "text" value = {email} onChange  = {handleChange} placeholder = "Enter Email" id = "email" className = {styles.inputs}></input>
            <button className={styles.submitButton} onClick = {handleSubmit}>Add Contact</button>
        </div>
    );
}
export default ContactForm;