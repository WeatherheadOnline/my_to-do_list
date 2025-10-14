import {useState} from 'react'

const EditToDoForm = ({item, handleEdited}) => {
    const [value, setValue] = useState(item.task);
    const handleSubmit = e => {
        e.preventDefault();
        handleEdited(item.key, value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => {setValue(e.target.value)}} placeholder={item.task} />
            <button type="sumbit">Update</button>
        </form>
    )
}

export default EditToDoForm