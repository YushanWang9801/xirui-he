import './App.css';
import Header from './Components/Header/Header';

import {useEffect,} from "react";
import useLocalStorage from 'use-local-storage';

import Mainpage from './Pages/Mainpage/Mainpage';
import Playground from './Pages/Playground/Playground';
import Project from "./Pages/Project/Project";

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
      {/* <Mainpage /> */}
      {/* <Playground /> */}
      <Project />
    </div>
  );
}

export default App;
