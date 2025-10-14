import {useState} from 'react'

const ToDoForm = ({handleAddToDo}) => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        handleAddToDo(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => {setValue(e.target.value)}} placeholder='Enter a task here' />
        <button type="sumbit">Enter</button>
        </form>
    )
}

export default ToDoForm;