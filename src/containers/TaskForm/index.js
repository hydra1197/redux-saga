import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { Box, Button, Grid, withStyles } from '@material-ui/core';
import { renderTextField, renderSelectField } from '../../components';
import { setModalData } from '../../actions/ui';
import validate from './validate';
import { createNewTask, updateTask } from '../../actions/task';
import styles from './styles';

let TaskForm = ({ classes, initialValues, handleSubmit, invalid, submitting, setModalData, createNewTask, updateTask }) => {
  const handleSubmitForm = data => {
    if (initialValues && initialValues.id) {
      data.status = parseInt(data.status);
      updateTask(data);
    } else {
      createNewTask(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field className={classes.input} name='title' label='Tiêu đề' component={renderTextField} />
        </Grid>

        <Grid item xs={12}>
          <Field className={classes.input} name='description' label='Mô tả' component={renderTextField} />
        </Grid>

        { initialValues && initialValues.id && (
          <Grid item xs={12}>
            <Field
              name='status'
              component={renderSelectField}
              label='Trạng thái'
            >
              <option value='' />
              <option value={0}>Ready</option>
              <option value={1}>In Progress</option>
              <option value={2}>Completed</option>
            </Field>
          </Grid>
        )}

        <Grid item xs={12}>
          <Box display='flex' justifyContent='flex-end' mt={2}>
            <Button onClick={() => setModalData(false, null, null)}>Đóng</Button>
            <Button variant='contained' color='primary' style={{ marginLeft: 15 }} type='submit' disabled={invalid || submitting}>Lưu</Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

const mapStateToProps = state => ({
  globalLoading: state.ui.loading.isLoading,
  initialValues: state.task.dataEdited
});

const actionCreators = {
  setModalData,
  createNewTask,
  updateTask
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, actionCreators),
  reduxForm({ form: 'task_form', validate }),
)(TaskForm);


