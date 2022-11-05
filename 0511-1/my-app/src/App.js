import './App.css';
import { useContext, useState } from 'react';
import AppButton from './components/AppButton';
import AppContent from './components/AppContent';
import AppData from './components/AppData';
import { ThemeContext } from './context/ThemeContext';

function App() {

  const [currentTheme, setCurrentTheme] = useState('light')
  const changeTheme = useContext(ThemeContext)

  const [color, setColor] = useState('')

  return (
    <ThemeContext.Provider value={color} className="App">
      <div className="button-wrapper">
        <input onChange={(event) => setColor(event.target.value)} placeholder='input color to change theme'></input>
        <button onClick={() => { setCurrentTheme('light') }}>Light</button>
        <button onClick={() => { setCurrentTheme('dark') }}>Dark</button>
      </div>
      <div className={`bg-${color}`}>
        <AppButton />
        <AppContent />
        <AppData />
      </div >
    </ThemeContext.Provider>
  );
}

export default App;
