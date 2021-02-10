import { connect } from 'react-redux';
import FormPage from '../FormPage';
import CollectionPage from '../CollectionPage';
import { addContact, deleteContact, getContacts } from './actions';

export const FormPageContainer = connect(
    null,
    dispatch =>
        ({
            newContact(name, number) {
                dispatch(addContact(name, number))
            }
        })
)(FormPage)


export const CollectionPageContainer = connect(
    state =>
        ({
            contacts: state.contacts
        }),
    dispatch =>
        ({
            onGetting(contacts){
                dispatch(getContacts(contacts))
            },
            onDelete(id) {
                dispatch(deleteContact(id))
            }
        })
)(CollectionPage)