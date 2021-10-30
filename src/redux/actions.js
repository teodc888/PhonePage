export const GET_PHONE= "GET_PHONE" 
export const ALL_PHONE= "ALL_PHONE" 
export const FILTRADO_NOMBRE="FILTRADO_NOMBRE"
export const GET_PHONE_INFO="GET_PHONE_INFO"

export function AllPhone(){
    return function(dispatch) {
        fetch("https://api-mobilespecs.azharimm.site/v2/brands")
            .then(response => response.json())
            .then(json => {
            dispatch({ type: ALL_PHONE, payload: json.data });
            });
        };
}

export function GetPhone (brand_slug){
    return function (dispatch){
        fetch(`https://api-mobilespecs.azharimm.site/v2/brands/${brand_slug}` )
            .then(response => response.json())
            .then(json => {
            dispatch({ type: GET_PHONE, payload: json.data });
            });
    
    };
    
}
export function GetPhoneInfo (slug){
    return function (dispatch){
        fetch(`https://api-mobilespecs.azharimm.site/v2/${slug}` )
            .then(response => response.json())
            .then(json => {
            dispatch({ type: GET_PHONE_INFO, payload: json.data });
            });
    
    };
    
}

export function FiltradoPorNombre (payload){
    return{
        type:FILTRADO_NOMBRE,
        payload
    }

}