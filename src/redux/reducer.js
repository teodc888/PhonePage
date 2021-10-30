import {ALL_PHONE, GET_PHONE, FILTRADO_NOMBRE, GET_PHONE_INFO} from "./actions"


const inicialState = {
    phones: [],
    phoneFilter: [],
    phone: [],
    phoneInfo:[]
}

function rootReducer(state = inicialState, action){
    if(action.type === ALL_PHONE){
        return{
            ...state,
            phones: action.payload,
            phoneFilter: action.payload
            
        }
    }   
    if(action.type === GET_PHONE){
        return{
            ...state,
            phone: action.payload
        }
    }
    if(action.type === FILTRADO_NOMBRE){
        const phone = state.phoneFilter;
        const nameFiltrado = phone.filter((el) => {
            if(el.brand_name.toString().toLowerCase().includes(action.payload.toLowerCase())){
                return el;
            }
        }) 
        console.log(nameFiltrado)
        return{
            ...state,
            phones: nameFiltrado,
        }
    }
    if(action.type === GET_PHONE_INFO){
        return{
            ...state,
            phoneInfo: action.payload
        }
    }
    return state
    
}

export default rootReducer;