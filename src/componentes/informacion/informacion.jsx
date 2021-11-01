import "./informacion.css"
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPhone } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

function Informacion(props){

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(GetPhone(props.match.params.phone))
    }, [dispatch])

    const phone = useSelector((state) => state.phone)

    console.log(phone)
    return(
        <div className="prueba">
            {
                <div>
                  <Stack
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={0}
                    >
                    <h1 className="name">{phone.title}</h1>
                    </Stack>
                </div>
            }
            {
                phone?.phones === undefined || phone?.phones.length === 0? <h1>...CARGANDO</h1>: phone.phones.map((el) =>{
                    return(
                    
                        <div key={el.phone_name}>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={0}
                            >
                            <h1 >{el.phone_name}</h1>
                            <h2 >{el.brand}</h2>
                            <Link to={`/phone/${props.match.params.phone}/${el.slug}`}>
                                <img  src={el.image}/>
                            </Link>
                            </Stack>
                        </div>

                       
                    )
                })
            }
            <Link to="/home">
                <button className="volver">VOLVER</button>
            </Link>

        </div>
    )
}
export default Informacion;