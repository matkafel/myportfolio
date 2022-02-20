import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Button from '../../components/Button/Button';
import Footer from '../../components/Screens/Footer/Footer';
import {ProjectWrapper, HeadlineWrapper, Headline, Image, DescriptionWrapper, InformationsWrapper, RolesWrapper, TechnologiesWrapper, Title, Desc, ButtonWrapper} from './ProjectDetailsPage.style';
import {ContentWrapper} from '../../App.style';
import Aos from 'aos'

const ProjectDetails = () => {
  const { state } = useLocation();

	useEffect(() => {
    Aos.init({ duration: 1200 })
  }, []);
	
	return (
		<ContentWrapper>
			<ProjectWrapper>
				<HeadlineWrapper>
					<Headline>{state.projects.title}</Headline>
					<Headline>2019</Headline>
				</HeadlineWrapper>
				<Image data-aos="fade-up">
					<img src={state.projects.image} alt="" />
				</Image>
				<DescriptionWrapper>
					<InformationsWrapper>
						<Title>Informations</Title>
						<Desc>{state.projects.informations}</Desc>
					</InformationsWrapper>
					<RolesWrapper>
						<Title>Roles</Title>
						<Desc>{state.projects.roles}</Desc>
					</RolesWrapper>
					<TechnologiesWrapper>
						<Title>Technologies</Title>
						<Desc>{state.projects.technologies}</Desc>
					</TechnologiesWrapper>
				</DescriptionWrapper>
				{state.projects.link ? 
					<ButtonWrapper>
						<a href={state.projects.link} target="_blank" rel="noreferrer">
							<Button primary>See in live <i className="fas fa-long-arrow-alt-right"></i></Button>
						</a>
					</ButtonWrapper> : ''
				}
			</ProjectWrapper> 
			<Footer></Footer>
		</ContentWrapper>
  );
}

export default ProjectDetails

