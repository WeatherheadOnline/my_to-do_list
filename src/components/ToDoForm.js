import {useState} from 'react'

const ToDoForm = ({handleAddToDo}) => {
    const [value, setValue] = useState("");
    const [errorText, setErrorText] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        value.length < 1 ? setErrorText(true) : handleAddToDo(value);
        setValue("");
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => {setValue(e.target.value); setErrorText(false)}} placeholder='Enter a task here' />
        <button type="sumbit">Enter</button>
        <p className={errorText ? "activeError" : "inactiveError"}>Please enter some text</p>
        </form>
    )
}

export default ToDoForm;