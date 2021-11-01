import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FiltradoPorNombre } from "../../redux/actions";
import { Stack } from "@mui/material";
import "./buscador.css"
function Buscador(){
    const dispatch = useDispatch();
    const[name, setName]= useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        dispatch(FiltradoPorNombre(name))
        
  
    }

    return(
        <div>
            <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={0}
                >
                <input
                className="buscador" 
                type="text"
                placeholder="Buscar Marcas..."
                onChange={e => handleInputChange(e)}
                
                />
            </Stack>

        </div>
    )
}

export default Buscador;