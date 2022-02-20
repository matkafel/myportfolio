import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import MainPage from './Pages/MainPage/MainPage'
import ProjectDetailsPage from './Pages/ProjectDetailsPage/ProjectDetailsPage';
import AppDetailsPage from './Pages/ProjectDetailsPage/AppDetailsPage';

import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/globalStyle';
import { SunIcon, MoonIcon, ThemeButton } from './App.style';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "aos/dist/aos.css";

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
		<>
			<Router>	
				<Routes>
					<Route exact  path="/myportfolio" element={<MainPage/>} />
					<Route exact  path="/project/:id" element={<ProjectDetailsPage/>} />
					<Route exact  path="/app/:id" element={<AppDetailsPage/>} />
				</Routes>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <ThemeButton onClick={toggleTheme}>{theme === 'light' ? <MoonIcon className="far fa-moon"></MoonIcon> : <SunIcon className="fas fa-sun"></SunIcon>}</ThemeButton>
        </ThemeProvider>
			</Router>	
				</>
  );
} 

export default App

