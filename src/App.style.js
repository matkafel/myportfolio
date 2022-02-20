import styled from "styled-components";
import { theme } from './theme/theme'

export const ThemeButton = styled.button`
  position: fixed;
  bottom: 5%;
  left: 5%;
  background: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  z-index: 10;
`;

export const SunIcon = styled.i`
font-size: 3rem;
color: gold;
`;

export const MoonIcon = styled.i`
  font-size: 3rem;
  color: ${theme.colors.darkTextColor};
`;

export const Title = styled.p`
	font-size: 4.8rem;
	font-weight: 500;
	color: ${theme.colors.lightTextColor};
	@media (max-width: 740px) {
			font-size: 3.6rem;
 	 }
`;

export const ContentWrapper = styled.div`
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
