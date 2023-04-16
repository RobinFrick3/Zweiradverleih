import React, { useState, useEffect } from 'react';
import Karte from "../Components/Karte"
import NavLeiste from "../Components/NavLeiste"
import { AppBar, Box, Button, Card, CardContent, Container, List, ListItem, ListItemText, TextField, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import ShopCard from "../Components/ShopCard"
import axios from 'axios';

export default function Shop({loggedInUser, wheel}:any) {
  
  const [stationIndex, setStationIndex] = useState();
  console.log(stationIndex);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //const navigate = useNavigate();
    const data = new FormData(event.currentTarget);
    let dieSation = data.get('Station');
      axios.post('http://localhost:5000/getWheels', {dieSation, wheel}).then(res => {
            if(res.data !=0){
              
              //navigate('/');  
            }
            console.log(res);
        })
  };

  return (
      <>
        <NavLeiste loggedInUser={loggedInUser}/>
        <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', mt:"20px" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {wheel} in deiner nähe finden.
                </Typography>
                <Karte setStationIndex={setStationIndex} stationIndex={stationIndex}/>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ flexGrow: 1, height: '80vh', overflow: 'auto' }}>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
              {[...Array(20)].map((_, index) => (
                <ListItem key={index}>
                  <ShopCard />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        </Container>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField id="Station"></TextField>
          <Button type="submit">Confirm</Button>
        </Box>
        
      </>
    );
}
