import { Box, Grid, Typography, Container } from "@mui/material"
import { Stack, Button } from "@mui/material"
import LoginIcon from "@mui/icons-material/Login"
import NavLeiste from "../Components/NavLeiste"
import AppCard from "../Components/AppCard"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import ERoller from '../IMGs/E_Roller.jpg';
import EMotorrad from '../IMGs/E_Motorrad.jpg';
import EBike from '../IMGs/E_Bike.jpg';
import EScooter from '../IMGs/E_Scooter.jpg';


export const Homepage = ({loggedInUser, setWheel}: any) => {
    const link = loggedInUser!="" ? "/Shop" : "/Login"
    
    return (
        <>
        <NavLeiste loggedInUser={loggedInUser}/>
        <Hero />
            <Box className="FirstSection" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Typography variant="h1" sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                    Roller mieten in Mannheim: Einfach. Lautlos. Umweltfreundlich.
                </Typography>
                <Typography sx={{ display: "flex", alignSelf: "center", justifyContent: "center", textAlign:"center", width:"75%"}}>
                    Entdecken Sie die Freiheit und Flexibilität, die Ihnen unsere hochwertigen E-Bikes und E-Scooter bieten. Ob für eine entspannte Tour durch die Stadt, einen Ausflug ins Grüne oder einfach nur für den täglichen Weg zur Arbeit - unsere E-Zweiräder sind die perfekte Wahl für umweltbewusste und moderne Mobilität.
                </Typography>
            </Box>
        <Container sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
          display: 'grid',
          gap: '30px', 
        }}>
            <AppCard
                title="E-Bike"
                text= "Unsere E-Bikes sind eine komfortable und bequeme Möglichkeit, die Stadt in Ihrem eigenen Tempo zu erkunden. Mit Pedal-Unterstützungstechnologie können Sie mühelos durch die Straßen gleiten und mehr Strecke zurücklegen als auf einem traditionellen Fahrrad. Außerdem sind unsere E-Bikes mit leistungsstarken Batterien ausgestattet, die Sie auf längere Fahrten mitnehmen können, ohne ins Schwitzen zu geraten. Ob Sie die Stadt besichtigen, Sport treiben oder Besorgungen erledigen, unsere E-Bikes sind die perfekte Wahl für jeden, der eine einfache und angenehme Fahrt sucht."
                image = {EBike}
                link = "/Shop"
                setWheel={setWheel}
            />
            <AppCard
                title="E-Roller"
                text= "Unsere E-Scooter sind die perfekte Lösung für kurze Fahrten in der Stadt. Mit einem leichten und kompakten Design sind sie einfach zu manövrieren und können Sie schnell und effizient an Ihr Ziel bringen. Außerdem sind sie umweltfreundlich und produzieren keine Emissionen, was sie zu einer nachhaltigen Wahl für den städtischen Verkehr macht. Egal, ob Sie zur Arbeit pendeln, Besorgungen erledigen oder einfach eine gemütliche Fahrt genießen möchten, unsere E-Scooter sind der perfekte Weg, um sich fortzubewegen."
                image = {ERoller}
                link = "/Shop"
                setWheel={setWheel}
            />
            <AppCard
                title="E-Moped"
                text= "Unsere E-Motorroller sind die perfekte Kombination aus Kraft und Komfort. Mit einer Höchstgeschwindigkeit von bis zu 45 km/h sind sie perfekt für längere Fahrten in der Stadt oder sogar darüber hinaus. Außerdem sind sie mit allen modernen Funktionen ausgestattet, die Sie benötigen, einschließlich eines bequemen Sitzes, ausreichend Stauraum und leistungsstarker Scheinwerfer für Nachtfahrten. Unsere E-Motorroller sind die ideale Wahl für jeden, der eine schnelle, effiziente und komfortable Möglichkeit sucht, sich in der Stadt fortzubewegen."
                image = {EScooter}
                link = "/Shop"
                setWheel={setWheel}
            />
            <AppCard
                title="E-Motorrad"
                text= "Unsere E-Motorräder sind die perfekte Wahl für alle, die eine leistungsstarke und umweltfreundliche Fahrt suchen. Mit einem kraftvollen Elektromotor können Sie Geschwindigkeiten von bis zu 120 km/h erreichen und gleichzeitig die Umweltbelastung minimieren. Unsere E-Motorräder sind auch in Bezug auf ihre Reichweite beeindruckend - sie können bis zu 200 Kilometer mit einer einzigen Ladung zurücklegen. Das bedeutet, dass Sie längere Strecken fahren können, ohne sich Gedanken über das Aufladen machen zu müssen."
                image = {EMotorrad}
                link = "/Shop"
                setWheel={setWheel}
            /> 
        </Container>
        <Footer />
        </>
    )
}

export default Homepage;