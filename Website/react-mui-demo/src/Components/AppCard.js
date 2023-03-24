import { Grid, Paper, Typography, Box } from "@mui/material"
import ERoller from '../IMGs/E_Roller.jpg';
import {spacing} from '@mui/system'

const AppCard = () => {
    return(
        <Grid item sx={12}>
            <Paper elevation= {7} >
                <Box sx={{display:"flex", flexDirection:"row", gap:"100px"}}>
                    <img src={ERoller} alt="Roller" className="HomeCard"/>
                    <Typography variant="h1" mr={28}>
                        Roller
                    </Typography>
                </Box >
            </Paper>
        </Grid>
    )
}

export default AppCard;