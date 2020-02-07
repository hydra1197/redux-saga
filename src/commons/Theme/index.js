import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#673ab7',
    secondary: '#4caf50',
    error: '#f44336',
    textColor: '#ffffff'
  },
  typography: {
    fontFamily: 'Roboto'
  },
});

export default theme;