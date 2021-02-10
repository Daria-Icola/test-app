import { ADD_CONTACT } from './constants'


let initialState = {
    "contact":  ""
    
}


export const formPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CONTACT:
                return {
                    
                    id: action.number,
                    name: action.name,
                    number: action.number,
                    
            }
        default :
            return state
    }
}

