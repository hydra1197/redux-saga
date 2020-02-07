import React from 'react';
import { withStyles, TextField } from '@material-ui/core';
import styles from './styles';

const SearchBox = ({ classes, onChange }) => {
  return (
    <div className={classes.wrapper}>
      <TextField
        className={classes.search}
        autoComplete='off'
        placeholder='Nhập từ khóa'
        onChange={onChange}
      />
    </div>
  );
};

export default withStyles(styles)(SearchBox);