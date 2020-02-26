import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log("[App.js] Constructor");
  }

  state = {
    persons: [
      { id: '1', name: 'Arfiz', age: 25 },
      { id: '2', name: 'Farez', age: 18 },
      { id: '3', name: 'Farhana', age: 20 }
    ],
    otherState: 'Other value',
    showPersons: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  // componentWillMount() {
  //   console.log("[App.js] componentWillMount");
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    // const person = Object.assign({}, this.state.persons[personIndex]);

    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  render() {

    console.log("[App.js] render" );
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
        title={this.props.appTitle}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now"))
  }
}

export default App;
