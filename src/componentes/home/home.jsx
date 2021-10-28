import React, {useEffect } from "react";
import { useDispatch} from "react-redux";
import {AllPhone} from "../../redux/actions"
import Cards from "../cards/cards";
import NavBar from "../navbar/navbar";
import { Route, Switch } from "react-router";
function Home(){

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(AllPhone())
    }, [dispatch])


    return(
        <>
           <Route exact path="/home">

           </Route>
        </>
    )


}

export default Home;