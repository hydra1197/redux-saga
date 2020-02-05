import React from 'react';
import { withStyles, ThemeProvider } from '@material-ui/core';
import TaskBoard from '../TaskBoard';
import theme from '../../commons/Theme';
import styles from './styles';

const App = ({ classes }) => {

  return (
    <ThemeProvider theme={theme}>
      <TaskBoard />
    </ThemeProvider>
  );
};

export default withStyles(styles)(App);
