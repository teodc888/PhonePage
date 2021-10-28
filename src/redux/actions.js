export const GET_PHONE= "GET_PHONE" 
export const ALL_PHONE= "ALL_PHONE" 

export function AllPhone(){
    return function(dispatch) {
        fetch("https://api-mobilespecs.azharimm.site/v2/brands")
            .then(response => response.json())
            .then(json => {
            dispatch({ type: ALL_PHONE, payload: json.data });
            });
        };
}

export function GetPhone (id){
    return function (dispatch){
        fetch("https://api-mobilespecs.azharimm.site/v2/brands/" + id )
            .then(response => response.json())
            .then(json => {
            dispatch({ type: GET_PHONE, payload: json.data });
            });
    
    };
    
}