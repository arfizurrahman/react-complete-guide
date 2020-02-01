import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Arfiz', age: 25 },
      { name: 'Farez', age: 18 },
      { name: 'Farhana', age: 20 }
    ]
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personsState, otherState)

  const switchNameHandler = () => {
      setPersonsState({
        persons: [
          { name: 'Arfizur Rahman', age: 25 },
          { name: 'Farez', age: 18 },
          { name: 'Farhana', age: 13 }
        ]
      });
    }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Does this work now"))

}

export default App;

// state = {
//   persons: [
//     { name: 'Arfiz', age: 25 },
//     { name: 'Farez', age: 18 },
//     { name: 'Farhana', age: 20 }
//   ],
//   otherState: 'Other value'
// };
