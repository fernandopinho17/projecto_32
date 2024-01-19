// reducer.js
const initialState = {
    contacts: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, { ...action.payload, id: Date.now() }],
        };
      case 'REMOVE_CONTACT':
        return {
          ...state,
          contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        };
      case 'EDIT_CONTACT':
        const { id, updatedContact } = action.payload;
        const updatedContacts = state.contacts.map((contact) =>
          contact.id === id ? { ...contact, ...updatedContact } : contact
        );
        return {
          ...state,
          contacts: updatedContacts,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  