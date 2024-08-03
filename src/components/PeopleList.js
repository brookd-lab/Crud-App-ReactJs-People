import {useState} from 'react';
import Test from './Input';
import Edit from './Edit';

function PeopleList() {
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
    //console.log(`Editing person: ${personData.name}`)
    setPerson(personData.name);
    setIndex(index);
  }

  return (
    <div>
      <Test addPerson={addPerson} />
      <p>{peopleMap}</p>
      <Edit index={index} person={person} setPerson={setPerson} people={people} setPeople={setPeople}  /> 
    </div>
  );
}

export default PeopleList;
