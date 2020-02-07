import React from 'react';
import { Provider } from 'react-redux';
import { withStyles, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import TaskBoard from '../TaskBoard';
import theme from '../../commons/Theme';
import storeConfigure from '../../redux/storeConfigure';
import { GlobalLoading, Modal } from '../../components';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles';

const store = storeConfigure();

const App = ({ classes }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <TaskBoard />
        <GlobalLoading/>
        <Modal />
        <ToastContainer />
      </ThemeProvider>
    </Provider>
  );
};

export default withStyles(styles)(App);
