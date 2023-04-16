import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ERoller from "../IMGs/E_Roller.jpg"

export default function ShopCard({id, title, price, battery, image } :any) {
  return (
    <Card sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <CardMedia component="img" height="150" width="400" image={image} alt="Bild" />
      <CardContent>
        <Typography variant="h6" component="div" color={"#4CAF50"}>
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {price} pro Minute fdhfsgjsfggjkndfkjngkjdngbjdfnhjknsfdkjhnsdkjpnbkjxdnfhbkjfdnghjknsfgjhndfjnhbjkdfgnhbkjsfndgjkhnfdgjh
        </Typography>
        <Typography variant="body1" component="p">
          Akku: {battery}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>
      </CardContent>
    </Card>
  );
}