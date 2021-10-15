import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardGalaxy() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          style={{ maxWidth: '100%', height: 'auto' }}
          image='https://storage.googleapis.com/ygoprodeck.com/pics/7548747.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            Magistus Theurgy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
