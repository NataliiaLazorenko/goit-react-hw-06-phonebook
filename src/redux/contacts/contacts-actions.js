import shortid from 'shortid';
import types from './contacts-types';

const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const filterContacts = value => ({
  type: types.FILTER,
  payload: value,
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const contactsActions = {
  addContact,
  filterContacts,
  deleteContact,
};

export default contactsActions;
