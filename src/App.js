import ToDoWrapper from './components/ToDoWrapper'
import ModeButtons from './components/ModeButtons';
import './App.css';
import './css/themes.css'
import { useState } from 'react';

function App() {
    const themeOptions = [
        {themeName: "light", key: 0},
        {themeName: "dark", key: 1},
        {themeName: "purple", key: 2},
        {themeName: "teal", key: 3},
        {themeName: "teal-brown", key: 4},
        {themeName: "navy-beige", key: 5},
        // {themeName: "w-online", key: 4},
        {themeName: "cream-green", key: 6},
        {themeName: "unicorn", key: 7}

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