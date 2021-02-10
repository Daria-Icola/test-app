import { DELETE_CONTACT, GET_CONTACTS } from './constants'


let initialState = {
    contacts: [

    ]
}

export const collectionPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return [
                ...state,
                ({}, action)
            ]
            
        case DELETE_CONTACT :
            return state.filter(
                c => c.id !== action.id
            )
        default:
            return state
    }
}

