import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { getContacts, deleteContact } from './redux/actions';


const CollectionPage = ({ contacts =[], onDelete}) => {
    return (
            <div>         
              <table>
                 <thead>
                     <tr>
                         <th>Фио</th>
                         <th>Телефон</th>
                        <th>Удалить</th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                        contacts.map(contact =>
                            <Contact key={contact.id}
                            {...contact}
                            on
                            onDelete={() => onDelete(contact.id)} />
                        )
                    }
                </tbody>
            </table>          
        </div>
                 
    )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onGetContact: () => {
      dispatch(getContacts())
    },
    onDeleteContact: () => {
      dispatch(deleteContact())
    },
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage)

