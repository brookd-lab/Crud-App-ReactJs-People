import {useState} from 'react';

const Input = ({addPerson}) => {

    const [inputValue, setInputValue] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);        
    };

    return (
        <>
            <label>Enter some data </label>
            <input type="text" name="myInput" onChange={handleInputChange} value={inputValue}></input>
            <button onClick={() => { addPerson(inputValue); setInputValue(''); }}>Add</button>
        </>
    )
}

export default Input