import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import SignInSignUp from './components/SignInSignUp/SignInSignUp'

function App(){
  return(
    <div className='App'>
      <header className='App-header'>
        <ThemeToggle/>
        <SignInSignUp/>
      </header>
    </div>
  );
}
export default App;
