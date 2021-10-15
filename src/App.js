import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CardsScreen } from './components/card/CardsScreen';
import { Header } from './components/ui/Header';

const App = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [level, setLevel] = useState(0);
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header score={score} bestScore={bestScore} />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} m={2}>
          <Grid item>
            <Typography variant='h2' align='center' mb={2}>
              Level {level}
            </Typography>
          </Grid>
          <CardsScreen
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
            level={level}
            setLevel={setLevel}
          />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
