import React, { useState, useEffect} from 'react';
import { ProjectsWrapper,ProjectsWrapperContent, ButtonWrapepr,ProjectsTileWrapper, LinkWrapper } from './Projects.style';
import { ContentWrapper, Title } from '../../../App.style';
import Button from '../../Button/Button'
import ProjectItem from '../../ProjectItem/ProjectItem';
import AppsData from '../../../Data/AppsData';
import ProjectsData from '../../../Data/ProjectsData';
import {  Link } from "react-router-dom";
import Aos from "aos";


const Projects = () => {
	const	[data, SetData] = useState(true)

 	useEffect(() => {
    Aos.init({ duration: 1200 })
  }, []);

  return (
			<ProjectsWrapper id="projects">
				<ContentWrapper>
					<ProjectsWrapperContent>
						<Title>My projects</Title>
						<ButtonWrapepr>
							<Button primary={data ? 'primary' : ''} onClick={() => SetData(true)}>Apps</Button>
							<Button primary={!data ? 'primary' : ''} onClick={() => SetData(false)}>Projects</Button>
						</ButtonWrapepr>
						<ProjectsTileWrapper>
							<LinkWrapper> 
							{data ? AppsData.map((apps) => {
									return ( 
										<Link to={`/app/${apps.id}`} state={{apps}} >
											<ProjectItem dataAos="fade-up" img={apps.image} key={apps.id}  />
										</Link>
									)
								}) :	
								ProjectsData.map((projects) => {
									return(
									<Link to={`/project/${projects.id}`} state={{projects}} >
										<ProjectItem dataAos="fade-up" img={projects.image} key={projects.id} />
									</Link>
									)
								})}
							</LinkWrapper>
						</ProjectsTileWrapper>
					</ProjectsWrapperContent>
				</ContentWrapper>
			</ProjectsWrapper>
  );
}

export default Projects
