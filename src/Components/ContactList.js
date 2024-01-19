// components/ContactList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem'; 

import { Separacao } from '../styles'

import { Subtitulo } from '../styles'

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <Separacao>
      <Subtitulo>Contact List</Subtitulo>
      <ul>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </Separacao>
  );
};

export default ContactList;
