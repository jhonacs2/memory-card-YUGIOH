import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

export default function CardGalaxy({ card, handleClickCard }) {
  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea onClick={() => handleClickCard(card.id)}>
          <CardMedia
            component='img'
            style={{ maxWidth: '100%', height: 'auto' }}
            image={card.card_images[0].image_url}
            alt='green iguana'
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h6'
              component='div'
              align='center'
            >
              {card.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
