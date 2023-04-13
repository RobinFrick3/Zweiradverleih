import React, {useRef} from 'react';
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

//<Link to="/" style={{ textDecoration: 'none' }}></Link>

export const LogIn = () => {
    
    const navigate = useNavigate();

    function loginTry () {
        const derName = UserName.current?.value;
        const dasPassword = Password.current?.value;
        axios.post('http://localhost:5000/validatePassword', {derName, dasPassword}).then(res => {
            if(res.data.validation){
                navigate('/');  
            }
            console.log(res);
        })
    }
    
    
    const UserName = useRef<HTMLInputElement>();
    const Password = useRef<HTMLInputElement>();

    return (
        <>
        <Container>
            <Box display="flex" flexDirection={"column"} alignItems="center" gap="10px">
                <Typography variant="h1">
                    LogIn
                </Typography>
                <TextField inputRef={UserName} color="success"/>
                <TextField inputRef={Password} color="success"/>
                <Button onClick={loginTry} variant="contained" color="success">Login</Button>
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