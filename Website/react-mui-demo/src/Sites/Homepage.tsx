import { Box, Grid, Typography, Container } from "@mui/material"
import { Stack, Button } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import NavLeiste from "../Components/NavLeiste"
import AppCard from "../Components/AppCard"
import Hero from "../Components/Hero"


export const Homepage = () => {
    return (
        <>
        <NavLeiste />
        <Hero />
            <Box className="FirstSection">
                <Typography variant="h1" sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    Roller mieten in Mannheim: Einfach. Lautlos. Umweldfreundlich.
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    Entdecken Sie die Freiheit und Flexibilität, die Ihnen unsere hochwertigen E-Bikes und E-Scooter bieten. Ob für eine entspannte Tour durch die Stadt, einen Ausflug ins Grüne oder einfach nur für den täglichen Weg zur Arbeit - unsere E-Zweiräder sind die perfekte Wahl für umweltbewusste und moderne Mobilität.
                </Typography>
            </Box>
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