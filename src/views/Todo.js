import React from 'react';
import Footer from '../containers/Todos/Footer.js';
import Section from '../containers/Todos/Section.js';

export default class ToDos extends React.Component{
  render(){
    return (
      <div id="Todo">
        <h1>Todo App</h1>
        <Section />
        <Footer />
      </div>
    );
  }
}