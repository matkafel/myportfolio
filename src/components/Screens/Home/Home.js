import React, {useEffect} from 'react';
import { HomeWrapper,ContentHomeWrapper,Headline, TextWrapper, Name, Title, SubTitle, ImageWrapper } from './Home.style';
import { ContentWrapper } from '../../../App.style';
import SocialIcon from '../../SocialIcon/SocialIcon'
import homeImg from '../../../assets/home.svg';
import Aos from "aos";


const Home = () => {
		const windowWidth = window.innerWidth;

	  useEffect(() => {
      Aos.init({ duration: 1200 })
    }, []);

	return (
		<ContentWrapper>
			<HomeWrapper>
			<Headline data-aos="fade-up">programmer</Headline>
				<ContentHomeWrapper>
					<TextWrapper>
						<Name>Mateusz Kafel</Name>
						<Title>Web Developer</Title>
						<SubTitle>With UI & UX Skills</SubTitle>
						{windowWidth > 1000 ?
						<>
							<SocialIcon name={'fab fa-linkedin-in'} color={'#0E76A8'} backgroundColor={'#D4F1FF'} fontSize={'24px'} top={'35%'} left={'50%'} link="https://www.linkedin.com/in/mat-kafel/" />
							<SocialIcon name={'fab fa-twitter'} color={'#00ACEE'} backgroundColor={'#E5F8FF'} fontSize={'24px'} top={'60%'} left={'3%'} />
							<SocialIcon name={'fab fa-github'} color={'#24292E'} backgroundColor={'#F0F0F0'} fontSize={'24px'} top={'65%'} left={'55%'} link="https://github.com/matkafel"/> 
						</>
						: ''
						}
					</TextWrapper>
					<ImageWrapper >
						<img src={homeImg} alt="" />
					</ImageWrapper>
				</ContentHomeWrapper>
			</HomeWrapper>
		</ContentWrapper>
  );
}

export default Home
