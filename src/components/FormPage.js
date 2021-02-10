import React from 'react';
import { connect } from 'react-redux';
import { addContact } from './redux/actions';
import toCamelCase from '../utils/toCamelCase';
import toPhoneNumber from '../utils/toPhoneNumber';


const FormPage = ({newContact}) => {

    let name, number 

    const submit = e => {
        e.preventDefault()
        newContact({
            name : toCamelCase(name.value),
            number : toPhoneNumber(number.value),
            id : toPhoneNumber(number.value)
        });
        name.value = number.value = '';
        
    }

    return (
        <form onSubmit={submit}>
            <label>
                ФИО
                <input ref={input => name = input}
                    type="text" required/>
            </label>
            <label>
                Телефон
                <input ref={input => number = input}
                    type="text" required/>
            </label>
            <button>Сохранить</button>
        </form>
    )

}


const mapStateToProps = (state) => {
  return {
    contact: state.contact
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: () => {
      dispatch(addContact())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPage)

