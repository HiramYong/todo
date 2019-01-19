import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { addTodo } from '../../redux/actions';
import store from '../../redux/index';

const styles = (theme) => ({
  TextField: {
    width: '100%',
    height: '.8rem',
    borderRadius: '.1rem',
    fontSize: 10,
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right',
    backgroundColor: '#f50057',
    height: '.2rem'
  },
  iconSmall: {
    fontSize: 20,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Footer extends React.Component{
  constructor() {
    super();
    this.state = {
      taskValue: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.hadleInputChange = this.hadleInputChange.bind(this);
  }
  handleAddTodo(val) {
    store.dispatch(addTodo(val));
    this.setState({
      taskValue: '',
    });
  }

  hadleInputChange(event) {
    this.setState({
      taskValue: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="footer">
        <TextField
          className={classes.TextField}
          id="outlined-bare"
          margin="normal"
          variant="outlined"
          value={this.state.taskValue}
          placeholder="What's your task?"
          onChange={() => {this.hadleInputChange(event, this.state.taskValue);}}
        />
        <Button variant="contained" color="primary"
          className={classNames(classes.button, classes.iconSmall)}
          onClick={() => {this.handleAddTodo(this.state.taskValue);}}
        >
          Save
        </Button>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
