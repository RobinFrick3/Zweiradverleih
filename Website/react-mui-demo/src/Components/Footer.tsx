import styled from "@emotion/styled";
import React from "react"
import { Grid,  List,  ListItemText,  Typography,  Button,  Stack,  Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://localhost:3000">
          Greenwheels GmBH & Co KG SE AG
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const footers = [
    {
      title: 'Company',
      description: ['Team', 'Geschichte', 'Standorte'],
    },
    {
      title: 'Interessiert',
      description: [
        'Newsletter abonieren',
        'Unsere Partner',
        'Unterstützen',
      ],
    },
    {
      title: 'Ressourcen',
      description: ['LogIn', 'Register', "So Geht\'\s"],
    },
    {
      title: 'Rechtliches',
      description: ['AGBs', 'DSGVO', 'Haftungsausschluss'],
    },
  ];

export default function Footer() {
  return (
    <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Typography variant="h6" color="#388e3c" gutterBottom>
                About Us
            </Typography>
            <Typography variant="subtitle1" color="text.primary" gutterBottom textAlign={"center"}>
            Wir sind ein engagiertes Team von Experten mit langjähriger Erfahrung in der Branche.
            Unser Ziel ist es, unseren Kunden innovative Lösungen und einen erstklassigen Service zu bieten.
            </Typography>
            <Box
            sx={{
              alignSelf: "center",
              mt: 2,
              color: "sucess",
            }}
            >
                <FacebookIcon sx={{ mr: 1 }} />
                <TwitterIcon sx={{ mr: 1 }} />
                <InstagramIcon />
            </Box>
            </Box>
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="#388e3c" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}