import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ isDuplicate, setIsDuplicate ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if(!isDuplicate) {
      addContact(name, phone, email);
      //Below resets the form to a clean slate
      setName("");
      setPhone("");
      setEmail("");
    } else {
      alert("Name already taken!");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  contacts.find((contact) => contact?.name === name) ? setIsDuplicate(true) : setIsDuplicate(false);

 }, [name, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
