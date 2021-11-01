import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetPhoneInfo } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./dataPhone.css"
import { Stack } from "@mui/material";



function DataPhoneInfo(props){

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(GetPhoneInfo(props.match.params.info))
    }, [dispatch])

    const phone = useSelector((state) => state.phoneInfo)

 
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
                               <h1>{phone?.phone_name}</h1>
                                <img alt="Imagen" src={phone?.phone_images ? phone?.phone_images[0] : <h1>no hay nada</h1>} />
                                <h2>{phone?.release_date}</h2>
                                <h2>dimensiones: {phone?.dimension}</h2>
                                <h2>SO: {phone?.os}</h2>
                                <h2>Almacenamiento: {phone?.storage}</h2>
                            </Stack>
                </div>
            }
            {
                 phone?.specifications === undefined || phone?.specifications.length === 0? <h1>...CARGANDO</h1>: phone.specifications.map((el) =>{
                     return(
                         <>
                            <Stack
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={0}
                                >
                          
                               <h1 key={el.id}>{el.title}</h1>
                                {
                                    el.specs.map((el) =>{
                                        return(
                                            <div className="contenedorDataInfo" key={el.id}>
                                                
                                                <p>{el.key}</p>
                                                <p>{el.val}</p>
                                                <br />
                                            </div>
                                        )
                                    })                      
                                }
                           
                           </Stack>

                         </>
                     )
                 })
            }
                    <Link to={`/phone/${props.match.params.phone}`}>
                <button className="volver">VOLVER</button>
                    </Link>

        </div>
    )
}
export default DataPhoneInfo;

