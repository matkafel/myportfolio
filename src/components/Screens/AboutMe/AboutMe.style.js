import styled from "styled-components";

export const AboutMeWrapper = styled.div`
	padding-top:48px;
	position: relative;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding-bottom: 64px;
`;

export const AboutMeContainer = styled.div`
	display: flex;
	margin-top: 48px;
	margin-bottom: 64px;
	position: relative;
	flex-grow: 1;
	align-items:center;
	@media (max-width: 1000px) {
		flex-direction: column;
 	 }
`;

export const ImageWrapper = styled.div`
	@media (max-width: 1240px) {
		img{width: 400px}
 	 }
	@media (max-width: 540px) {
		img{width: 350px}
 	 }
	@media (max-width: 380px) {
		img{width: 300px}
 	 }
`
export const Title = styled.div`
	font-size: 4.8rem;
	font-weight: 500;
	@media (max-width: 740px) {
		font-size: 3.6rem;
 	 }
`

export const TextWrapper = styled.div`
	margin-left: 64px;
	@media (max-width: 1000px) {
		margin-left:0;
		padding: 32px;
		text-align:center;
 	 }
	@media (max-width: 540px) {
		padding: 24px;
 	 }
`;

export const Headline = styled.p`
	font-size:3.2rem;
`;

export const Text = styled.p`
	font-size: 2.4rem;
	span{
		font-weight: 600;
	}
	@media (max-width: 540px) {
		font-size: 2rem;
 	 }
`;

export const ButtonWrapper = styled.div`
	display: flex; 
	margin-top: 64px;
	justify-content: center;
	Button{
		margin: 0;
	}
`