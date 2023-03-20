import './App.css';
import Header from './Components/Header/Header';

import {useEffect,} from "react";
import useLocalStorage from 'use-local-storage';

import Mainpage from './Pages/Mainpage/Mainpage';
import Playground from './Pages/Playground/Playground' ;
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";

import {Routes, Route, Navigate } from "react-router-dom";

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
      <Routes>
          <Route key="home"     path="/" element={<Mainpage />} />
          <Route key="project"  path="/project" element={<Project />} />
          <Route key="playground"  path="/playground" element={<Playground />} />
          <Route key="connect"  path="/connect" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
