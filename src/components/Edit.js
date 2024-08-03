import {useState} from 'react';

const Edit = ({index, person, setPerson, people, setPeople}) => {

    const handleChange = (event) => {
        setPerson(event.target.value);
    }

      const updatePerson = (newPerson) => {
        var copy = [...people];
        copy[index] = { "name": newPerson };
        console.log(copy);
        setPeople(copy);
      }
    

    return (
            <> {person && 
                <div>
                    <h2>Editing person</h2>
                    <input type="text" value={person} onChange={handleChange}></input>
                    <button onClick={() => { updatePerson(person); setPerson('');}}>Submit</button>
                </div>
                }   
            </>
    )
}

export default Edit;