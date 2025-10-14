import {useState} from 'react'

const EditToDoForm = ({item, handleEdited}) => {
    const [value, setValue] = useState(item.task);
    const handleSubmit = e => {
        e.preventDefault();
        value.length > 0 && handleEdited(item.key, value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-btn-group">
                <input type="text" value={value} onChange={e => {setValue(e.target.value)}} placeholder={item.task} />
                <button type="sumbit">Update</button>
            </div>
        </form>
    )
}

export default EditToDoForm