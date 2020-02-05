import React, {useState} from 'react';
import {
  Button,
  Grid,
  withStyles,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { STATUSES } from '../../constants';
import { TaskList, TaskForm } from '../../components';
import styles from './styles';

const TaskBoard = ({ classes }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const listTask = [
    {
      id: 1,
      title: 'Read book',
      description: 'Read material UI book',
      status: 0,
    },
    {
      id: 2,
      title: 'Play football',
      description: 'With my friend',
      status: 1,
    },
    {
      id: 3,
      title: 'Play game',
      description: 'Contra, Mario',
      status: 2,
    }
  ];

  const renderBoard = () => {
    return (
      <Grid container spacing={3}>
        { STATUSES.map((status, index) => {
          const tasks = listTask.filter(task => task.status === status.value);

          return <TaskList key={index} status={status} tasks={tasks} />;
        })}
      </Grid>
    );
  };

  return (
    <div className={classes.wrapper}>
      <Button variant="contained" color='primary' onClick={() => setOpenDialog(true)}>
        <Add /> Thêm mới công việc
      </Button>

      { renderBoard() }

      <TaskForm onClose={() => setOpenDialog(false)} open={openDialog} />
    </div>
  );
};

export default withStyles(styles)(TaskBoard);
