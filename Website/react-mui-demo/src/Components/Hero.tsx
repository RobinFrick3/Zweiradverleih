import { Box, Button, Typography, styled } from "@mui/material";
import bgImg from '../IMGs/hero.jpg';
import { Link } from "react-router-dom";


export const Hero = () => {
    const BgImage = styled("img") (({theme}) => ({
        width: "100%",
        height: "100%"
    }));
//                <Button className="HeroButton" variant="contained" color="success" component= {Link} to="/Register">Jetzt Loslegen</Button>
    return (
        <>
        <BgImage src={bgImg} alt="bgImg" className="HeroBild"/>
        <Box className="HeroContent">
            <Box className="ContentBox">
                <h1 className="Hedding">E-Mobility in Mannheim</h1>
            </Box>
       </Box>
       </>
    );
}

export default Hero;