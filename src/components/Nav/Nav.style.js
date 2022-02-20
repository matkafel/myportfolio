import styled from "styled-components";
import { theme } from '../../theme/theme'

export const NavWrapper = styled.div`
  display:flex;
  justify-content:space-between;
	margin-top: 36px;
	height: 40px;
	@media (max-width: 740px) {
      margin-top: 24px;
  } 
	@media (max-width: 540px) {
      margin-top: 12px;
  } 
`;

export const Logo = styled.i`
	font-size: 4rem;
	@media (max-width: 440px) {
    font-size: 3rem;
  } 
`;

export const LinkWrapper = styled.div`
	font-size: 1.8rem;
	display: flex;
	align-items:center;
	margin-right: -12px;
	@media (max-width: 440px) {
    font-size: 1.4rem;
  } 
`;

export const LinkTo = styled.a`
	margin: 0 12px;
	cursor: pointer;
	transition: 0.3s;
	font-weight: 500;
	text-decoration: none;
	&:hover{
		color: ${theme.colors.primaryColor};
	}
`;