import './App.css';
// import Test from './components/Input';
// import Edit from './components/Edit';
import PeopleList from './components/PeopleList';
import {useState} from 'react';

function App() {
  const [people, setPeople] = useState([
    {"name":"jessica"},
    {"name":"sammy"},
  ]);

  const [person, setPerson] = useState(null);
  const [index, setIndex] = useState(-1);

  const peopleMap = people.map((person, index) => (
    <div key={index}>
      <div>{person.name}
        <button onClick={() => removePerson(index)}>Remove</button>
        <button onClick={() => editPerson(person, index)}>Edit</button>
      </div>
    </div>
  ));

  const alertPerson = (i) => {
    alert(people[i].name);
  }

  const addPerson = (name) => {   
    const person = {"name": name};
    setPeople([...people, person]);
    // setMessage('');
  }

  const removePerson = (index) => {
    var removedPerson = people.splice(index, 1); //get person to remove
    setPeople(people.filter(person => person !== removedPerson));
    //const filtered = people.filter((person, i) => index !== i)
  }

  const editPerson = (personData, index) => {
    setPerson(personData.name);
    setIndex(index);
  }

  return (
    <div className="App">
      {/* <Test addPerson={addPerson} />
      <p>{peopleMap}</p>
      <Edit i={index} person={person} setPerson={setPerson} people={people} setPeople={setPeople}  />  */}
      <PeopleList></PeopleList>
    </div>
  );
}

export default App;
