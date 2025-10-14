import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({item, deleteToDo, completeToDo, switchToEditing}) => {
    return (
        <div>
            <span className={item.isCompleted ? "completed" : ""} onClick={() => completeToDo(item.key)}>{item.task}</span>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => switchToEditing(item.key)} />
            <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteToDo(item.key)}  />
        </div>
    );
};

export default ToDo;