import './App.css';
import Header from './Components/Header/Header';

import {useEffect,} from "react";
import useLocalStorage from 'use-local-storage';

import Mainpage from './Pages/Mainpage/Mainpage';
// import Mainpage from './Pages/Mainpage/page';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="App">
      <Header switchTheme={switchTheme} theme={theme} />
      <Mainpage />
    </div>
  );
}

export default App;
