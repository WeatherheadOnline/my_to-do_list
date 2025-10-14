import ToDoWrapper from './components/ToDoWrapper'
import ModeButtons from './components/ModeButtons';
import './App.css';

function App() {
    return (
        <>
            <div className='bkgd-layer' /> 
            <ToDoWrapper />
            <ModeButtons />
        </>
    );
}

export default App;