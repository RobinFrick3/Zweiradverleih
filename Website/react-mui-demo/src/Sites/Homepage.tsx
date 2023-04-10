import { Box, Grid, Typography, Container } from "@mui/material"
import React from 'react'
// import { Stack, Button } from "@mui/material"
// import LoginIcon from "@mui/icons-material/Login"
import NavLeiste from "../Components/NavLeiste"
import AppCard from "../Components/AppCard"


export const Homepage = () => {
    return (
        <>
        <NavLeiste />
        <Container>
            <Grid container spacing={15}>
                    <AppCard />
                    <AppCard />
                    <AppCard />
            </Grid>
        </Container>
        </>
    )
}

export default Homepage;