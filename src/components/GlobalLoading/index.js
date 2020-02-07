import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import loadingIcon from '../../assets/images/loading.gif';
import styles from './styles';

const GlobalLoading = ({ classes, globalLoading }) => {
  if (!globalLoading) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <img src={loadingIcon} alt='loading' className={classes.icon} />
    </div>
  );
};

const mapStateToProps = state => ({
  globalLoading: state.ui.loading.isLoading
});

const actionCreators = {

};

export default withStyles(styles)(connect(
  mapStateToProps,
  actionCreators
)(GlobalLoading));