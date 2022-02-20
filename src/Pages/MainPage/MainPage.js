import React from 'react';
import Nav from '../../components/Nav/Nav';
import Home from '../../components/Screens/Home/Home';
import Projects from '../../components/Screens/Projects/Projects';
import AboutMe from '../../components/Screens/AboutMe/AboutMe';
import Contact from '../../components/Screens/Contact/Contact';

const MainPage = () => {
  return (
		<>
			<Nav />
			<Home />
			<Projects />
			<AboutMe />
			<Contact />
		</>
  );
}

export default MainPage