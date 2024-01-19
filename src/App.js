// App.js
import React from 'react';
import ContactList from './Components/ContactList';
import ContactForm from './Components/ContactForm';

import { Titulo } from './styles'

import { Divisao } from './styles'


function App() {
  return (
    <Divisao>
      <Titulo>Lista de contactos</Titulo>
      <ContactForm />
      <ContactList />
    </Divisao>
  );
}

export default App;
