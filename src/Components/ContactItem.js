// components/ContactItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeContact, editContact } from '../actions';

import { Botaos } from '../styles'

import { Ebotaos } from '../styles'

const ContactItemWrapper = styled.li`
  margin: 10px;
`;

const ContactItem = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contact });
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleEditSubmit = () => {
    dispatch(editContact(contact.id, editedContact));
    setIsEditing(false);
  };

  return (
    <ContactItemWrapper>
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedContact.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={editedContact.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            value={editedContact.phone}
            onChange={handleInputChange}
          />
          <Botaos onClick={handleEditSubmit}>Save</Botaos>
        </>
      ) : (
        <>
          <span>{contact.name}</span>
          <span>{contact.email}</span>
          <span>{contact.phone}</span>
          <Ebotaos onClick={handleEditToggle}>Edit</Ebotaos>
          <Botaos onClick={handleRemove}>Remove</Botaos>
        </>
      )}
    </ContactItemWrapper>
  );
};

export default ContactItem;
