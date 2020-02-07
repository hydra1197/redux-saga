import React from 'react';
import { connect } from 'react-redux';
import { Modal, withStyles } from '@material-ui/core';
import { setModalData } from '../../actions/ui';
import styles from './styles';

const ModalConfigure = ({ classes, open, title, content, setModalData }) => {
  const handleCloseModal = () => {
    setModalData(false, null, null);
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <div className={classes.modal}>
        <div className={classes.header}>{ title }</div>

        <div className={classes.content}>{ content }</div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  open: state.ui.modal.open,
  title: state.ui.modal.title,
  content: state.ui.modal.content,
});

const actionCreators = {
  setModalData,
};

export default withStyles(styles)(connect(
  mapStateToProps,
  actionCreators
)(ModalConfigure));