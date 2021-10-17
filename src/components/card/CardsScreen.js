import { Grid } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import cardService from '../../services/card';
import CardGalaxy from './CardGalaxy';

export const CardsScreen = ({
  score,
  setScore,
  bestScore,
  setBestScore,
  level,
  setLevel,
}) => {
  const [cards, setCards] = useState([]);
  const [matchCards, setMatchCards] = useState([]);

  const randomeCards = cards.sort(function () {
    return Math.random() - 0.5;
  });

  const newCard = async () => {
    const newCard = await cardService.getCard();
    setCards(cards.concat(newCard));
  };

  const initialGame = useCallback(async () => {
    const newCards = await cardService.getFiveCards();
    setCards(newCards);
  }, []);

  useEffect(() => {
    initialGame();
  }, [initialGame]);

  const handleClickCard = (id) => {
    setMatchCards(matchCards.concat(id));
    setScore(score + 1);
    if (score >= bestScore) {
      setBestScore(bestScore + 1);
    }

    if (matchCards.includes(id)) {
      initialGame();
      setScore(0);
      setLevel(0);
      setMatchCards([]);
    }

    if (matchCards.length === cards.length - 1) {
      newCard();
      setMatchCards([]);
      setLevel(level + 1);
    }
  };

  return (
    <Grid item container spacing={2}>
      {randomeCards.map((card) => (
        <CardGalaxy
          key={card.id}
          card={card}
          handleClickCard={handleClickCard}
        />
      ))}
    </Grid>
  );
};
