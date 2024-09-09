import React, { useState } from 'react';
import './index.css'; // Import CSS for light and dark themes

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={isDarkMode ? 'app dark-mode' : 'app light-mode'}>
            <header>
                <button onClick={toggleTheme}>
                    Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
                </button>
            </header>
            <main>
                <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
                <p>Welcome to the theme switcher example!</p>
            </main>
        </div>
    );
};

export default App;
