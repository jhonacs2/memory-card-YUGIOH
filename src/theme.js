import { createTheme } from '@mui/material';
import { green, orange, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: red,
    secondary: green,
  },

  status: {
    danger: orange[500],
  },
});

export default theme;
