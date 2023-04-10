import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

function Test() {

  return (
    <Card className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          image="https://example.com/e-roller.jpg"
          title="E-Roller-Verleih"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            E-Roller-Verleih
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Entdecken Sie unsere Flotte von E-Rollern, die Ihnen eine umweltfreundliche und bequeme Möglichkeit bieten, die Stadt zu erkunden.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Mehr erfahren
        </Button>
        <Button size="small" color="primary">
          Jetzt buchen
        </Button>
      </CardActions>
    </Card>
  );
}

export default Test;