import ToDoWrapper from './components/ToDoWrapper'
import ModeButtons from './components/ModeButtons';
import './App.css';
import './css/themes.css'
import { useState } from 'react';

function App() {
    const themeOptions = [
        {themeName: "purple", key: 0},
        {themeName: "teal", key: 1},
        {themeName: "teal-brown", key: 2},
        {themeName: "navy-beige", key: 3},
    ];

    const [theme, setTheme] = useState("teal");

    function getTheme(newTheme) {
        setTheme(newTheme)
    };

    return (
        <section className={theme}>
            <div className='bkgd-layer' /> 
            <ToDoWrapper />
            <ModeButtons getTheme={getTheme} themeOptions={themeOptions}  />
        </section>
    );
}

export default App;