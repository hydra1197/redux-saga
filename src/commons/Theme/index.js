import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#673ab7',
    secondary: '#4caf50',
    error: '#f44336',
  },
  typography: {
    fontFamily: 'Roboto'
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#cccccc',
    textColor: '#ffffff',
  }
});

export default theme;