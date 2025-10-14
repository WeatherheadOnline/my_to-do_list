import React, {useState, useEffect } from 'react'
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

const ToDoWrapper = () => {
    const [keyCounter, setKeyCounter] = useState(0);
    const [toDoList, setToDoList] = useState([]);
    const addToDo = todo => setToDoList([...toDoList, {
        task: todo, 
        key: keyCounter,
        isCompleted: false
    }]);
    const deleteToDo = key => setToDoList(toDoList.filter(item => item.key !== key));
    const keySetter = prevKey => setKeyCounter(prevKey + 1);    

    const handleAddToDo = todo => {
        addToDo(todo);
        keySetter(keyCounter);
        console.log(keyCounter);
    }

    const completeToDo = key => {
        setToDoList(toDoList.map(item => item.key === key ? {...item, isCompleted: !item.isCompleted} : item))
    }
    
  return (
    <div>
      <ToDoForm handleAddToDo={handleAddToDo} />
        {toDoList.map((item) => {
            return (
                <ToDo key={item.key} item={item} deleteToDo={deleteToDo} completeToDo={completeToDo} />
            )
        })}
    </div>
  );
};

export default ToDoWrapper;
