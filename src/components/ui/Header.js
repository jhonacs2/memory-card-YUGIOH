import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import AttributionIcon from '@mui/icons-material/Attribution';

export const Header = ({ score, bestScore }) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <AttributionIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          YU - GI - OH
        </Typography>
        <Box>
          <Typography
            variant='h6'
            component='div'
            style={{ color: '#4caf50', fontWeight: 600 }}
          >
            Score : {score}
          </Typography>
          <Typography variant='h6' component='div'>
            Best Score : {bestScore}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
