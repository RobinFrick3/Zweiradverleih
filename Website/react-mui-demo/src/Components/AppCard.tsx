import { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)({
  display: 'flex',
  height: '300px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
});

const StyledCardActionArea = styled(CardActionArea)({
  display: 'flex',
  alignItems: 'stretch',
  height: '100%',
});

const StyledCardMedia = styled(CardMedia)({
  width: '50%',
  minWidth: '50%',
  height: '100%',
  objectFit: 'cover',
});

const StyledHalfBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  minWidth: '50%',
  backgroundColor: "#2e7d32",
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
  width: '50%',
});

const AppCard = ({ title, text, image, link, setWheel}:any) => {
  
  const handleClick = () => {
    setWheel(title);
  };

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <StyledCard>
        <StyledCardActionArea onClick={handleClick}>
          <StyledHalfBox>
            <StyledCardMedia image = {image} />
          </StyledHalfBox>
          <StyledCardContent>
            <Typography gutterBottom variant="h4" component="h2" color={"#4CAF50"} style={{ textDecoration: 'none' }}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" style={{ textDecoration: 'none' }}>
              {text}
            </Typography>
          </StyledCardContent>
        </StyledCardActionArea>
      </StyledCard>
    </Link>
  );
};

export default AppCard;
