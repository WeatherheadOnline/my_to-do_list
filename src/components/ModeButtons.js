import React, {useState} from 'react'

const ModeButtons = ({getTheme, themeOptions}) => {

    const [active, setActive] = useState("teal");
 
    const handleClick = e => {
        getTheme(e.target.id);
        setActive(e.target.id);
    };
    
  return (
    <div className="modes-wrapper">
       {themeOptions.map((theme) => {
        const classNames = 'mode-button ' + (active === theme.themeName ? "active" : "");
        return (
           <div 
                className={classNames}
                id={theme.themeName} 
                key={theme.key} 
                onClick={handleClick}
            ></div>
        )})}
    </div>
  );
};

export default ModeButtons;