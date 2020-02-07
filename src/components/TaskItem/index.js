import React from 'react';
import { Card, CardActions, CardContent, Grid, Typography, Fab, Icon, withStyles } from '@material-ui/core';
import styles from './styles';

const TaskItem = ({ classes, status, task, onClickUpdate, onClickDelete }) => {
  return (
    <Card>
      <CardContent>
        <Grid container justify='space-between'>
          <Grid item md={8}>
            <Typography component='h2'>{ task.title }</Typography>
          </Grid>
          <Grid item md={4} className={classes.status}>
            { status.label }
          </Grid>
        </Grid>

        <Typography component='p'>{ task.description }</Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <Fab color='primary' aria-label='edit' size='small' onClick={onClickUpdate}>
          <Icon fontSize='small'>edit_icon</Icon>
        </Fab>
        <Fab color='primary' aria-label='edit' size='small' onClick={onClickDelete}>
          <Icon fontSize='small'>delete_icon</Icon>
        </Fab>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(TaskItem);