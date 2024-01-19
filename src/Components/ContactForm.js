// components/ContactForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions';

import { Botao } from '../styles'

import { Otitulo } from '../styles'

const ContactForm = () => {
  const [newContact, setNewContact] = useState({ name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.email && newContact.phone) {
      dispatch(addContact(newContact));
      setNewContact({ name: '', email: '', phone: '' });
    }
  };

  return (
    <div>
      <Otitulo>Adicionar contactos</Otitulo>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newContact.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={newContact.email}
        onChange={handleInputChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={newContact.phone}
        onChange={handleInputChange}
      />
      <Botao onClick={handleAddContact}>Add Contact</Botao>
    </div>
  );
};

export default ContactForm;
