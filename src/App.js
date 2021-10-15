import { Grid } from '@mui/material';
import React from 'react';
import CardGalaxy from './card/CardGalaxy';
import { Header } from './components/ui/Header';

const App = () => {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item container xs={12} sm={8} m={2}>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
          <Grid item xs={2} mb={2}>
            <CardGalaxy />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
