import styled from "styled-components";
import { theme } from '../../../theme/theme';

export const ContactWrapper = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: #242629;
	width: 100vw;
`;

export const Content = styled.div`
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background: #242629;
	width: 100vw;
	max-width: 1248px;
	margin: 0 auto; 
	@media (max-width: 1248px) {
    padding:0 12px;
		max-width: 980px;
 	 } 
		@media (max-width: 1000px) {
			max-width: 720px;
 	 } 
`;

export const Title = styled.p`
	font-size: 4.8rem;
	font-weight: 500;
	padding-top: 48px;
	color:  ${theme.colors.lightTextColor};
	@media (max-width: 740px) {
		font-size: 3.6rem;
 	 }
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Headline = styled.p`
	font-size:9.6rem;
	font-weight:600;
	 color: #000;
  font-weight: bold;
  background: rgba(255, 253, 160, 1);
  background: linear-gradient(to left, #7F5AF0 20%, #A991F1 40%, #7F5AF0 60%, #7F5AF0 80%); 
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 6s linear infinite;
	@keyframes shine {
   100% {
      background-position: 200% center;
    }
}
	@media (max-width: 740px) {
		font-size: 8.2rem;
 	 }
	@media (max-width: 540px) {
		font-size: 6rem;
 	 }
	@media (max-width: 440px) {
		font-size: 4.6rem;
 	 }
`;

export const Text = styled.p`
	font-size: 2.4rem;
	color: white;
	@media (max-width: 540px) {
		font-size: 1.8rem;
 	 }
`;

