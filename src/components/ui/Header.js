import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

export const Header = () => {
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
          <MenuIcon />
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
            Score : 1
          </Typography>
          <Typography variant='h6' component='div'>
            Best Score : 1
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
