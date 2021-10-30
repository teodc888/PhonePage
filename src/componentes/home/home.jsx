import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AllPhone } from "../../redux/actions";
import Cards from "../cards/cards";
import NavBar from "../navbar/navbar";
import DataPhoneInfo from "../dataPhone/dataPhone";
import Informacion from "../informacion/informacion";
import { Route, Switch } from "react-router";
import { Container } from "@mui/material";
function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllPhone());
  }, [dispatch]);


  function handleClick(e){
    e.preventDefault(e);
    dispatch(AllPhone())
  }
  return (
    <>
      <Switch>
        <Route exact path="/">
  
        </Route>
        <Container>
          <NavBar />
          <Route exact path="/home">
            <Cards />
            <button className="volver" onClick={handleClick}>RECARGAR</button>
          </Route>
          <Route exact path="/phone/:phone" component={Informacion}></Route>
          <Route exact path="/phone/:phone/:info" component={DataPhoneInfo}></Route>

        </Container>
      </Switch>
    </>
  );
}

export default Home;
