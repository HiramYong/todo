import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import store from '../../redux/index';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import classNames from 'classnames';
import { ToggleTodo, deleteTodo } from '../../redux/actions';

const styles = () => ({
  root: {
    width: '100%',
    maxWidth: 375,
    backgroundColor: '#ffffff',
    borderRadius: '.1rem',
  },
  lineThrough: {
    textDecoration: 'line-through',
  },
  ListItemText: {
    fontSize: '0.36rem',
  },
});


class Section extends React.Component{
  constructor() {
    super();
    this.state = {
      toDoList: [],
      todoCount: {},
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    store.subscribe(() => {
      this.getListItem();
    });
  }

  getListItem() {
    this.setState({
      toDoList: store.getState().todos,
    });
    const todoCount = {
      completedNum: 0,
      totalNum: 0,
    };
    this.state.toDoList.forEach((item) => {
      if(item.completed) {
        todoCount.completedNum++;
      }
    });
    this.todoCount = todoCount;
  }

  handleToggle(id) {
    store.dispatch(ToggleTodo(id));
  }

  handleDelete(id) {
    store.dispatch(deleteTodo(id));
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="section">
        <List className={classes.root}>
          {this.state.toDoList.length === 0 &&
            <li style={{fontSize:'18px'}}>Please enter your task!</li>
          }
          {this.state.toDoList.map(item => (
            <ListItem key={item.id} role={undefined} dense button onClick={() => {this.handleToggle(item.id);}}>
              <Checkbox
                checked={item.completed}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText className={classNames(classes.ListItemText, item.completed ? classes.lineThrough : '')} primary={item.text} />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <DeleteIcon onClick={() => {this.handleDelete(item.id);}}  />
                </IconButton >
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

Section.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Section);
