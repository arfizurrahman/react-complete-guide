import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log("[Persons.js] getDerivedStateFromProps");
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log("[Persons.js] componentWillRecieveProps", props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Persons.js] Should component update");
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Persons.js] getSnapshotBeforeUpdate");
        return { message: 'snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("[Persons.js] componentDidUpdate");
        console.log(snapshot);
    }

    render() {
        console.log("[Persons.js] rendering...");
        return this.props.persons.map((person, index) => {
            return (<Person
                key={person.id}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.props.changed(event, person.id)} />
            );
        });
    };
};

export default Persons;