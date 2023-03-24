import React from 'react'
import { AppBar, Box, Button, Container, IconButton, styled, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Logo from '../IMGs/Greenweels.png';
import LoginIcon from "@mui/icons-material/Login"
import { Link } from 'react-router-dom';

export const Navigation = () => {
    
    const LinkItem = styled(Typography) (({theme}) => ({
        fontSize: "17px",
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
        gap: theme.spacing(3),
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
        marginRight: theme.spacing(0.5),
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
        height: "80px",
        backgroundColor: "#0000",
        justifyContent: "space-between",
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
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton color="success" sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}><MenuIcon /></IconButton>
                        <NavLogo src={Logo} alt="logo" />
                    </Box>
                    <LinkItemsBox>
                        <Link to={"/"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">Start</LinkItem></Link>
                        <Link to={"/SoFunktionierts"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">So funktioniert's</LinkItem></Link>
                        <Link to={"/Preise"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">Preise</LinkItem></Link>
                        <Link to={"/Fragen"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">Häufige Fragen</LinkItem></Link>
                    </LinkItemsBox>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "30px" }}>
                <Link to={"/LogIn"} style={{ textDecoration: 'none' }}><LinkItem variant="body2">LogIn</LinkItem></Link>
                    <Button variant="contained" color="success" startIcon={<LoginIcon />} component= {Link} to="/Register">Register</Button>
                </Box>
            </NavContainer>
        </NavBar>
        </>   
    );
}

export default Navigation;