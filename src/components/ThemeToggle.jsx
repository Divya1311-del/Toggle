import React , {useEffect, useState} from 'react';
const ThemeToggle = ()=>{
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(()=> {
        const savedTheme =localStorage.getItem('theme');
        if (savedTheme){
            document.documentElement.setAttribute('data-theme' , savedTheme);
            setIsDarkMode(savedTheme==='dark');
        }
    }, []);
    const toggleTheme= ()=>{
        const newTheme=isDarkMode ? 'light' :'dark';
        document.documentElement.setAttribute('data-theme',newTheme);
        localStorage.setItem('theme',newTheme);
        setIsDarkMode(!isDarkMode);
    };
    return(
        <button onClick={toggleTheme}>
            {isDarkMode?'Light':'Dark'}
        </button>
    );
};
export default ThemeToggle;