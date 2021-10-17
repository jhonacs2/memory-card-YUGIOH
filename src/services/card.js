import axios from 'axios';

const baseUrl = 'https://db.ygoprodeck.com/api/v7/randomcard.php';

const getCard = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getFiveCards = () => {
  const request = axios.get(
    'https://db.ygoprodeck.com/api/v7/cardinfo.php?cardset=metal%20raiders&num=6&offset=0'
  );
  return request.then((response) => response.data.data);
};

const cardService = {
  getCard,
  getFiveCards,
};

export default cardService;
