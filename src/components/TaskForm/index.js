import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, withStyles } from '@material-ui/core';
import styles from './styles';

const TaskForm = ({ open, onClose }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Title</DialogTitle>
      <DialogContent>
        <TextField required label='Required' defaultValue='Hello World' />
        <TextField label='Password' type='password' autoComplete='current-password' />
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={onClose}>Hủy</Button>
        <Button color='primary' onClick={onClose}>Đồng ý</Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(TaskForm);