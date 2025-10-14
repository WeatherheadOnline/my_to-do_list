import React, {useState, useEffect } from 'react'
import ToDoForm from './ToDoForm';
import EditToDoForm from './EditToDoForm';
import ToDo from './ToDo';

const ToDoWrapper = () => {
    const [keyCounter, setKeyCounter] = useState(0);
    const [toDoList, setToDoList] = useState([]);
    const addToDo = todo => setToDoList([...toDoList, {
        task: todo, 
        key: keyCounter,
        isCompleted: false,
        isEditing: false
    }]);

    const deleteToDo = key => setToDoList(toDoList.filter(item => item.key !== key));
    const keySetter = prevKey => setKeyCounter(prevKey + 1);    
    const completeToDo = key => setToDoList(toDoList.map(item => item.key === key ? {...item, isCompleted: !item.isCompleted} : item))
    const switchToEditing = key => {
        setToDoList(toDoList.map(item => item.key === key ? {...item, isEditing: true} : item))
    }
    const handleEdited = (key, value) => {
        setToDoList(toDoList.map(item => item.key === key ? {...item, task: value, isEditing: false} : item))
    }

    const handleAddToDo = todo => {
        addToDo(todo);
        keySetter(keyCounter);
        console.log(keyCounter);
    }

  return (
    <div className='to-do-wrapper'>
        <h1>This is the list</h1>
        <ToDoForm handleAddToDo={handleAddToDo} />
        {toDoList.map(item => (
            item.isEditing ? (
                <EditToDoForm item={item} handleEdited={handleEdited} />
            ) : (
                <ToDo key={item.key} item={item} deleteToDo={deleteToDo} completeToDo={completeToDo} switchToEditing={switchToEditing} /> 
            )
        ))}
    </div>
  );
};

export default ToDoWrapper;