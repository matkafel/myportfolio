import React, {useEffect} from 'react';
import { ContactWrapper, Title, TextWrapper, Headline, Text,Content } from './Contact.style';
import Footer from '../../Screens/Footer/Footer';
import Aos from "aos";

const Contact = () => {

	useEffect(() => {
    Aos.init({ duration: 1200 })
  }, []);

  return (
		<ContactWrapper id="contact">
			<Content>
			<Title>Contact</Title>
			<TextWrapper>
				<Headline data-aos="fade-up">Get in touch</Headline>
				<Text>Olkusz, Poland</Text>
				<Text>mat.kafel@gmail.com</Text>
				<Text>504 081 493</Text>
			</TextWrapper>
			<Footer />
			</Content>
		</ContactWrapper>
  );
}

export default Contact
