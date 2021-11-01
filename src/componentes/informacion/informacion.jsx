import "./informacion.css"
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPhone } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import { Stack } from "@mui/material";
import { AllPhone } from "../../redux/actions";


function Informacion(props){

    const dispatch = useDispatch();
    const history = useHistory();


    
    useEffect(() =>{
        dispatch(GetPhone(props.match.params.phone))
    }, [dispatch])
    
    const phone = useSelector((state) => state.phone)

 
    function handleClick(e){
        e.preventDefault(e);
        dispatch(AllPhone())
        history.push("/home")

      }


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
                    
                        <div className="contenedorInfo" key={el.phone_name}>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={0}
                            >
                            <h1 className="name">{el.phone_name}</h1>
                            <Link to={`/phone/${props.match.params.phone}/${el.slug}`}>
                                <img alt="Imagen"  src={el.image}/>
                            </Link>
                            </Stack>
                        </div>

                       
                    )
                })
            }
            <Link to="/home">
                <button className="volver" onClick={handleClick}>VOLVER</button>
            </Link>

        </div>
    )
}
export default Informacion;