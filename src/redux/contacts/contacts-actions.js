import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');
const filterContacts = createAction('contacts/filter');

const contactsActions = {
  addContact,
  filterContacts,
  deleteContact,
};

export default contactsActions;

// =============== без використання redux-toolkit ===============
// import shortid from 'shortid';
// import types from './contacts-types';

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filterContacts = value => ({
//   type: types.FILTER,
//   payload: value,
// });

// const contactsActions = {
//   addContact,
//   filterContacts,
//   deleteContact,
// };

// export default contactsActions;
