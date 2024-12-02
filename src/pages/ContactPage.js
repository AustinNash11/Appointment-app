import React from "react";
import ContactForm from "../components/contactForm/ContactForm";
import styles from "./ContactPage.module.css";
function ContactPage({contact, setContact}){
    //const [contact, setContact] = useState([]);
    return(
        <>
            <ContactForm setContact = {setContact} contact = {contact}/>
            {contact.map((tutor)=>{
                return(
                    <div className = {styles.container}>
                        <div className = {styles.theName}>{tutor.name}</div>
                        <select className={styles.contactInfo}>
                            <option>Contact Info</option>
                            <option>{tutor.phone}</option>
                            <option>{tutor.email}</option>
                        </select>
                    </div>
                );
            })}
        </>
    )
}

export default ContactPage;