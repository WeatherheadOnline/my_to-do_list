import ToDoWrapper from './components/ToDoWrapper/ToDoWrapper'
import ModeButtons from './components/ModeButtons/ModeButtons';
import './App.css';
import './css/themes.css'
import { useState } from 'react';

function App() {
    const themeOptions = [
        {themeName: "light", key: 0},
        {themeName: "dark", key: 1},
        {themeName: "teal", key: 2},
        {themeName: "unicorn", key: 3},
        {themeName: "navy-beige", key: 4},
        {themeName: "purple", key: 5},
        {themeName: "cream-green", key: 6},
        {themeName: "night-stars", key: 7},
        {themeName: "teal-brown", key: 8},
        {themeName: "summer", key: 9},
    ];

    const [theme, setTheme] = useState("light");

    function getTheme(newTheme) {
        setTheme(newTheme)
    };

    return (
        <section className={theme}>
            <div className='bkgd-layer' /> 
            <ToDoWrapper />
            <ModeButtons getTheme={getTheme} themeOptions={themeOptions} initialState={theme} />
        </section>
    );
}

export default App;