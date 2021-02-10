import { ADD_CONTACT, DELETE_CONTACT, GET_CONTACTS } from './constants'

export const addContact = (newContact) =>
({
        type: ADD_CONTACT ,
        newContact
    })

export const getContacts = (contacts) => 
    ({
        type: GET_CONTACTS,
        contacts
    })
    

export const deleteContact = (id) =>
    ({
        type: DELETE_CONTACT,
        id
 })

