import React from 'react';
import { Box, Grid, withStyles } from '@material-ui/core';
import styles from './styles';
import TaskItem from '../TaskItem';

const TaskList = ({ classes, status, tasks, onClickUpdate, onClickDelete }) => {
  return (
    <Grid item xs={12} md={4} key={status.label}>
      <Box mt={2} mb={2}>
        <div className={classes.status}> { status.label } </div>
      </Box>

      <div className={classes.list}>
        { tasks.map((task, index) => {
          return <Box mb={2} key={index}>
            <TaskItem task={task} status={status} onClickUpdate={() => onClickUpdate(task)} onClickDelete={() => onClickDelete(task.id)} />
          </Box>;
        }) }
      </div>
    </Grid>
  );
};

export default withStyles(styles)(TaskList);