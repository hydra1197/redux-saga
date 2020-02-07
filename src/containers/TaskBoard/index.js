import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Grid, withStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { STATUSES } from '../../constants';
import { TaskList, SearchBox } from '../../components';
import TaskForm from '../TaskForm';
import { fetchTaskList, searchTask, setTaskEditData, deleteTask } from '../../actions/task';
import { setModalData } from '../../actions/ui';
import styles from './styles';

const TaskBoard = ({ classes, taskList, fetchTaskList, searchTask, setModalData, setTaskEditData, deleteTask }) => {
  useEffect(() => {
    fetchTaskList();
  }, [fetchTaskList]);

  const renderBoard = () => {
    return (
      <Grid container spacing={3}>
        { STATUSES.map((status, index) => {
          const tasks = taskList.filter(task => task.status === status.value);

          return (
            <TaskList
              key={index}
              status={status}
              tasks={tasks}
              onClickUpdate={task => handleOpenModal('Cập nhật công việc', task)}
              onClickDelete={taskId => confirmDelete(taskId)}
            />
          );
        })}
      </Grid>
    );
  };

  const handleSearch = (e) => {
    searchTask(e.target.value);
  };

  const confirmDelete = taskId => {
    if (window.confirm('Bạn có muốn xóa công việc này ?')) {
      deleteTask(taskId);
    }
  };

  const handleOpenModal = (title, task = {}) => {
    setTaskEditData(task);
    setModalData(true, title, <TaskForm />);
  };

  return (
    <div className={classes.wrapper}>
      <Button variant="contained" color='primary' onClick={() => handleOpenModal('Thêm công việc')}>
        <Add /> Thêm mới công việc
      </Button>

      <Button variant="contained" color='primary' onClick={() => fetchTaskList()} style={{ marginLeft: 15 }}>
        Load Data
      </Button>

      <SearchBox onChange={handleSearch} />

      { renderBoard() }
    </div>
  );
};

const mapStateToProps = state => ({
  taskList: state.task.list,
});

const actionCreators = {
  fetchTaskList,
  searchTask,
  setModalData,
  setTaskEditData,
  deleteTask
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    actionCreators
  )(TaskBoard)
);
