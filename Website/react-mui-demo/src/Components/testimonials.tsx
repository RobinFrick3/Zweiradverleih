import { Container, Grid, Card, CardContent, Typography } from '@mui/material';
import animal1 from '../IMGs/animal1.jpg';
import animal2 from '../IMGs/animal2.jpg';
import animal3 from '../IMGs/animal3.jpg';

export default function Testimonials () {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={3} sx={{ py: 3 }}>
        <Grid item xs={12} md={8} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" color="textPrimary">
            Main Title
          </Typography>
          <Typography variant="body1" color="textPrimary" sx={{ pt: 3 }}>
            fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
            tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
            eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
            scelerisque purus semper eget duis
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <img src={animal1} alt="animal1" width="100%" />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="textPrimary" sx={{ pt: 1 }}>
                Subtitle
              </Typography>
              <Typography variant="body1" color="textPrimary" sx={{ pt: 1 }}>
                fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                eleifend mi in nulla posuere sollicitudin.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <img src={animal2} alt="animal2" width="100%" />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="textPrimary" sx={{ pt: 1 }}>
                Subtitle
              </Typography>
              <Typography variant="body1" color="textPrimary" sx={{ pt: 1 }}>
                fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                eleifend mi in nulla posuere sollicitudin.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <img src={animal3} alt="animal3" width="100%" />
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h3" color="textPrimary" sx={{ pt: 1 }}>
                Subtitle
              </Typography>
              <Typography variant="body1" color="textPrimary" sx={{ pt: 1 }}>
                fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                eleifend mi in nulla posuere sollicitud
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
