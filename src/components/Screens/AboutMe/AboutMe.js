import React, { useEffect } from 'react';
import MultipleItems from '../../Slider/Slider'
import Button from '../../Button/Button';
import { AboutMeWrapper, AboutMeContainer, Title, TextWrapper, ImageWrapper, Headline, Text, ButtonWrapper } from './AboutMe.style';
import { ContentWrapper } from '../../../App.style';
import Aos from "aos";
import aboutMeImg from '../../../assets/about.svg';
import Pdf from '../../../assets/pdf.pdf';

const AboutMe = () => {

 	useEffect(() => {
    Aos.init({ duration: 1200 })
  }, []);

  return (
			<ContentWrapper>
				<AboutMeWrapper id="aboutMe">
				<Title>About Me</Title>
					<AboutMeContainer>
						<ImageWrapper>
							<img src={aboutMeImg} alt="" />
						</ImageWrapper>
						<TextWrapper>
							<Headline  data-aos="fade-up">Hey,</Headline>
							<Text  data-aos="fade-up">I'm <span>web developer</span> who focuses on creating and designed a web applications and online store, also I create and designed mobile apps.</Text>
							<ButtonWrapper>
								<a href={Pdf} target="_blank" rel="noreferrer">
									<Button primary>See CV</Button>
								</a>
							</ButtonWrapper>
						</TextWrapper>
					</AboutMeContainer>
					<MultipleItems></MultipleItems>
				</AboutMeWrapper>
			</ContentWrapper>
  );
}

export default AboutMe
