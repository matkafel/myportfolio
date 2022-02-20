import React from 'react';
import { FooterWrapper, IconWrapper, TextWrapper, Text } from './Footer.style';
import SocialIcon from '../../SocialIcon/SocialIcon';


const Footer = () => {
  return (
		<>
			<FooterWrapper>
				<IconWrapper>
					<SocialIcon name={'fab fa-linkedin-in'} color={'#0E76A8'} backgroundColor={'#D4F1FF'} fontSize={'24px'} top={'0px'} left={'-1.5%'} animation={'false'} position={'relative'} link="https://www.linkedin.com/in/mat-kafel/"/>
					<SocialIcon name={'fab fa-twitter'} color={'#00ACEE'} backgroundColor={'#E5F8FF'} fontSize={'24px'} top={'0px'} left={'0%'} animation={'false'} position={'relative'} />
					<SocialIcon name={'fab fa-github'} color={'#24292E'} backgroundColor={'#F0F0F0'} fontSize={'24px'} top={'0px'} left={'1.5%'} animation={'false'} position={'relative'} link="https://github.com/matkafel"/>
				</IconWrapper>
				<TextWrapper>
					<Text>©2022 Making with <i className="fas fa-heart"></i> by Mateusz Kafel</Text>
				</TextWrapper>
			</FooterWrapper>
		</>
  );
}

export default Footer
