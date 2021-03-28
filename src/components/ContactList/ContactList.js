import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from '../ContactListItem';
import contactsActions from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li className={styles['list-item']} key={id}>
        <ContactListItem
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const contactsToShow = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => {
  return {
    contacts: contactsToShow(items, filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(contactsActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
