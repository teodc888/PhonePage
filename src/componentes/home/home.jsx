import React, {useEffect } from "react";
import { useDispatch} from "react-redux";
import {AllPhone} from "../../redux/actions"
import Cards from "../cards/cards";
function Home(){

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(AllPhone())
    }, [dispatch])


    return(
        <>
            <Cards/>
        </>
    )


}

export default Home;