import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import React from 'react'


export const LogIn = () => {
    return (
        <>
        <Container>
            <Box display="flex" flexDirection={"column"} alignItems="center" gap="10px">
                <Typography variant="h1">
                    LogIn
                </Typography>
                <TextField color="success"/>
                <TextField color="success"/>
                <Button variant="contained" color="success"  component= {Link} to="/">Login</Button>
                <Box display={"flex"} flexDirection={"row"} gap="4px">
                    <Typography variant="body2">
                        Keinen Account?
                    </Typography>
                    <Link to={"/Register"} style={{ textDecoration: 'none' }}>
                        <Typography variant="body2">
                            Registeren
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Container>
        
        </>
    )
}

export default LogIn;