import {ALL_PHONE, GET_PHONE} from "./actions"


const inicialState = {
    phones: [],
    phone: []
}

function rootReducer(state = inicialState, action){
    if(action.type === ALL_PHONE){
        return{
            ...state,
            phones: action.payload,
            
        }
    }   
    if(action.type === GET_PHONE){
        return{
            ...state,
            phone: action.payload
        }
    }
    
    return state
    
}

export default rootReducer;