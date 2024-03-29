import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import NavLeiste from "../Components/NavLeiste"
import Footer from '../Components/Footer';

const tiers = [
  {
    title: 'Breezy Ride',
    price: '0',
    description: [
      'Kosten: 0,30€  pro Minute',
      'Keine Vorabgebühren oder Abonnementkosten',
      'Nutzer zahlen nur für die Zeit, in der sie den E-Scooter benutzen',
    ],
    buttonText: 'Jetzt anmelden',
    buttonVariant: 'outlined',
  },
  {
    title: 'Eco-Motion',
    subheader: 'Most popular',
    price: '15',
    description: [
      '50 kostenlosen Minuten pro Monat',
      'Kosten: 0,20 € pro Minute',
      'Kostenlose reservierung',
    ],
    buttonText: 'Jetzt anmelden',
    buttonVariant: 'contained',
  },
  {
    title: 'Climate Cruiser',
    price: '50',
    description: [
      'Keine Kosten pro Minute',
      'Kostenlose reservierung',
    ],
    buttonText: 'Jetzt anmelden',
    buttonVariant: 'outlined',
  },
];

function PricingContent({loggedInUser}: any) {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <NavLeiste loggedInUser={loggedInUser}/>
      {/* Hero unit */}
      <Container disableGutters component="main" sx={{ pt: 10, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="#4CAF50"
          gutterBottom
        >
          Preise
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        Ob Sie eine schnelle und einfache Fahrt, eine gemütliche Fahrradtour oder ein schnelles und kraftvolles Fortbewegungsmittel suchen, unsere Elektrofahrzeuge haben Sie abgedeckt. Buchen Sie jetzt und erleben Sie die Zukunft der städtischen Mobilität mit unseren umweltfreundlichen und bequemen Elektrofahrzeugen!
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Eco-Motion' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      €{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    color='success'
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}