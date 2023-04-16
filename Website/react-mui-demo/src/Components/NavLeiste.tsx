import React from 'react'
import { AppBar, Box, Button, Container, IconButton, styled, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Logo from '../IMGs/Greenweels.png';
import LoginIcon from "@mui/icons-material/Login"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export const Navigation = ({loggedInUser}: any) => {

    const LinkItem = styled(Typography) (({theme}) => ({
        fontSize: "15px",
        color: "#000",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover":{
            color: "#4CAF50"
            //color: "#1B5E20"
        }
    }));

    const LinkItemsBox = styled(Box) (({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }));

    const NavButton = styled(Button) (({theme}) => ({
        display: "none",
        color: "transparent",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "flex"
        }
    }));

    const NavIcon = styled(MenuIcon) (({theme}) => ({
        display: "felx",
        cursor: "pointer",
        color: "#0000",
        marginRight: "80px",
//        [theme.breakpoints.down("md")]: {
//            display: "flex"
//        }
    }));

    const NavContainer = styled(Container) (({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(1)
        }
    }));

    const NavBar = styled(AppBar) (({theme}) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
        backgroundColor: "#ffff",
        boxShadow: "1px 2px 9px #0006",
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(0.5),
            height: "60px"
        }
    }));

    const NavLogo = styled("img") (({theme}) => ({
        cursor: "pointer",
        width: "140px",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    }));

    return (
        <>
        <NavBar>
            <NavContainer>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton color="success" sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}><MenuIcon /></IconButton>
                        <NavLogo src={Logo} alt="logo" />
                    </Box>
                    <LinkItemsBox>
                        <Link to={"/"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">HOME</LinkItem></Link>
                        <Link to={"/SoFunktionierts"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">SO GEHT'S</LinkItem></Link>
                        <Link to={"/Preise"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">PREISE</LinkItem></Link>
                        <Link to={"/Fragen"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">HÄUFIGE FRAGEN</LinkItem></Link>
                    </LinkItemsBox>
                </Box>
                {loggedInUser!="" ? (
                <Link to={"/LogIn"} style={{ textDecoration: 'none' }}>
                    <Box display="flex" justifyContent="space-between" sx={{ border: "1px solid #DCDCE4",
                    borderRadius: "100px", cursor: "pointer", gap:3, padding: "8px",}}>
                    <AccountCircleIcon sx={{color:"#000000"}}/>
                    <Typography color="#388e3c"fontWeight="bold" fontSize="15px" sx={{color:"#4CAF50"}}>
                        {loggedInUser}
                    </Typography>
                </Box>
                </Link>
                
                ) : (
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                    <Link to={"/LogIn"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">LogIn</LinkItem></Link>
                        <Button variant="contained" color="success" startIcon={<LoginIcon />} component= {Link} to="/Register">Register</Button>
                    </Box>
                )}
            </NavContainer>
        </NavBar>
        </>   
    );
}

export default Navigation;