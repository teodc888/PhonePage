import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FiltradoPorNombre } from "../../redux/actions";

function StyledInput(){
    const dispatch = useDispatch();
    const[name, setName]= useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        dispatch(FiltradoPorNombre(name))
        
  
    }

    return(
        <div>
            <input 
            type="text"
            placeholder="Buscar Celulares..."
            onChange={e => handleInputChange(e)}
            className="buscador"
            />

        </div>
    )
}

export default StyledInput;