import { Button, Container, Stack } from "@mui/material";
import React from "react";
import {Link} from "react-router-dom"

function Landing(){

    return(
        <>
            <Container>
            <Stack
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={0}
                >
                <h1>Bienvenidos</h1>
                <Link to="/home">
                    <Button variant="contained">Entrar</Button>
                </Link>
            </Stack>
            

            </Container>
        </>
    )
}

export default Landing;